import dotenv from "dotenv";
dotenv.config();

export const SALT_ROUND = +process.env.SALT_ROUND || 14;

export const USER_ROLE = Object.freeze({
    Admin: Symbol('admin'),
    User: Symbol('user'),
    Moderator: Symbol('moderator')
})

export const JWT_SECRET = process.env.JWT_SECRET || "somestupidsecert"

export const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017"