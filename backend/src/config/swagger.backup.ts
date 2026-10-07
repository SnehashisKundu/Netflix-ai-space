import swaggerJSDoc from "swagger-jsdoc";

const swaggerDefinition = {
  openapi: "3.0.3",

  info: {
    title: "Netflix AI-Space API",
    version: "1.0.0",
    description:
      "Backend API documentation for the Netflix AI-Space platform.",
  },

  servers: [
    {
      url: "http://localhost:5000",
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
            example: "john@example.com",
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
            example: "john@example.com",
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
                      example: "AI-Space API is healthy",
                    },
                    timestamp: {
                      type: "string",
                      format: "date-time",
                    },
                  },
                },
              },
            },
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
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ErrorResponse",
                },
              },
            },
          },
          "409": {
            description: "Email already registered",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ErrorResponse",
                },
              },
            },
          },
          "500": {
            description: "Registration failed",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ErrorResponse",
                },
              },
            },
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
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ErrorResponse",
                },
              },
            },
          },
          "401": {
            description: "Invalid email or password",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ErrorResponse",
                },
              },
            },
          },
          "500": {
            description: "Login failed",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ErrorResponse",
                },
              },
            },
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
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ErrorResponse",
                },
              },
            },
          },
          "500": {
            description: "Token refresh failed",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ErrorResponse",
                },
              },
            },
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
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ErrorResponse",
                },
              },
            },
          },
          "400": {
            description: "Invalid refresh token",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ErrorResponse",
                },
              },
            },
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
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ErrorResponse",
                },
              },
            },
          },
          "404": {
            description: "User not found",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ErrorResponse",
                },
              },
            },
          },
          "500": {
            description: "Failed to fetch current user",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ErrorResponse",
                },
              },
            },
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