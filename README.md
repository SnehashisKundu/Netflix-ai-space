# Netflix AI-Space — Backend

A real-time, AI-enabled watch-together backend for creating shared watch spaces, synchronizing playback, chatting with participants, and exploring alternate timeline variations.

> **Production status:** The backend is deployed on Render. The health endpoint and the registration/login flows have been tested successfully against the live deployment.

## Links

- **Live API:** https://netflix-ai-space.onrender.com
- **Health check:** https://netflix-ai-space.onrender.com/health
- **Swagger / OpenAPI documentation:** https://netflix-ai-space.onrender.com/docs
- **GitHub repository:** https://github.com/SnehashisKundu/Netflix-ai-space

Use Swagger as the source of truth for every currently registered HTTP route, request schema, response schema, and authentication requirement. The endpoint list below includes the routes confirmed during deployment and the principal Watch Space routes; see Swagger for the complete, up-to-date catalog.

## What it does

- User registration and login with JWT-based authentication.
- PostgreSQL persistence through Prisma.
- Watch Spaces that participants can create, join, leave, inspect, and end.
- Real-time collaboration through Socket.IO.
- Playback synchronization and room-scoped broadcasts.
- Timeline events and variation options, including votes scoped to a Watch Space and timeline event.
- AI question logging for questions associated with a user, title, and optional Watch Space.
- Swagger UI for interactive API exploration.

## Tech stack

- **Runtime:** Node.js
- **HTTP API:** Express
- **Language:** TypeScript
- **Database:** Supabase PostgreSQL
- **ORM:** Prisma 7 with the PostgreSQL driver adapter
- **Authentication:** JWT access/refresh-token flow
- **Real time:** Socket.IO
- **AI integration:** Gemini API
- **API documentation:** OpenAPI 3.0.3 / Swagger UI
- **Deployment:** Render
- **Repository:** GitHub

## High-level architecture

```text
Client / Swagger UI
        |
        | HTTPS REST requests + access token
        v
Render Web Service (Express + TypeScript)
        |
        +--> Environment validation
        |
        +--> Authentication / authorization middleware
        |
        +--> Feature routers and controllers
        |       |
        |       v
        |    Services / business rules
        |       |
        |       v
        |    Prisma Client + PostgreSQL adapter
        |       |
        |       v
        |    Supabase PostgreSQL (Mumbai region)
        |
        +--> Socket.IO server
        |       |
        |       +--> Authenticated socket connection
        |       +--> Watch Space room: watch-space:<watchSpaceId>
        |       +--> Room-scoped event broadcasts
        |
        +--> Gemini API for AI-backed functionality
```

## Main data flow

### 1. Registration and login

1. A client submits registration details to `POST /auth/register`.
2. The API validates the request and creates the user record in PostgreSQL through Prisma.
3. The client submits credentials to `POST /auth/login`.
4. On successful authentication, the API returns user information and tokens.
5. Protected REST routes and authenticated Socket.IO connections use the configured authentication mechanism.
6. Keep access tokens, refresh tokens, passwords, and API keys private. Never commit them to Git or include them in issue reports/screenshots.

### 2. Watch Space lifecycle

1. An authenticated user creates a Watch Space.
2. The backend persists its configuration and returns the space details/join code.
3. Other authenticated users join using the supported join flow.
4. The backend validates the join request and tracks membership.
5. Clients can read the space, leave it, or end it through the corresponding routes.
6. Real-time events are scoped to a Socket.IO room named `watch-space:<watchSpaceId>` so participants in that space receive relevant updates.

### 3. Real-time playback and chat

1. A participant emits a supported Socket.IO event for the Watch Space.
2. The socket layer authenticates the connection and associates the participant with the relevant room.
3. The server validates the event and applies the relevant business logic.
4. For persisted events, the backend saves the change before broadcasting it to the room.
5. Connected participants receive the room-scoped event and update their client state.

The exact Socket.IO event names and payloads are defined in the backend's socket event definitions. Check those definitions before implementing a client; do not assume REST endpoint names are also socket event names.

### 4. Timeline variations and voting

