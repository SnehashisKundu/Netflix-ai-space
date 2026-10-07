import swaggerJSDoc from "swagger-jsdoc";
const swaggerDefinition = {
    openapi: "3.0.3",
    info: {
        title: "Netflix AI-Space API",
        version: "1.0.0",
        description: "Backend API documentation for the Netflix AI-Space platform.",
    },
    servers: [
        {
            url: "http\://localhost:5000",
            description: "Local development server",
        },
    ],
    tags: [
        { name: "Health", description: "API health checks" },
        { name: "Auth", description: "Authentication and authorization" },
        { name: "Titles", description: "Title management" },
        { name: "Watch Spaces", description: "Watch Space management" },
        { name: "Chat", description: "Watch Space chat" },
        { name: "Timeline", description: "Timeline management" },
        { name: "Variations", description: "Content variations" },
        { name: "Interactions", description: "User interactions" },
        { name: "Q&A", description: "AI-powered questions and answers" },
        {
            name: "Recommendations",
            description: "Personalized recommendations",
        },
        {
            name: "Dashboard",
            description: "User dashboard and analytics",
        },
    ],
    components: {
        securitySchemes: {
            bearerAuth: {
                type: "http",
                scheme: "bearer",
                bearerFormat: "JWT",
            },
        },
        schemas: {
            User: {
                type: "object",
                properties: {
                    id: {
                        type: "string",
                        format: "uuid",
                    },
                    name: {
                        type: "string",
                    },
                    email: {
                        type: "string",
                        format: "email",
                    },
                    role: {
                        type: "string",
                    },
                    createdAt: {
                        type: "string",
                        format: "date-time",
                    },
                    updatedAt: {
                        type: "string",
                        format: "date-time",
                    },
                },
            },
            RegisterRequest: {
                type: "object",
                required: ["name", "email", "password"],
                properties: {
                    name: {
                        type: "string",
                        minLength: 2,
                        maxLength: 100,
                        example: "John Doe",
                    },
                    email: {
                        type: "string",
                        format: "email",
                        example: "john\@example.com",
                    },
                    password: {
                        type: "string",
                        minLength: 8,
                        maxLength: 100,
                        example: "Password123!",
                    },
                },
            },
            LoginRequest: {
                type: "object",
                required: ["email", "password"],
                properties: {
                    email: {
                        type: "string",
                        format: "email",
                        example: "john\@example.com",
                    },
                    password: {
                        type: "string",
                        example: "Password123!",
                    },
                },
            },
            RefreshTokenRequest: {
                type: "object",
                required: ["refreshToken"],
                properties: {
                    refreshToken: {
                        type: "string",
                        example: "refresh-token-value",
                    },
                },
            },
            RegisterResponse: {
                type: "object",
                properties: {
                    success: {
                        type: "boolean",
                        example: true,
                    },
                    message: {
                        type: "string",
                        example: "User registered successfully",
                    },
                    data: {
                        $ref: "#/components/schemas/User",
                    },
                },
            },
            LoginResponse: {
                type: "object",
                properties: {
                    success: {
                        type: "boolean",
                        example: true,
                    },
                    message: {
                        type: "string",
                        example: "Login successful",
                    },
                    data: {
                        type: "object",
                        properties: {
                            user: {
                                $ref: "#/components/schemas/User",
                            },
                            accessToken: {
                                type: "string",
                            },
                            refreshToken: {
                                type: "string",
                            },
                        },
                    },
                },
            },
            RefreshResponse: {
                type: "object",
                properties: {
                    success: {
                        type: "boolean",
                        example: true,
                    },
                    message: {
                        type: "string",
                        example: "Access token refreshed",
                    },
                    data: {
                        type: "object",
                        properties: {
                            accessToken: {
                                type: "string",
                            },
                        },
                    },
                },
            },
            ErrorResponse: {
                type: "object",
                properties: {
                    success: {
                        type: "boolean",
                        example: false,
                    },
                    message: {
                        type: "string",
                    },
                },
            },
            Title: {
                type: "object",
                properties: {
                    id: {
                        type: "string",
                        format: "uuid",
                    },
                    name: {
                        type: "string",
                        example: "Stranger Things",
                    },
                    description: {
                        type: "string",
                        nullable: true,
                        example: "A supernatural mystery series.",
                    },
                    thumbnailUrl: {
                        type: "string",
                        format: "uri",
                        nullable: true,
                        example: "https\://example.com/thumbnail.jpg",
                    },
                    videoUrl: {
                        type: "string",
                        format: "uri",
                        nullable: true,
                        example: "https\://example.com/video.mp4",
                    },
                    genre: {
                        type: "string",
                        nullable: true,
                        example: "Sci-Fi",
                    },
                    duration: {
                        type: "integer",
                        nullable: true,
                        example: 3600,
                    },
                    isActive: {
                        type: "boolean",
                        example: true,
                    },
                    createdAt: {
                        type: "string",
                        format: "date-time",
                    },
                    updatedAt: {
                        type: "string",
                        format: "date-time",
                    },
                },
            },
            VariationOption: {
                type: "object",
                properties: {
                    id: {
                        type: "string",
                        format: "uuid",
                    },
                    timelineEventId: {
                        type: "string",
                        format: "uuid",
                    },
                    label: {
                        type: "string",
                        example: "English",
                    },
                    content: {
                        type: "string",
                        example: "Alternative dialogue or localized content.",
                    },
                    locale: {
                        type: "string",
                        nullable: true,
                        example: "en-US",
                    },
                    isDefault: {
                        type: "boolean",
                        example: false,
                    },
                    createdAt: {
                        type: "string",
                        format: "date-time",
                    },
                    updatedAt: {
                        type: "string",
                        format: "date-time",
                    },
                },
            },
            TimelineEvent: {
                type: "object",
                properties: {
                    id: {
                        type: "string",
                        format: "uuid",
                    },
                    titleId: {
                        type: "string",
                        format: "uuid",
                    },
                    type: {
                        type: "string",
                        example: "variationPoint",
                    },
                    startTime: {
                        type: "number",
                        example: 130,
                    },
                    endTime: {
                        type: "number",
                        nullable: true,
                        example: 200,
                    },
                    eventTitle: {
                        type: "string",
                        nullable: true,
                        example: "The Upside Down - Discovery",
                    },
                    description: {
                        type: "string",
                        nullable: true,
                    },
                    payload: {
                        nullable: true,
                        type: "object",
                    },
                    createdAt: {
                        type: "string",
                        format: "date-time",
                    },
                    updatedAt: {
                        type: "string",
                        format: "date-time",
                    },
                    variations: {
                        type: "array",
                        items: {
                            $ref: "#/components/schemas/VariationOption",
                        },
                    },
                },
            },
            TitleDetails: {
                allOf: [
                    {
                        $ref: "#/components/schemas/Title",
                    },
                    {
                        type: "object",
                        properties: {
                            timelineEvents: {
                                type: "array",
                                items: {
                                    $ref: "#/components/schemas/TimelineEvent",
                                },
                            },
                        },
                    },
                ],
            },
            CreateTitleRequest: {
                type: "object",
                required: ["name"],
                properties: {
                    name: {
                        type: "string",
                        minLength: 1,
                        maxLength: 200,
                        example: "Stranger Things",
                    },
                    description: {
                        type: "string",
                        maxLength: 5000,
                        example: "A supernatural mystery series.",
                    },
                    thumbnailUrl: {
                        type: "string",
                        format: "uri",
                        example: "https\://example.com/thumbnail.jpg",
                    },
                    videoUrl: {
                        type: "string",
                        format: "uri",
                        example: "https\://example.com/video.mp4",
                    },
                    genre: {
                        type: "string",
                        maxLength: 100,
                        example: "Sci-Fi",
                    },
                    duration: {
                        type: "integer",
                        minimum: 1,
                        example: 3600,
                    },
                },
            },
            UpdateTitleRequest: {
                type: "object",
                properties: {
                    name: {
                        type: "string",
                        minLength: 1,
                        maxLength: 200,
                    },
                    description: {
                        type: "string",
                        maxLength: 5000,
                    },
                    thumbnailUrl: {
                        type: "string",
                        format: "uri",
                    },
                    videoUrl: {
                        type: "string",
                        format: "uri",
                    },
                    genre: {
                        type: "string",
                        maxLength: 100,
                    },
                    duration: {
                        type: "integer",
                        minimum: 1,
                    },
                },
            },
            WatchSpace: {
                type: "object",
                properties: {
                    id: {
                        type: "string",
                        format: "uuid",
                    },
                    titleId: {
                        type: "string",
                        format: "uuid",
                    },
                    hostId: {
                        type: "string",
                        format: "uuid",
                    },
                    name: {
                        type: "string",
                        nullable: true,
                        example: "Stranger Things Night",
                    },
                    status: {
                        type: "string",
                        enum: ["ACTIVE", "ENDED"],
                        example: "ACTIVE",
                    },
                    createdAt: {
                        type: "string",
                        format: "date-time",
                    },
                    updatedAt: {
                        type: "string",
                        format: "date-time",
                    },
                    endedAt: {
                        type: "string",
                        format: "date-time",
                        nullable: true,
                    },
                    joinCode: {
                        type: "string",
                        example: "TMG5LA",
                    },
                    maxParticipants: {
                        type: "integer",
                        example: 5,
                    },
                    title: {
                        $ref: "#/components/schemas/Title",
                    },
                    host: {
                        type: "object",
                        properties: {
                            id: {
                                type: "string",
                                format: "uuid",
                            },
                            name: {
                                type: "string",
                            },
                            email: {
                                type: "string",
                                format: "email",
                            },
                        },
                    },
                    participants: {
                        type: "array",
                        items: {
                            $ref: "#/components/schemas/WatchSpaceParticipant",
                        },
                    },
                    playback: {
                        $ref: "#/components/schemas/PlaybackState",
                    },
                },
            },
            WatchSpaceParticipant: {
                type: "object",
                properties: {
                    id: {
                        type: "string",
                        format: "uuid",
                    },
                    watchSpaceId: {
                        type: "string",
                        format: "uuid",
                    },
                    userId: {
                        type: "string",
                        format: "uuid",
                    },
                    role: {
                        type: "string",
                        enum: ["HOST", "PARTICIPANT"],
                    },
                    joinedAt: {
                        type: "string",
                        format: "date-time",
                    },
                    leftAt: {
                        type: "string",
                        format: "date-time",
                        nullable: true,
                    },
                    user: {
                        type: "object",
                        properties: {
                            id: {
                                type: "string",
                                format: "uuid",
                            },
                            name: {
                                type: "string",
                            },
                        },
                    },
                },
            },
            PlaybackState: {
                type: "object",
                properties: {
                    id: {
                        type: "string",
                        format: "uuid",
                    },
                    watchSpaceId: {
                        type: "string",
                        format: "uuid",
                    },
                    position: {
                        type: "number",
                        example: 125.5,
                    },
                    isPlaying: {
                        type: "boolean",
                        example: true,
                    },
                    playbackRate: {
                        type: "number",
                        example: 1,
                    },
                    version: {
                        type: "integer",
                        example: 3,
                    },
                    updatedAt: {
                        type: "string",
                        format: "date-time",
                    },
                    syncedAt: {
                        type: "string",
                        format: "date-time",
                    },
                },
            },
            CreateWatchSpaceRequest: {
                type: "object",
                required: ["titleId"],
                properties: {
                    titleId: {
                        type: "string",
                        format: "uuid",
                    },
                    name: {
                        type: "string",
                        minLength: 1,
                        maxLength: 100,
                        example: "Stranger Things Night",
                    },
                },
            },
            JoinWatchSpaceRequest: {
                type: "object",
                required: ["joinCode"],
                properties: {
                    joinCode: {
                        type: "string",
                        minLength: 6,
                        maxLength: 6,
                        example: "TMG5LA",
                    },
                },
            },
            ChatMessage: {
                type: "object",
                properties: {
                    id: {
                        type: "string",
                        format: "uuid",
                    },
                    watchSpaceId: {
                        type: "string",
                        format: "uuid",
                    },
                    userId: {
                        type: "string",
                        format: "uuid",
                    },
                    message: {
                        type: "string",
                        example: "This scene is crazy!",
                    },
                    videoTime: {
                        type: "number",
                        nullable: true,
                        example: 142.5,
                    },
                    createdAt: {
                        type: "string",
                        format: "date-time",
                    },
                    user: {
                        type: "object",
                        properties: {
                            id: {
                                type: "string",
                                format: "uuid",
                            },
                            name: {
                                type: "string",
                            },
                        },
                    },
                },
            },
            SendChatMessageRequest: {
                type: "object",
                required: ["message"],
                properties: {
                    message: {
                        type: "string",
                        minLength: 1,
                        maxLength: 1000,
                        example: "This scene is crazy!",
                    },
                    videoTime: {
                        type: "number",
                        minimum: 0,
                        nullable: true,
                        example: 142.5,
                    },
                },
            },
            ChatMessagesResponse: {
                type: "object",
                properties: {
                    success: {
                        type: "boolean",
                        example: true,
                    },
                    data: {
                        type: "array",
                        items: {
                            $ref: "#/components/schemas/ChatMessage",
                        },
                    },
                },
            },
            VariationVoteResponse: {
                type: "object",
                properties: {
                    watchSpaceId: {
                        type: "string",
                        format: "uuid",
                    },
                    variation: {
                        $ref: "#/components/schemas/VariationOption",
                    },
                    totalVotes: {
                        type: "integer",
                        example: 3,
                    },
                    results: {
                        type: "array",
                        items: {
                            type: "object",
                            properties: {
                                variationId: {
                                    type: "string",
                                    format: "uuid",
                                },
                                votes: {
                                    type: "integer",
                                    example: 2,
                                },
                            },
                        },
                    },
                },
            },
        },
    },
    paths: {
        "/health": {
            get: {
                tags: ["Health"],
                summary: "Check API health",
                responses: {
                    "200": {
                        description: "API is healthy",
                    },
                },
            },
        },
        "/auth/register": {
            post: {
                tags: ["Auth"],
                summary: "Register a new user",
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/RegisterRequest",
                            },
                        },
                    },
                },
                responses: {
                    "201": {
                        description: "User registered successfully",
                        content: {
                            "application/json": {
                                schema: {
                                    $ref: "#/components/schemas/RegisterResponse",
                                },
                            },
                        },
                    },
                    "400": {
                        description: "Invalid request data",
                    },
                    "409": {
                        description: "Email already registered",
                    },
                    "500": {
                        description: "Registration failed",
                    },
                },
            },
        },
        "/auth/login": {
            post: {
                tags: ["Auth"],
                summary: "Login user",
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/LoginRequest",
                            },
                        },
                    },
                },
                responses: {
                    "200": {
                        description: "Login successful",
                        content: {
                            "application/json": {
                                schema: {
                                    $ref: "#/components/schemas/LoginResponse",
                                },
                            },
                        },
                    },
                    "400": {
                        description: "Invalid request data",
                    },
                    "401": {
                        description: "Invalid email or password",
                    },
                    "500": {
                        description: "Login failed",
                    },
                },
            },
        },
        "/auth/refresh": {
            post: {
                tags: ["Auth"],
                summary: "Refresh access token",
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/RefreshTokenRequest",
                            },
                        },
                    },
                },
                responses: {
                    "200": {
                        description: "Access token refreshed",
                        content: {
                            "application/json": {
                                schema: {
                                    $ref: "#/components/schemas/RefreshResponse",
                                },
                            },
                        },
                    },
                    "401": {
                        description: "Invalid refresh token",
                    },
                    "500": {
                        description: "Token refresh failed",
                    },
                },
            },
        },
        "/auth/logout": {
            post: {
                tags: ["Auth"],
                summary: "Logout user",
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/RefreshTokenRequest",
                            },
                        },
                    },
                },
                responses: {
                    "200": {
                        description: "Logged out successfully",
                    },
                    "400": {
                        description: "Invalid refresh token",
                    },
                },
            },
        },
        "/auth/me": {
            get: {
                tags: ["Auth"],
                summary: "Get current authenticated user",
                security: [
                    {
                        bearerAuth: [],
                    },
                ],
                responses: {
                    "200": {
                        description: "Current user returned successfully",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        success: {
                                            type: "boolean",
                                            example: true,
                                        },
                                        data: {
                                            $ref: "#/components/schemas/User",
                                        },
                                    },
                                },
                            },
                        },
                    },
                    "401": {
                        description: "Authentication required",
                    },
                    "404": {
                        description: "User not found",
                    },
                    "500": {
                        description: "Failed to fetch current user",
                    },
                },
            },
        },
        "/titles": {
            post: {
                tags: ["Titles"],
                summary: "Create a title",
                security: [
                    {
                        bearerAuth: [],
                    },
                ],
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/CreateTitleRequest",
                            },
                        },
                    },
                },
                responses: {
                    "201": {
                        description: "Title created successfully",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        success: {
                                            type: "boolean",
                                            example: true,
                                        },
                                        message: {
                                            type: "string",
                                            example: "Title created successfully",
                                        },
                                        data: {
                                            $ref: "#/components/schemas/Title",
                                        },
                                    },
                                },
                            },
                        },
                    },
                    "400": {
                        description: "Invalid request data",
                    },
                    "401": {
                        description: "Authentication required",
                    },
                    "500": {
                        description: "Failed to create title",
                    },
                },
            },
            get: {
                tags: ["Titles"],
                summary: "List active titles",
                security: [
                    {
                        bearerAuth: [],
                    },
                ],
                responses: {
                    "200": {
                        description: "Titles fetched successfully",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        success: {
                                            type: "boolean",
                                            example: true,
                                        },
                                        data: {
                                            type: "array",
                                            items: {
                                                $ref: "#/components/schemas/Title",
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                    "401": {
                        description: "Authentication required",
                    },
                    "500": {
                        description: "Failed to fetch titles",
                    },
                },
            },
        },
        "/titles/{id}": {
            get: {
                tags: ["Titles"],
                summary: "Get title by ID",
                security: [
                    {
                        bearerAuth: [],
                    },
                ],
                parameters: [
                    {
                        name: "id",
                        in: "path",
                        required: true,
                        description: "Title UUID",
                        schema: {
                            type: "string",
                            format: "uuid",
                        },
                    },
                ],
                responses: {
                    "200": {
                        description: "Title fetched successfully",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        success: {
                                            type: "boolean",
                                            example: true,
                                        },
                                        data: {
                                            $ref: "#/components/schemas/TitleDetails",
                                        },
                                    },
                                },
                            },
                        },
                    },
                    "400": {
                        description: "Invalid title ID",
                    },
                    "401": {
                        description: "Authentication required",
                    },
                    "404": {
                        description: "Title not found",
                    },
                    "500": {
                        description: "Failed to fetch title",
                    },
                },
            },
            patch: {
                tags: ["Titles"],
                summary: "Update a title",
                security: [
                    {
                        bearerAuth: [],
                    },
                ],
                parameters: [
                    {
                        name: "id",
                        in: "path",
                        required: true,
                        description: "Title UUID",
                        schema: {
                            type: "string",
                            format: "uuid",
                        },
                    },
                ],
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/UpdateTitleRequest",
                            },
                        },
                    },
                },
                responses: {
                    "200": {
                        description: "Title updated successfully",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        success: {
                                            type: "boolean",
                                            example: true,
                                        },
                                        message: {
                                            type: "string",
                                            example: "Title updated successfully",
                                        },
                                        data: {
                                            $ref: "#/components/schemas/Title",
                                        },
                                    },
                                },
                            },
                        },
                    },
                    "400": {
                        description: "Invalid request data",
                    },
                    "401": {
                        description: "Authentication required",
                    },
                    "500": {
                        description: "Failed to update title",
                    },
                },
            },
            delete: {
                tags: ["Titles"],
                summary: "Deactivate a title",
                security: [
                    {
                        bearerAuth: [],
                    },
                ],
                parameters: [
                    {
                        name: "id",
                        in: "path",
                        required: true,
                        description: "Title UUID",
                        schema: {
                            type: "string",
                            format: "uuid",
                        },
                    },
                ],
                responses: {
                    "200": {
                        description: "Title deactivated successfully",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        success: {
                                            type: "boolean",
                                            example: true,
                                        },
                                        message: {
                                            type: "string",
                                            example: "Title deactivated successfully",
                                        },
                                    },
                                },
                            },
                        },
                    },
                    "400": {
                        description: "Invalid title ID",
                    },
                    "401": {
                        description: "Authentication required",
                    },
                    "500": {
                        description: "Failed to deactivate title",
                    },
                },
            },
        },
        "/chat/{watchSpaceId}/messages": {
            post: {
                tags: ["Chat"],
                summary: "Send a chat message",
                security: [
                    {
                        bearerAuth: [],
                    },
                ],
                parameters: [
                    {
                        name: "watchSpaceId",
                        in: "path",
                        required: true,
                        description: "Watch space UUID",
                        schema: {
                            type: "string",
                            format: "uuid",
                        },
                    },
                ],
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/SendChatMessageRequest",
                            },
                        },
                    },
                },
                responses: {
                    "201": {
                        description: "Chat message sent successfully",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        success: {
                                            type: "boolean",
                                            example: true,
                                        },
                                        message: {
                                            type: "string",
                                            example: "Chat message sent successfully",
                                        },
                                        data: {
                                            $ref: "#/components/schemas/ChatMessage",
                                        },
                                    },
                                },
                            },
                        },
                    },
                    "400": {
                        description: "Invalid chat message",
                    },
                    "401": {
                        description: "Authentication required",
                    },
                    "403": {
                        description: "You are not a participant of this watch space",
                    },
                    "404": {
                        description: "Watch space not found",
                    },
                    "409": {
                        description: "Watch space has ended",
                    },
                    "500": {
                        description: "Failed to send chat message",
                    },
                },
            },
            get: {
                tags: ["Chat"],
                summary: "Get chat messages",
                security: [
                    {
                        bearerAuth: [],
                    },
                ],
                parameters: [
                    {
                        name: "watchSpaceId",
                        in: "path",
                        required: true,
                        description: "Watch space UUID",
                        schema: {
                            type: "string",
                            format: "uuid",
                        },
                    },
                ],
                responses: {
                    "200": {
                        description: "Chat messages fetched successfully",
                        content: {
                            "application/json": {
                                schema: {
                                    $ref: "#/components/schemas/ChatMessagesResponse",
                                },
                            },
                        },
                    },
                    "400": {
                        description: "Invalid watch space ID",
                    },
                    "401": {
                        description: "Authentication required",
                    },
                    "403": {
                        description: "You are not a participant of this watch space",
                    },
                    "404": {
                        description: "Watch space not found",
                    },
                    "409": {
                        description: "Watch space has ended",
                    },
                    "500": {
                        description: "Failed to fetch chat messages",
                    },
                },
            },
        },
        "/watch-spaces": {
            post: {
                tags: ["Watch Spaces"],
                summary: "Create a watch space",
                security: [
                    {
                        bearerAuth: [],
                    },
                ],
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/CreateWatchSpaceRequest",
                            },
                        },
                    },
                },
                responses: {
                    "201": {
                        description: "Watch space created successfully",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        success: {
                                            type: "boolean",
                                            example: true,
                                        },
                                        message: {
                                            type: "string",
                                            example: "Watch space created successfully",
                                        },
                                        data: {
                                            $ref: "#/components/schemas/WatchSpace",
                                        },
                                    },
                                },
                            },
                        },
                    },
                    "400": {
                        description: "Invalid request data",
                    },
                    "401": {
                        description: "Authentication required",
                    },
                    "404": {
                        description: "Title not found or inactive",
                    },
                    "500": {
                        description: "Failed to create watch space",
                    },
                },
            },
        },
        "/watch-spaces/join": {
            post: {
                tags: ["Watch Spaces"],
                summary: "Join a watch space",
                security: [
                    {
                        bearerAuth: [],
                    },
                ],
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/JoinWatchSpaceRequest",
                            },
                        },
                    },
                },
                responses: {
                    "200": {
                        description: "Joined watch space successfully",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        success: {
                                            type: "boolean",
                                            example: true,
                                        },
                                        message: {
                                            type: "string",
                                            example: "Joined watch space successfully",
                                        },
                                        data: {
                                            $ref: "#/components/schemas/WatchSpace",
                                        },
                                    },
                                },
                            },
                        },
                    },
                    "400": {
                        description: "Invalid join code",
                    },
                    "401": {
                        description: "Authentication required",
                    },
                    "404": {
                        description: "Watch space not found",
                    },
                    "409": {
                        description: "Watch space has ended or is full",
                    },
                    "500": {
                        description: "Failed to join watch space",
                    },
                },
            },
        },
        "/watch-spaces/{id}": {
            get: {
                tags: ["Watch Spaces"],
                summary: "Get watch space by ID",
                security: [
                    {
                        bearerAuth: [],
                    },
                ],
                parameters: [
                    {
                        name: "id",
                        in: "path",
                        required: true,
                        description: "Watch space UUID",
                        schema: {
                            type: "string",
                            format: "uuid",
                        },
                    },
                ],
                responses: {
                    "200": {
                        description: "Watch space fetched successfully",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        success: {
                                            type: "boolean",
                                            example: true,
                                        },
                                        data: {
                                            $ref: "#/components/schemas/WatchSpace",
                                        },
                                    },
                                },
                            },
                        },
                    },
                    "400": {
                        description: "Invalid watch space ID",
                    },
                    "401": {
                        description: "Authentication required",
                    },
                    "404": {
                        description: "Watch space not found",
                    },
                    "500": {
                        description: "Failed to fetch watch space",
                    },
                },
            },
        },
        "/watch-spaces/{id}/leave": {
            post: {
                tags: ["Watch Spaces"],
                summary: "Leave a watch space",
                security: [
                    {
                        bearerAuth: [],
                    },
                ],
                parameters: [
                    {
                        name: "id",
                        in: "path",
                        required: true,
                        description: "Watch space UUID",
                        schema: {
                            type: "string",
                            format: "uuid",
                        },
                    },
                ],
                responses: {
                    "200": {
                        description: "Left watch space successfully",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        success: {
                                            type: "boolean",
                                            example: true,
                                        },
                                        message: {
                                            type: "string",
                                            example: "Left watch space successfully",
                                        },
                                        data: {
                                            $ref: "#/components/schemas/WatchSpaceParticipant",
                                        },
                                    },
                                },
                            },
                        },
                    },
                    "400": {
                        description: "Invalid watch space ID",
                    },
                    "401": {
                        description: "Authentication required",
                    },
                    "404": {
                        description: "You are not an active participant in this watch space",
                    },
                    "500": {
                        description: "Failed to leave watch space",
                    },
                },
            },
        },
        "/watch-spaces/{id}/end": {
            patch: {
                tags: ["Watch Spaces"],
                summary: "End a watch space",
                security: [
                    {
                        bearerAuth: [],
                    },
                ],
                parameters: [
                    {
                        name: "id",
                        in: "path",
                        required: true,
                        description: "Watch space UUID",
                        schema: {
                            type: "string",
                            format: "uuid",
                        },
                    },
                ],
                responses: {
                    "200": {
                        description: "Watch space ended successfully",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        success: {
                                            type: "boolean",
                                            example: true,
                                        },
                                        message: {
                                            type: "string",
                                            example: "Watch space ended successfully",
                                        },
                                        data: {
                                            $ref: "#/components/schemas/WatchSpace",
                                        },
                                    },
                                },
                            },
                        },
                    },
                    "400": {
                        description: "Invalid watch space ID",
                    },
                    "401": {
                        description: "Authentication required",
                    },
                    "403": {
                        description: "Only the host can end this watch space",
                    },
                    "404": {
                        description: "Watch space not found",
                    },
                    "409": {
                        description: "Watch space is already ended",
                    },
                    "500": {
                        description: "Failed to end watch space",
                    },
                },
            },
        },
        "/watch-spaces/{id}/variations/{variationId}/vote": {
            post: {
                tags: ["Watch Spaces"],
                summary: "Cast a variation vote",
                security: [
                    {
                        bearerAuth: [],
                    },
                ],
                parameters: [
                    {
                        name: "id",
                        in: "path",
                        required: true,
                        description: "Watch space UUID",
                        schema: {
                            type: "string",
                            format: "uuid",
                        },
                    },
                    {
                        name: "variationId",
                        in: "path",
                        required: true,
                        description: "Variation option UUID",
                        schema: {
                            type: "string",
                            format: "uuid",
                        },
                    },
                ],
                responses: {
                    "200": {
                        description: "Variation vote cast successfully",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        success: {
                                            type: "boolean",
                                            example: true,
                                        },
                                        message: {
                                            type: "string",
                                            example: "Variation vote cast successfully",
                                        },
                                        data: {
                                            $ref: "#/components/schemas/VariationVoteResponse",
                                        },
                                    },
                                },
                            },
                        },
                    },
                    "400": {
                        description: "Invalid variation vote request or variation does not belong to this title",
                    },
                    "401": {
                        description: "Authentication required",
                    },
                    "403": {
                        description: "You are not an active participant in this watch space",
                    },
                    "404": {
                        description: "Watch space or variation not found",
                    },
                    "409": {
                        description: "Watch space has ended",
                    },
                    "500": {
                        description: "Failed to cast variation vote",
                    },
                },
            },
        },
    },
};
export const swaggerSpec = swaggerJSDoc({
    definition: swaggerDefinition,
    apis: ["./src/**/*.ts"],
});
//# sourceMappingURL=swagger.before-timeline.js.map