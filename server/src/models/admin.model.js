import { Schema, model } from "mongoose";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../constant.js";

const adminSchema = new Schema(
  {
    // Fields For Registration

    firstName: {
      type: String,
      trim: true,
      required: [true, "First name is required"],
      minlength: [3, "First name must be at least 3 characters long"],
      maxlength: [50, "First name cannot exceed 50 characters"],
    },

    lastName: {
      type: String,
      trim: true,
      required: [true, "Last name is required"],
      minlength: [3, "Last name must be at least 3 characters long"],
      maxlength: [50, "Last name cannot exceed 50 characters"],
    },

    // Admin id is the same as the database _id

    email: {
      type: String,
      trim: true,
      required: [true, "Email address is required"],
      unique: true,
      match: [
        /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        "Please enter a valid email address",
      ],
    },

    password: {
      type: String,
      trim: true,
    },

    // Fields For Profile

    Avatar: {
      type: String,
      trim: true,
    },

    PhoneNumber: {
      type: Number,
      validate: {
        validator: function (value) {
          return /^\d{10}$/.test(value);
        },
        message: "Please enter a valid 10-digit phone number",
      },
    },

    // Internal Fields

    role: {
      type: String,
      trim: true,
      default: "admin",
      enum: ["admin", "user", "moderator"],
      required: [true, "User role is required"],
    },

    users: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],

    isActive: {
      type: Boolean,
      default: true,
    },

    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

adminSchema.methods.generateLoginToken = async function () {
  const token = jwt.sign(
    {
      id: this._id,
      role: this.role,
      email: this.email,
      firstName: this.firstName,
      lastName: this.lastName,
    },

    JWT_SECRET,
    {
      expiresIn: "48h",
    }
  );

  return token;
};

export const AdminModel = model("Admin", adminSchema);