1. A title can have timeline events and variation options.
2. A participant votes on a variation for a particular Watch Space and timeline event.
3. The backend associates the vote with the user, Watch Space, and timeline event.
4. The database enforces uniqueness for a user's vote per `(watchSpaceId, timelineEventId, userId)` combination.
5. Results should be interpreted in the scope of the relevant Watch Space/event, rather than as a global vote across all spaces.

### 5. AI question logging

1. A client submits an AI-related question through the appropriate documented API flow.
2. The backend associates the question with the relevant user and title, and optionally a Watch Space.
3. The question context is logged in the `AiQuestionLog` data model.
4. AI request/response behavior and payload requirements should be taken from the corresponding Swagger operation and service implementation.

## HTTP endpoint reference

**Base URL:** `https://netflix-ai-space.onrender.com`

All paths below are relative to the base URL. Unless Swagger explicitly marks a route public, assume protected routes require authentication.

### Health and documentation

| Method | Path | Purpose | Authentication |
|---|---|---|---|
| `GET` | `/health` | Returns API health status | Public |
| `GET` | `/docs` | Swagger UI / interactive API documentation | Public |

### Authentication

| Method | Path | Purpose | Authentication |
|---|---|---|---|
| `POST` | `/auth/register` | Register a user | Public |
| `POST` | `/auth/login` | Log in and obtain tokens | Public |

The login route is rate-limited. The refresh-token route, if exposed by the current build, is documented in Swagger; use the exact path and request body shown there.

### Watch Spaces

| Method | Path | Purpose | Authentication |
|---|---|---|---|
| `POST` | `/watch-spaces/` | Create a Watch Space | Required |
| `POST` | `/watch-spaces/join` | Join a Watch Space using the supported join details/code | Required |
| `GET` | `/watch-spaces/:id` | Get a Watch Space by ID | Required |
| `POST` | `/watch-spaces/:id/leave` | Leave a Watch Space | Required |
| `PATCH` | `/watch-spaces/:id/end` | End a Watch Space | Required |
| `POST` | `/watch-spaces/:id/variations/:variationId/vote` | Vote on a variation in the space | Required |

> The paths above are the Watch Space routes confirmed during development. Check Swagger for any additional routes, exact trailing-slash behavior, request schemas, response schemas, and role/ownership requirements.

### Other API modules

The API documentation also describes the feature schemas and operations for the rest of the backend. Use Swagger to enumerate the exact live routes for these areas rather than relying on guessed paths:

- Titles and title metadata
- Timeline events and variation options
- Playback synchronization
- Chat and real-time interactions
- AI questions / question logs
- Any additional authentication, token, or account operations

**Complete endpoint catalog:** https://netflix-ai-space.onrender.com/docs

Swagger is generated from the backend's OpenAPI definition and is the authoritative endpoint reference for this deployment.

## Authentication in Swagger

1. Open https://netflix-ai-space.onrender.com/docs.
2. Expand a public authentication route and use your own test credentials.
3. For protected operations, use **Authorize** if the OpenAPI security scheme is available.
4. Enter the access token in the format requested by the Swagger dialog (typically `Bearer <access-token>`).
5. Never share or commit access tokens or refresh tokens.

Use a dedicated test account for production smoke tests. Avoid destructive operations or unnecessary test data in a production database.

## Environment variables

Configure secrets in Render's Environment settings. Do not commit `.env` or paste secret values into documentation.

| Variable | Required | Purpose |
|---|---:|---|
| `DATABASE_URL` | Yes | PostgreSQL connection URI for Supabase |
| `JWT_ACCESS_SECRET` | Yes | Secret used by the authentication/token implementation |
| `GEMINI_API_KEY` | Yes | Gemini API key for AI features |
| `PORT` | Supplied by Render / defaults locally | HTTP server port |
| `NODE_ENV` | Optional | Environment mode; use `production` on deployment |
| `CORS_ORIGIN` | Optional in current code | Allowed frontend origin; set this to the deployed frontend origin when one exists |
| `REDIS_URL` | Optional in current config | Defaults to `redis://localhost:6381`; configure a real hosted Redis URL only if the deployed code actually uses Redis |

