import { Schema, model } from 'mongoose';
import jwt from 'jsonwebtoken';

const adminSchema = new Schema(
    {
        FirstName: {
            type: String,
            trim: true,
            required: [true, 'First name is required'],
            minlength: [3, 'First name must be at least 3 characters long'],
            maxlength: [50, 'First name cannot exceed 50 characters'], 
        },

        LastName: {
            type: String,
            trim: true,
            required: [true, 'Last name is required'],
            minlength: [3, 'Last name must be at least 3 characters long'],
            maxlength: [50, 'Last name cannot exceed 50 characters'],
        },

        Email: {
            type: String,
            trim: true,
            required: [true, 'Email address is required'],
            unique: true,
            match: [
                /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 
                'Please enter a valid email address',
            ],
        },

        Avatar: {
            type: String,
            trim: true,
            // required: [true, 'Avatar URL is required'],
        },

        isActive: {
            type: Boolean,
            default: true,
        },

        Role: {
            type: String,
            trim: true,
            default: 'user',
            enum: ['admin', 'user', 'moderator'],
            required: [true, 'User role is required'],
        },

        createdAt: {
            type: Date,
            default: Date.now,
        },

        PhoneNumber: {
            type: Number,
            required: [true, 'Phone number is required'],
            validate: {
                validator: function (value) {
                    return /^\d{10}$/.test(value); 
                },
                message: 'Please enter a valid 10-digit phone number',
            },
        },

        password: {
            type: String,
            minlength: [8, 'Password must be at least 8 characters long'],
            maxlength: [20, 'Password cannot exceed 20 characters'],
            trim: true,
        },

        users: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User',
            },
        ],

    },

    { timestamps: true }
);


adminSchema.methods = {
    generateLoginToken: function async() {
        const token = jwt.sign({ 
            id: this._id,
            role: this.Role,
            email: this.Email,
            firstName: this.FirstName,
            lastName: this.LastName,
        }, 
        
        process.env.JWT_SECRET, 
        {
            expiresIn: '48h',
        });

        return token;
    }
}




export const AdminModel = model('Admin', adminSchema);

