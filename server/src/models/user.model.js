import {Schema, model} from 'mongoose';

const userSchema = new Schema (
    
    {
        FirstName:{
            type:String,
            required:true,
            minlength: 3 
        },

        LastName:{
            type:String,
            required:true
        },

        Email:{
            type:String,
            required:true,
            unique: true, // Ensure email is unique
            match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
        },

        Password:{
            type:String,
            required:true
        },

        Avatar:{

            Email:String,
            public_url:String
        },


        isActive:{
            type:Boolean,
            required:true
        },

        Role:{
            type:String,
            required:true
        },
        
        createdAt:{
            type:Date,
            default:Date.now,
            required:true
        },
        PhoneNumber:{
            type:Number,
            required:true
        },

        ClockingHours: {
            type:Number,
            required:true
        },

        dailyReports: [{
            type: String,
            enum: ['Daily', 'Weekly', 'Monthly'],
            required: true
        }],

        sessions: [{
            type: Schema.Types.ObjectId,
            ref: 'Session'
          }],
        hasClockedToday: {
            type: Boolean,
            default: false,
            required:true
        },

        LeaveApplication: {




            department: {
                type: String,
                required: true
            },
            reason: {
                type: String,
                required: true
            },
            date: {
                type: Date,
                required: true
            },
        },




        Attendance:{
            Date:{
                type:Date,
                required:true
            },
            Status:{
                type:String,
                enum:["Absent","Leave","Present","Late"],
                required:true
            },
            TotalHours:{
                type:Date,
                required:true
            },
            Remarks:{
                type:String,
                required:true
            },
            Reason:{
                type:String,
                required:true
            }
        }
    }
)

export const UserModel = model('User',userSchema)

