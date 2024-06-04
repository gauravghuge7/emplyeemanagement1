import { Schema, model } from 'mongoose';
import jwt from 'jsonwebtoken';

const adminSchema = new Schema({

    // Fields For Registration

    //  FIXME: Snake Casing For Field Name in Table
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

    // FIXME: There Is a Automatic Field For Id. So AdminId is Not required 
    // unless it is EmployeementId
    AdminId: {
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

    password: {
        type: String,
        minlength: [8, 'Password must be at least 8 characters long'],
        maxlength: [20, 'Password cannot exceed 20 characters'],
        trim: true,
    },

    // Fields For Profile 
    // FIXME: Not Required

    Avatar: {
        type: String,
        trim: true,
        // required: [true, 'Avatar URL is required'],
    },

    PhoneNumber: {
        type: Number,
        required: [true, 'Phone number is required'],
        validate: {
            validator: function(value) {
                return /^\d{10}$/.test(value);
            },
            message: 'Please enter a valid 10-digit phone number',
        },
    },

    // Internal Fields

    Role: {
        type: String,
        trim: true,
        default: 'user',
        enum: ['admin', 'user', 'moderator'],
        required: [true, 'User role is required'],
    },

    users: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
    }, ],

    // FIXME: Total Number Of Employees Should Be A Number
    totalEmployee: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },

    // FIXME: Can A Admin Only Handle One Employee At Any Specific Time
    // TODO: Leave Application Should Be handled in another Model As it Many to Many Mapping
    // Admin Can Aprrove Multiple Leave Application
    // Employee Can Have Maultiple Leave Application
    LeaveEmployee: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },

    isActive: {
        type: Boolean,
        default: true,
    },

    createdAt: {
        type: Date,
        default: Date.now,
    }
}, { timestamps: true });


adminSchema.methods = {
    generateLoginToken: function async() {
        const token = jwt.sign({
                id: this._id,
                role: this.Role,
                email: this.Email,
                firstName: this.FirstName,
                lastName: this.LastName,
            },

            process.env.JWT_SECRET, {
                expiresIn: '48h',
            });

        return token;
    }
}




export const AdminModel = model('Admin', adminSchema);