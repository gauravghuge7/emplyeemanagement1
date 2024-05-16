const { Schema, model } = require('mongoose');

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
            required: [true, 'Avatar URL is required'],
        },
        isActive: {
            type: Boolean,
            default: true,
        },
        Role: {
            type: String,
            trim: true,
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
        users: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User',
            },
        ],
    },
    {
        timestamps: true,
    }
);

const AdminModel = model('Admin', adminSchema);

module.exports = AdminModel;
