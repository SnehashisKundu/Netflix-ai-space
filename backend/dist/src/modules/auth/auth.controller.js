import { loginSchema, refreshTokenSchema, registerSchema, } from "./auth.validation.js";
import { getCurrentUser, loginUser, refreshAccessToken, registerUser, revokeRefreshToken, } from "./auth.service.js";
export const register = async (req, res) => {
    try {
        const input = registerSchema.parse(req.body);
        const user = await registerUser(input);
        return res.status(201).json({
            success: true,
            message: "User registered successfully",
            data: user,
        });
    }
    catch (error) {
        if (error instanceof Error && error.message === "EMAIL_ALREADY_EXISTS") {
            return res.status(409).json({
                success: false,
                message: "Email already registered",
            });
        }
        if (error instanceof Error && error.name === "ZodError") {
            return res.status(400).json({
                success: false,
                message: "Invalid request data",
                errors: error,
            });
        }
        return res.status(500).json({
            success: false,
            message: "Failed to register user",
        });
    }
};
export const login = async (req, res) => {
    try {
        const input = loginSchema.parse(req.body);
        const result = await loginUser(input);
        return res.status(200).json({
            success: true,
            message: "Login successful",
            data: result,
        });
    }
    catch (error) {
        if (error instanceof Error && error.message === "INVALID_CREDENTIALS") {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password",
            });
        }
        if (error instanceof Error && error.name === "ZodError") {
            return res.status(400).json({
                success: false,
                message: "Invalid request data",
                errors: error,
            });
        }
        console.error("Login failed:", error);
        return res.status(500).json({
            success: false,
            message: "Failed to login",
        });
    }
};
export const refresh = async (req, res) => {
    try {
        const { refreshToken } = refreshTokenSchema.parse(req.body);
        const accessToken = await refreshAccessToken(refreshToken);
        return res.status(200).json({
            success: true,
            message: "Access token refreshed",
            data: {
                accessToken,
            },
        });
    }
    catch (error) {
        if (error instanceof Error &&
            (error.message === "INVALID_REFRESH_TOKEN" ||
                error.name === "ZodError")) {
            return res.status(401).json({
                success: false,
                message: "Invalid refresh token",
            });
        }
        return res.status(500).json({
            success: false,
            message: "Failed to refresh token",
        });
    }
};
export const logout = async (req, res) => {
    try {
        const { refreshToken } = refreshTokenSchema.parse(req.body);
        await revokeRefreshToken(refreshToken);
        return res.status(200).json({
            success: true,
            message: "Logged out successfully",
        });
    }
    catch {
        return res.status(400).json({
            success: false,
            message: "Invalid refresh token",
        });
    }
};
export const me = async (req, res) => {
    try {
        if (!req.user) {
            return res.status(401).json({
                success: false,
                message: "Authentication required",
            });
        }
        const user = await getCurrentUser(req.user.userId);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }
        return res.status(200).json({
            success: true,
            data: user,
        });
    }
    catch {
        return res.status(500).json({
            success: false,
            message: "Failed to fetch current user",
        });
    }
};
//# sourceMappingURL=auth.controller.js.map