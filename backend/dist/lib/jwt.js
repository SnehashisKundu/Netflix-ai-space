import jwt from "jsonwebtoken";
const accessSecret = process.env.JWT_ACCESS_SECRET;
if (!accessSecret) {
    throw new Error("JWT_ACCESS_SECRET is not configured");
}
export const generateAccessToken = (payload) => {
    return jwt.sign(payload, accessSecret, {
        expiresIn: "15m",
    });
};
export const verifyAccessToken = (token) => {
    return jwt.verify(token, accessSecret);
};
//# sourceMappingURL=jwt.js.map