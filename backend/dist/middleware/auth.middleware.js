import { verifyAccessToken } from "../lib/jwt.js";
export const authenticate = (req, res, next) => {
    const authorization = req.headers.authorization;
    if (!authorization?.startsWith("Bearer ")) {
        return res.status(401).json({
            success: false,
            message: "Authentication required",
        });
    }
    const token = authorization.substring(7);
    try {
        const payload = verifyAccessToken(token);
        req.user = payload;
        next();
    }
    catch {
        return res.status(401).json({
            success: false,
            message: "Invalid or expired access token",
        });
    }
};
//# sourceMappingURL=auth.middleware.js.map