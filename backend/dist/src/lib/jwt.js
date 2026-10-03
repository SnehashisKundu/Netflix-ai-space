import jwt from "jsonwebtoken";
import { env } from "../config/env.js";
const accessSecret = env.JWT_ACCESS_SECRET;
export const generateAccessToken = (payload) => {
    return jwt.sign(payload, accessSecret, {
        expiresIn: "15m",
    });
};
export const verifyAccessToken = (token) => {
    return jwt.verify(token, accessSecret);
};
//# sourceMappingURL=jwt.js.map