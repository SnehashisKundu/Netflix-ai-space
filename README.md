# Netflix AI-Space — Backend

A real-time, AI-enabled watch-together backend for shared viewing sessions, synchronized playback, room chat, timeline-aware Q&A, interactive trivia, alternate story variations, and personalized recommendations.

> **Deployment note:** The intended production setup is a Node.js web service on Render backed by Supabase PostgreSQL. Verify the live service, database credentials, migration status, and environment variables before describing the full production deployment as healthy. Never put secrets in this README.

## Project links

- **Live API:** https://netflix-ai-space.onrender.com
- **Health check:** https://netflix-ai-space.onrender.com/health
- **Swagger / OpenAPI UI:** https://netflix-ai-space.onrender.com/docs
- **GitHub repository:** https://github.com/SnehashisKundu/Netflix-ai-space

Swagger is the source of truth for the routes, request/response schemas, and authentication requirements registered in the current build. Route details below describe the backend modules implemented during development; check Swagger for the exact live API surface.

## Contents

- [Product overview](#product-overview)
- [Features implemented](#features-implemented)
- [Technology stack](#technology-stack)
- [Architecture](#architecture)
- [End-to-end data-flow diagrams](#end-to-end-data-flow-diagrams)
- [Feature-by-feature data flow](#feature-by-feature-data-flow)
- [Main API modules](#main-api-modules)
- [Authentication and security](#authentication-and-security)
- [Database and Prisma migrations](#database-and-prisma-migrations)
- [Environment variables](#environment-variables)
- [Local development](#local-development)
- [Deploying with Render and Supabase](#deploying-with-render-and-supabase)
- [Testing and verification](#testing-and-verification)
- [Troubleshooting](#troubleshooting)
- [Repository structure](#repository-structure)
- [Development workflow](#development-workflow)

## Product overview

Netflix AI-Space is a backend for a synchronized, collaborative watch experience. Users authenticate, select a title, create or join a Watch Space, and exchange playback, chat, voting, and interactive content events. Timeline metadata can power contextual Q&A, trivia, and alternate variation choices. Recommendation and dashboard endpoints use persisted interaction/session data to personalize and summarize activity.

This repository contains the backend. A browser/mobile client is expected to call the HTTP API and connect to Socket.IO using the authentication mechanism implemented by the server.

## Features implemented

### Identity and access

- User registration and login.
- JWT access/refresh-token flow, including refresh-token persistence and reuse-rejection behavior implemented during development.
- Authentication middleware for protected routes and socket connections.
- Login rate limiting, Helmet security headers, restricted CORS configuration, and request-body size limits.

### Titles and story metadata

- Title metadata CRUD.
- Timeline event CRUD and timeline/context retrieval.
- Variation options attached to timeline events.
- Locale-specific variation lookup and variation updates/deletion.

### Watch-together sessions

- Create, join, inspect, leave, and end Watch Spaces.
- Join codes and participant membership tracking.
- Playback synchronization and room-scoped Socket.IO broadcasts.
- Chat API/socket flows.
- Narrative variation voting scoped to a Watch Space and timeline event.

### AI and interactive viewing

- Timeline-grounded Q&A using Gemini, with a primary/fallback provider arrangement and timeout/error normalization.
- AI question logging associated with the user, title, and optional Watch Space.
- Trivia cards sourced from title timeline metadata.
- Localization/subtitle variation lookup and swap support.

### Personalization and analytics

- Hybrid recommendation ranking using content-based signals and collaborative interaction signals.
- User dashboard with recently watched items, active Watch Spaces, and quick rejoin data.
- Watch Space analytics including session duration, peak concurrent participants, chat activity, trivia availability, and AI-question counts.

> Feature descriptions reflect the project implementation history. Use the tests and live Swagger document to confirm the exact behavior of a particular deployed revision.

## Technology stack

| Layer | Technology |
|---|---|
| Runtime | Node.js (local development used Node 22; deployment may use the configured platform runtime) |
| Language | TypeScript, ESM |
| HTTP framework | Express 5 |
| Real-time transport | Socket.IO 4 |
| Database | PostgreSQL hosted on Supabase |
| ORM / migrations | Prisma 7 with PostgreSQL driver adapter and project Prisma config |
| Validation | Zod |
| Authentication | JWT and bcrypt password hashing |
| AI | Google Gemini via `@google/genai` |
| API docs | OpenAPI 3 / Swagger UI (`swagger-jsdoc`, `swagger-ui-express`) |
| Security | Helmet, `express-rate-limit`, CORS policy, body-size limits |
| Hosting target | Render web service |
| Source control | GitHub |
| Testing | Vitest; service tests and smoke tests |

## Architecture

```mermaid
flowchart TD
    Client[Web / Mobile Client] -->|HTTPS JSON + access token| Render[Render Web Service]
    Swagger[Swagger UI / API Consumer] -->|HTTP requests| Render
    Render --> Env[Environment validation]
    Env --> App[Express application]
    App --> Middleware[Security, CORS, rate limits, auth]
    Middleware --> Routes[Feature routers]
    Routes --> Controllers[Controllers + request validation]
    Controllers --> Services[Feature services / business rules]
    Services --> Prisma[Prisma Client + PostgreSQL adapter]
    Prisma --> DB[(Supabase PostgreSQL)]
    App <--> Socket[Socket.IO server]
    Socket --> SocketAuth[Socket authentication]
    SocketAuth --> Room[Watch Space rooms]
    Room <--> Clients[Connected room participants]
    Services --> AI[AI provider layer]
    AI --> Gemini[Gemini API]
    AI --> Fallback[Configured fallback model/provider]
    Services --> Logs[(AI question and interaction records)]
    Logs --> DB
```

### Architecture responsibilities

- **Express application (`src/app.ts`):** security middleware, health route, and feature-router registration.
- **Server (`src/server.ts`):** starts the HTTP server and Socket.IO integration.
- **Environment configuration (`src/config/env.ts`):** validates required runtime configuration and fails fast when required values are missing.
- **Controllers:** parse inputs and translate service outcomes into HTTP responses.
- **Services:** implement authorization-sensitive business rules, queries, and mutations.
- **Prisma layer (`src/lib/prisma.ts`):** database access through the configured Prisma client/adapter.
- **Socket layer (`src/socket/`):** authenticates connections and handles room-scoped real-time events.
- **AI layer (`src/lib/ai/`):** provider abstraction, timeout/error handling, Gemini integration, and fallback behavior.

## End-to-end data-flow diagrams

### 1. Registration and protected API request

```mermaid
sequenceDiagram
    actor User
    participant Client
    participant API as Express API
    participant Auth as Auth Service
    participant DB as Supabase PostgreSQL

    User->>Client: Submit registration details
    Client->>API: POST /auth/register
    API->>Auth: Validate input and apply registration rules
    Auth->>DB: Create user (password stored as a hash)
    DB-->>Auth: User record
    Auth-->>API: Registration result
    API-->>Client: Success response

    User->>Client: Sign in
    Client->>API: POST /auth/login
    API->>Auth: Verify credentials
    Auth->>DB: Read user and token/session records
    DB-->>Auth: Matching records
    Auth-->>API: User + tokens on success
    API-->>Client: Login response
    Client->>API: Protected request with access token
    API->>API: Authenticate and authorize request
    API-->>Client: Protected response or 401/403
```

### 2. Watch Space lifecycle

```mermaid
flowchart TD
    A[Authenticated host] --> B[POST /watch-spaces]
    B --> C{Input valid and title available?}
    C -- No --> E[Return validation / domain error]
    C -- Yes --> D[Create Watch Space + host membership]
    D --> F[Return space details and join code]
    F --> G[Other authenticated user submits join code]
    G --> H{Join allowed?}
    H -- No --> E
    H -- Yes --> I[Persist participant membership]
    I --> J[Participant connects to Socket.IO]
    J --> K[Authenticate socket and join authorized room]
    K --> L[Playback / chat / trivia / voting events]
    L --> M[Leave or host ends Watch Space]
    M --> N[Persist lifecycle change and notify room as appropriate]
```

### 3. Real-time playback and chat

```mermaid
sequenceDiagram
    actor A as Participant A
    participant Socket as Socket.IO Server
    participant Logic as Socket Event Handler
    participant DB as Supabase PostgreSQL
    actor B as Participant B

    A->>Socket: Connect with configured authentication
    Socket->>Logic: Validate identity and membership
    Logic-->>Socket: Connection authorized
    A->>Socket: Emit supported room event
    Socket->>Logic: Validate event + room access
    alt Event needs persistence
        Logic->>DB: Save state/message/event
        DB-->>Logic: Persisted result
    end
    Logic-->>Socket: Broadcast event to authorized Watch Space room
    Socket-->>B: Room-scoped update
    B->>B: Update playback/chat UI
```

The exact socket event names and payload contracts live in `src/socket/socket.events.ts` and related socket files. Do not infer socket event names from REST paths.

### 4. Timeline-aware AI Q&A

```mermaid
flowchart TD
    A[Authenticated client asks question] --> B[Q&A endpoint validates title, question, timestamp, optional Watch Space]
    B --> C[Load relevant title timeline/context]
    C --> D[Build grounded prompt from timeline metadata]
    D --> E[AI provider layer]
    E --> F{Primary model succeeds before timeout?}
    F -- Yes --> G[Return grounded answer and source references]
    F -- No --> H[Try configured fallback behavior]
    H --> I{Fallback succeeds?}
    I -- Yes --> G
    I -- No --> J[Return normalized AI error]
    G --> K{Watch Space supplied?}
    K -- Yes --> L[Write AiQuestionLog for user/title/space]
    K -- No --> M[Return response without space-scoped log]
    L --> N[Client displays answer and sources]
    M --> N
```

AI answers are intended to be grounded in the title's timeline/context, not treated as an unrestricted source of canonical plot truth. Verify the current Q&A service implementation when changing prompts or source selection.

### 5. Narrative variation voting

```mermaid
flowchart TD
    A[Host/client reaches a pre-authored variation point] --> B[Load timeline event + available options]
    B --> C[Open vote for Watch Space]
    C --> D[Participants submit votes]
    D --> E[Validate participant, event, option and room scope]
    E --> F[Persist/update vote scoped to space + event + user]
    F --> G[Count votes per option]
    G --> H[Choose winner deterministically]
    H --> I[Broadcast winning option / applied variation to room]
    I --> J[Clients apply the same selected variation]
```

Votes are scoped to the relevant Watch Space and timeline event. The database uniqueness rule prevents a user from creating duplicate votes for the same `(watchSpaceId, timelineEventId, userId)` scope.

### 6. Recommendations and dashboard analytics

```mermaid
flowchart LR
    User[User interactions and viewing activity] --> InteractionDB[(PostgreSQL interaction records)]
    InteractionDB --> Content[Content-based scoring: title metadata / genre signals]
    InteractionDB --> Collab[Collaborative scoring: similar-user signals]
    Content --> Hybrid[Hybrid ranker]
    Collab --> Hybrid
    Hybrid --> RecAPI[GET /recommendations]
    RecAPI --> Client[Recommendation rail]
    InteractionDB --> Dash[Dashboard service]
    Sessions[(Watch Space memberships, playback, chat, trivia, AI logs)] --> Analytics[Watch Space analytics service]
    Dash --> DashboardAPI[GET /dashboard]
    Analytics --> AnalyticsAPI[GET /dashboard/watch-spaces/:watchSpaceId/analytics]
    DashboardAPI --> Client
    AnalyticsAPI --> Client
```

The recommendation implementation combines content-based and collaborative signals (the service uses a hybrid weighting strategy). The dashboard aggregates recent viewing and active room membership; per-room analytics combines session, participation, chat, trivia, and AI-question data.

## Feature-by-feature data flow

### Authentication

1. The client submits registration data to `POST /auth/register`.
2. The API validates the payload and applies password hashing before storing the user through Prisma.
3. The client submits credentials to `POST /auth/login`.
4. The service verifies the credentials and issues the configured tokens.
5. Protected HTTP routes validate the access token; refresh/logout behavior follows the registered auth routes and service logic.
6. Socket authentication uses the configured socket authentication flow. A successful HTTP login alone should not be assumed to authorize an arbitrary room; membership must also be checked.

### Titles, timeline, and variations

1. Title metadata is stored in PostgreSQL.
2. Timeline events associate timestamps and event metadata with a title.
3. Variation options are associated with timeline events and can represent alternate narrative or localized/subtitle content.
4. Timeline/context endpoints supply metadata to client features such as trivia and Q&A.
5. Variation endpoints provide the options needed for localization swaps and narrative voting.

### Watch Space and playback

1. An authenticated host creates a Watch Space for a title.
2. The backend persists room state and membership and returns the join details.
3. Participants join through the supported join route and are tracked in the database.
4. Socket connections are authenticated and checked against the room's membership/access rules.
5. Supported playback events are broadcast to the relevant room so connected clients can synchronize state.
6. Members can leave; the host can end the room through the supported lifecycle routes.

### Chat

1. A participant sends a chat message through the documented REST or Socket.IO flow.
2. The backend validates identity, room membership, and payload shape.
3. Persisted messages are written to PostgreSQL.
4. The message/update is emitted only to the relevant Watch Space room.
5. Clients render the new message. Confirm exact event names and persistence behavior in the socket/chat implementation before building a client integration.

### Trivia

1. The client requests trivia for a title.
2. The backend selects timeline events tagged/configured for trivia.
3. The response returns the available cards/events and their supported metadata.
4. The client displays trivia at the relevant viewing moment. Confirm the exact timing contract with the current client/socket implementation.

### AI Q&A and logging

1. The client sends a question with the title context, playback timestamp, and optional Watch Space ID when supported.
2. The API validates the request and obtains relevant timeline context.
3. The AI provider layer calls Gemini with a timeout and configured fallback behavior.
4. The API returns an answer and source references when available.
5. When a Watch Space is included, the service can record an `AiQuestionLog` associated with the relevant user, title, and room.
6. Analytics can count these records for the room dashboard.

### Recommendation engine

1. The service loads active title metadata and relevant interaction history.
2. Interactions contribute weighted positive/negative signals (for example, likes/completions versus dislikes/skips).
3. Content-based scoring estimates title relevance from metadata and interaction preferences.
4. Collaborative scoring uses interaction patterns from similar users.
5. The hybrid ranker combines both scores, sorts results, and returns title metadata, score, and a reason field.
6. New users with insufficient interaction history may receive an empty or limited result set, depending on available signals and current service behavior.

### Dashboard and session analytics

- `GET /dashboard` summarizes recent viewing, active Watch Spaces, and quick-rejoin candidates for the authenticated user.
- `GET /dashboard/watch-spaces/:watchSpaceId/analytics` returns analytics for an accessible room, including session duration, peak concurrent participants, chat activity, trivia-card availability, and AI question counts.
- Analytics access is membership-scoped; verify the exact authorization and error responses in Swagger/service tests.

## Main API modules

The paths below describe the principal modules. **Use the live Swagger UI for the complete and exact current endpoint catalog.**

| Module | Purpose | Main data involved |
|---|---|---|
| Health / docs | Health check and interactive API reference | Runtime status, OpenAPI spec |
| Auth | Register, login, refresh/logout and identity | Users, refresh tokens |
| Titles | Manage title metadata | Titles |
| Timeline | Create/read/update/delete timeline events; retrieve context/trivia | Timeline events, titles |
| Variations | Manage variation options and locale-specific variants | Timeline events, variation options |
| Interactions | Store/query user viewing signals | Users, titles, interactions |
| Watch Space | Create/join/leave/end rooms, membership, voting | Watch Spaces, participants, votes |
| Playback / sockets | Synchronize state and broadcast events | Playback state/timestamps, room membership |
| Chat | Room chat | Chat messages, participants |
| Q&A | Timeline-grounded AI answers | Timeline context, AI provider, AI logs |
| Recommendations | Personalized hybrid ranking | Title metadata, interactions |
| Dashboard | Recent viewing, active rooms, quick rejoin | Interactions, Watch Spaces, participants |
| Room analytics | Room/session metrics | Participants, playback, chat, trivia, AI logs |

### Confirmed principal Watch Space routes

| Method | Path | Purpose | Authentication |
|---|---|---|---|
| `POST` | `/watch-spaces/` | Create a Watch Space | Required |
| `POST` | `/watch-spaces/join` | Join using the supported join details/code | Required |
| `GET` | `/watch-spaces/:id` | Read a Watch Space | Required |
| `POST` | `/watch-spaces/:id/leave` | Leave a Watch Space | Required |
| `PATCH` | `/watch-spaces/:id/end` | End a Watch Space | Required |
| `POST` | `/watch-spaces/:id/variations/:variationId/vote` | Vote on a variation | Required |

### Other route groups

Swagger documents the current paths and schemas for authentication, titles, timeline, variations, interactions, chat, Q&A, recommendations, dashboard, and room analytics. Some examples of important operations include:

- `GET /health`
- `POST /auth/register`
- `POST /auth/login`
- `GET /recommendations?limit=10`
- `GET /dashboard?limit=10`
- `GET /dashboard/watch-spaces/:watchSpaceId/analytics`
- `GET /titles/:titleId/qa/answer?question=...&at=...&watchSpaceId=...` (the `watchSpaceId` query parameter is optional when supported)

OpenAPI documentation: https://netflix-ai-space.onrender.com/docs

## Authentication and security

- Store passwords as hashes; never log or return raw passwords.
- Keep JWT secrets, database URLs, Gemini keys, refresh tokens, and access tokens out of source control and screenshots.
- Rotate any credential that has been exposed, and update every service that uses it.
- Login attempts are rate-limited in the Express application.
- Helmet security headers, CORS restrictions, JSON/urlencoded body limits, and disabled `x-powered-by` are configured in the app.
- Use HTTPS for deployed HTTP traffic.
- Do not expose a Supabase secret API key or database password to browser clients. The backend should connect using its server-side `DATABASE_URL`.
- Restrict Watch Space operations to authenticated users with valid membership/ownership permissions.
- Avoid destructive test requests against production data; use a dedicated test account.

## Database and Prisma migrations

The project uses Prisma 7 and a project config file (`prisma7.config.ts` / generated JavaScript config in the local setup) that reads `DATABASE_URL` and points at `prisma/schema.prisma` and `prisma/migrations/`.

### Migration history in this repository

1. `20260927224102_init`
2. `20260928221520_add_refresh_tokens`
3. `20260929211312_add_watch_space_join_code`
4. `20260930154603_add_playback_sync_timestamp`
5. `20261003225254_add_variation_votes`
6. `20261004095000_scope_variation_votes_by_event`
7. `20261006215508_add_ai_question_logs`

The presence of a migration folder in Git does **not** prove it has been applied to the current database. Confirm the target database and migration status before reporting migrations as applied.

```powershell
# Generate Prisma Client and compile TypeScript (build script includes prisma generate)
npm run build

# Inspect migration status without applying migrations
npx prisma migrate status --config prisma7.config.ts

# Apply reviewed, committed migrations to the configured database
npx prisma migrate deploy --config prisma7.config.ts
```

Run `migrate deploy` only after verifying that `DATABASE_URL` points to the intended Supabase project and the credentials work. Do not use `prisma migrate dev` against the production database.

## Environment variables

Set secrets in Render's Environment settings (and in an untracked local `.env` for development). Do not place real values in this file.

| Variable | Required? | Purpose / notes |
|---|---|---|
| `DATABASE_URL` | Yes | PostgreSQL URI for Supabase. For local development this may point to local PostgreSQL; for Render it must point to the intended Supabase database/pooler. |
| `JWT_ACCESS_SECRET` | Yes | Access-token signing secret used by the current environment validator. |
| `GEMINI_API_KEY` | Yes | Server-side Gemini API key used by AI features. |
| `JWT_REFRESH_SECRET` | Check current validator | Refresh-token signing secret if required by the current auth implementation/config. Set it when the validator expects it. |
| `PORT` | Platform-provided / local default | Render provides a runtime port; local development may use a configured default. |
| `NODE_ENV` | Recommended | Set to `production` on Render. |
| `CORS_ORIGIN` | Depends on client | Set to the deployed frontend origin; local default may be `http://localhost:5173`. |
| `REDIS_URL` | Only if used by deployed code | Local development previously used `redis://localhost:6381`; do not assume hosted Redis is required unless the current implementation uses it. |
| `GEMINI_PRIMARY_MODEL` | If read by AI config | Primary model name configured for the AI provider. |
| `GEMINI_FALLBACK_MODEL` | If read by AI config | Fallback model name configured for the AI provider. |

Check `src/config/env.ts` and the AI configuration for the authoritative required variable list before deploying a new revision. Use the exact model identifiers supported by the configured Gemini account/API; never copy placeholder model names blindly.

### Example local `.env` shape (placeholders only)

```dotenv
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/postgres"
PORT=5000
NODE_ENV=development
CORS_ORIGIN=http://localhost:5173
JWT_ACCESS_SECRET=replace_with_a_long_random_secret
JWT_REFRESH_SECRET=replace_with_a_different_long_random_secret
GEMINI_API_KEY=replace_with_your_private_key
GEMINI_PRIMARY_MODEL=your_supported_primary_model
GEMINI_FALLBACK_MODEL=your_supported_fallback_model
```

Do not commit `.env`. Use URL-encoding for reserved characters in a database URI password. Supabase's Session Pooler URI username commonly includes the project reference (for example, `postgres.<project-ref>`); copy the connection URI from the Supabase dashboard rather than manually guessing it.

## Local development

### Prerequisites

- Node.js compatible with the project toolchain.
- npm.
- PostgreSQL reachable from the development machine.
- A valid `.env` file with required variables.

### Install, build, run

```powershell
# Run from the backend directory
npm install

# Generate Prisma Client and compile TypeScript
npm run build

# Start the development server
npm run dev

# Start the compiled server
npm start
```

Local endpoints typically use `http://localhost:5000`; confirm the actual `PORT` configuration. Swagger is served at `/docs` and health at `/health` when enabled by the current app build.

## Deploying with Render and Supabase

### Intended deployment settings

| Render setting | Value |
|---|---|
| Repository | `SnehashisKundu/Netflix-ai-space` |
| Branch | `main` |
| Root directory | `backend` if the repository contains the backend in that folder; otherwise use the directory containing `package.json` |
| Build command | `npm install && npm run build` |
| Start command | `npm start` |
| Health-check path | `/health` |
| Region | Singapore or the closest supported region to the database |

### Deployment sequence

1. Confirm the GitHub commit contains the intended `package.json`, Prisma config/schema, migrations, and source files.
2. Create a Render Web Service connected to the repository and correct root directory.
3. Configure the build command and start command above.
4. Add required environment variables in Render; do not upload `.env` to GitHub.
5. Copy the correct connection URI from Supabase **Connect → Session Pooler** (or the connection mode appropriate to the runtime) and set it as Render's `DATABASE_URL`.
6. Verify the URI username, host, port, database, and password. If the password contains reserved URL characters, encode them. Never share the URI in chat or commit it.
7. From a trusted local terminal, verify the connection with `npx prisma migrate status --config prisma7.config.ts` using the intended database URL.
8. Once authentication succeeds and the target database is confirmed, apply migrations with `npx prisma migrate deploy --config prisma7.config.ts`.
9. Deploy/redeploy the Render service and inspect logs for startup errors.
10. Test `/health`, `/docs`, registration/login, one protected route, and the affected Socket.IO flow.

### Important deployment status distinction

A green Render build does not prove that the application can connect to PostgreSQL. A process can build successfully and then crash on startup if required variables are missing. Similarly, a `DATABASE_URL` that merely contains `pooler.supabase.com` is not proof that its credentials are valid. Verify the connection and migration status before calling deployment complete.

## Testing and verification

The project uses Vitest. Tests exercised during development include smoke tests, authentication service tests, Watch Space service tests, and recommendation service tests. A previously recorded local test run passed 12 tests across 4 test files; rerun the suite against the current commit before relying on that result.

```powershell
npm test
```

If no `test` script is present in the current `package.json`, run Vitest directly:

```powershell
npx vitest run
```

Recommended verification checklist:

- [ ] `npm run build` succeeds from the backend directory.
- [ ] Prisma Client generation succeeds.
- [ ] `npx prisma migrate status --config prisma7.config.ts` connects to the intended database.
- [ ] Reviewed migrations are applied to the intended database.
- [ ] Render service starts without missing-environment-variable errors.
- [ ] `GET /health` returns the expected success response.
- [ ] Swagger loads at `/docs`.
- [ ] Register and login succeed with a dedicated test account.
- [ ] A protected route rejects missing/invalid authentication and accepts a valid token.
- [ ] Watch Space create/join/leave/end flows work.
- [ ] Playback/chat socket events are room-scoped and behave as expected.
- [ ] Timeline variation voting is scoped to the correct room/event.
- [ ] Q&A returns a response and source metadata when the provider succeeds.
- [ ] Recommendation and dashboard endpoints return the expected shape.

## Troubleshooting

### `P1000: Authentication failed`

Prisma reached the PostgreSQL server but the supplied credentials were not accepted. Check the current database password, copied URI, Session Pooler username format, project reference, host/port, and URL-encoding of reserved characters. Reset a password that has been exposed and update the URI wherever it is used. Do not run migrations until authentication succeeds.

### `P1001` or connection timeout

Check network reachability, hostname/port, pooler mode, database availability, and whether the environment allows outbound connections. Use the exact URI and connection mode shown by Supabase for the deployment environment.

### Missing `DATABASE_URL`

Set `DATABASE_URL` in the Render service's environment settings. A local `.env` file is not automatically available inside Render. Redeploy/restart after updating variables.

### `Cannot find module ... generated/prisma/client.js`

Ensure the generated Prisma client is created during the platform build. The project build script should run `prisma generate` before `tsc`, and the Prisma generator output path must match the imports in source. Do not rely on a locally generated ignored folder being present in the deployment archive.

### TypeScript implicit `any` errors on deployment

Build using the same committed source and build script locally. Check that Prisma Client generation ran before `tsc`; missing generated Prisma types can cause downstream query results and callback parameters to lose their types. Fix the underlying generated-client/config problem before adding broad `any` annotations.

### Supabase log: `3F000 schema "pg_grst_no_exposed_schemas" does not exist`

Treat this as a database-side log issue to investigate separately from the Prisma `P1000` authentication error. Capture the complete log details and timestamp, check whether the event originates from a Supabase-managed service, a database function, or an application query, and consult Supabase support/docs if necessary. Do **not** create that schema manually without identifying the source and intended purpose.

### Server starts locally but fails on Render

Check Render environment variables, the service root directory, Node version, start command, generated build output, and startup logs. `npm start` should run the compiled entry point produced by the current TypeScript build.

## Repository structure

The exact repository may contain additional files; this is a high-level guide to the main backend areas.

```text
backend/
├── prisma/
│   ├── migrations/
│   └── schema.prisma
├── src/
│   ├── config/
│   │   ├── env.ts
│   │   └── swagger.ts
│   ├── lib/
│   │   ├── prisma.ts
│   │   └── ai/
│   │       ├── ai.types.ts
│   │       ├── ai.service.ts
│   │       ├── ai.provider.ts
│   │       ├── gemini.provider.ts
│   │       ├── fallback.provider.ts
│   │       └── ai.error.ts
│   ├── middleware/
│   ├── modules/
│   │   ├── auth/
│   │   ├── title/
│   │   ├── timeline/
│   │   ├── variation/
│   │   ├── interaction/
│   │   ├── watch-space/
│   │   ├── chat/
│   │   ├── qa/
│   │   ├── recommendation/
│   │   └── dashboard/
│   ├── socket/
│   │   ├── socket.auth.ts
│   │   ├── socket.events.ts
│   │   └── socket.server.ts
│   ├── app.ts
│   └── server.ts
├── generated/                 # generated Prisma client; usually not committed
├── prisma7.config.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Development workflow

1. Make a focused code change.
2. Update validation, service/controller behavior, and tests as needed.
3. If the Prisma schema changes, create and review a migration; commit migration files.
4. Run `npm run build` and `npx vitest run`.
5. Test the affected REST endpoint or Socket.IO event locally.
6. Review `git diff` and `git status`; ensure `.env`, keys, and generated secrets are not staged.
7. Commit and push the change to GitHub.
8. Verify the Render deployment and inspect service logs.
9. Confirm `/health`, Swagger, database connectivity, and the changed feature in the target environment.

## Useful links

- [Live API](https://netflix-ai-space.onrender.com)
- [Health check](https://netflix-ai-space.onrender.com/health)
- [Swagger / OpenAPI UI](https://netflix-ai-space.onrender.com/docs)
- [GitHub repository](https://github.com/SnehashisKundu/Netflix-ai-space)
