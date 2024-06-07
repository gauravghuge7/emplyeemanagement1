// import express from 'express';

// const UserRouter = express.Router();








// export default UserRouter;




import express from 'express';
import bcrypt from 'bcryptjs';
import { UserModel } from './models/User.js';
import asyncHandler from './utils/asyncHandler.js';
import jwt from 'jsonwebtoken';

const UserRouter = express.Router();

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    });
};

// User login
UserRouter.post('/login', asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
    }

    const user = await UserModel.findOne({ email });

    if (!user) {
        return res.status(400).json({ message: "User not found" });
    }

    const comparePassword = await bcrypt.compare(password, user.password);

    if (!comparePassword) {
        return res.status(400).json({ message: "Invalid password" });
    }

    res.cookie('token', generateToken(user._id), { httpOnly: true });

    res.json({
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        avatar: user.avatar,
        role: user.role,
        isActive: user.isActive,
        token: generateToken(user._id)
    });
}));

// User logout
UserRouter.post('/logout', asyncHandler(async (req, res) => {
    res.cookie('token', '', {
        httpOnly: true,
        expires: new Date(0),
    });
    res.status(200).json({ message: 'User logged out' });
}));

// Update user avatar
UserRouter.put('/update-avatar', asyncHandler(async (req, res) => {
    const { Email } = req.cookies;

    const user = await UserModel.findOne({ email: Email });

    if (!user) {
        return res.status(400).json({ message: "User not found" });
    }

    if (req.file) {
        const { filename, path } = req.file;
        const newPath = path + filename;
        const avatar = await s3.uploadFile(newPath);
        user.avatar = avatar;
        await user.save();
    }

    res.status(200).json({ message: "Avatar updated" });
}));

// Get user profile
UserRouter.get('/profile', asyncHandler(async (req, res) => {
    const { token } = req.cookies;
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await UserModel.findById(decoded.id);

    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    res.json({
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        avatar: user.avatar,
        role: user.role,
        isActive: user.isActive,
    });
}));

// Get user dashboard
UserRouter.get('/dashboard', asyncHandler(async (req, res) => {
    const { token } = req.cookies;
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await UserModel.findById(decoded.id);

    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    // Mock data for dashboard
    const dashboardData = {
        recentActivities: [],
        notifications: [],
        // Include other necessary data
    };

    res.json({
        user,
        dashboardData
    });
}));

export default UserRouter;
