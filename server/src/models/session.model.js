const {Schema, model} = require('mongoose');

const sessionSchema = new Schema (
    {
        userID:String,
        startedAt:Date,
        endedAt:Date,
        totalTime:String,
        isActive:Boolean
    }
)

const SessionModel = model('Session',sessionSchema)

module.exports = SessionModel