The current environment validator explicitly requires `DATABASE_URL`, `JWT_ACCESS_SECRET`, and `GEMINI_API_KEY`. Confirm any additional variables against `src/config/env.ts` before deployment.

## Local development

Requirements: a compatible Node.js version, npm, and a PostgreSQL database.

```powershell
# From the backend directory
npm install
```

Create a local `.env` file with the required variables. Keep it untracked and private.

Generate Prisma Client and build:

```powershell
npm run build
```

Run the development server:

```powershell
npm run dev
```

Start the compiled production server locally:

```powershell
npm start
```

### Prisma migrations

This project uses `prisma7.config.ts`:

```powershell
# Check migration status
npx prisma migrate status --config prisma7.config.ts

# Apply committed migrations (deployment-style)
npx prisma migrate deploy --config prisma7.config.ts
```

The seven migrations applied to the production database during deployment are:

1. `20260927224102_init`
2. `20260928221520_add_refresh_tokens`
3. `20260929211312_add_watch_space_join_code`
4. `20260930154603_add_playback_sync_timestamp`
5. `20261003225254_add_variation_votes`
6. `20261004095000_scope_variation_votes_by_event`
7. `20261006215508_add_ai_question_logs`

For production, apply reviewed, committed migrations with `migrate deploy`; do not use `prisma migrate dev` against the production database.

## Deployment on Render

The backend is deployed as a Node web service.

| Render setting | Value |
|---|---|
| Repository | `SnehashisKundu/Netflix-ai-space` |
| Branch | `main` |
| Root directory | `backend` |
| Build command | `npm install && npm run build` |
| Start command | `npm start` |
| Health-check path | `/health` |
| Region | Singapore |

Set the required environment variables in the Render dashboard. Render provides the runtime `PORT`; the server listens on `env.PORT`.

## Production verification

The following checks succeeded during deployment:

- `GET /health` returned `success: true` and `AI-Space API is healthy`.
- Prisma reported `Database schema is up to date!`.
- All seven committed Prisma migrations were applied successfully.
- `POST /auth/register` returned HTTP `201` with `User registered successfully`.
- `POST /auth/login` returned HTTP `200` with `Login successful` and token fields.

These are smoke-test results, not a substitute for testing every route and Socket.IO event.

## Security and operations notes

- Never commit `.env`, database URLs, passwords, JWT secrets, Gemini keys, or tokens.
- Rotate credentials that have been exposed and invalidate affected sessions where supported.
- Configure `CORS_ORIGIN` to match the actual frontend origin before connecting a browser-based frontend. The current default is `http://localhost:5173`.
- Keep the `/health` endpoint lightweight and avoid exposing secrets or sensitive infrastructure details in its response.
- Test write operations with dedicated test accounts and clean up test records only through safe, supported application flows.
- Monitor Render logs after deploys and check Supabase logs when database errors occur.

## Project structure

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
│   │   └── prisma.ts
│   ├── modules/
│   │   ├── auth/
│   │   └── watch-space/
│   ├── socket/
│   │   ├── socket.auth.ts
│   │   ├── socket.events.ts
│   │   └── socket.server.ts
│   ├── app.ts
│   └── server.ts
├── prisma7.config.ts
├── package.json
└── README.md
```

This is a high-level map of the important files discussed during deployment; additional feature modules and files may exist.

## Contributing / change workflow

1. Make changes on a development branch where practical.
2. Run `npm run build`.
3. Test the affected route/event locally.
4. Add and review a Prisma migration if the database schema changes.
5. Commit source code and migration files—never secrets.
6. Push to GitHub and verify the Render deployment.
7. Check `/health`, Swagger, and the affected production flow.

---

**Live links:** [API](https://netflix-ai-space.onrender.com) · [Health](https://netflix-ai-space.onrender.com/health) · [Swagger](https://netflix-ai-space.onrender.com/docs) · [GitHub](https://github.com/SnehashisKundu/Netflix-ai-space)
