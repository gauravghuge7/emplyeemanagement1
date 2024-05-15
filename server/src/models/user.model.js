const {Schema, model} = require('mongoose');

const userSchema = new Schema (
    {
        FirstName:String,
        LastName:String,
        Email:String,
        Password:String,
        Avatar:String,
        isActive:Boolean,
        Role:String,
        createdAt:Date,
        PhoneNumber:Number,
        ClockingHours: Number,
        sessions: [{
            type: Schema.Types.ObjectId,
            ref: 'Session'
          }],
        hasClockedToday: {
            type: Boolean,
            default: false
          },
        Attendance:{
            Date:Date,
            Status:{
                type:String,
                enum:["Absent","Leave","Present","Late"]
            },
            TotalHours:Date,
            Remarks:String,
            Reason:String
        }
    }
)

const UserModel = model('User',userSchema)

module.exports = UserModel