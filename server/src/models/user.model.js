import {Schema, model} from 'mongoose';

const userSchema = new Schema (
    
    {
        firstName:{
            type:String,
            required:true,
            minlength: 3 
        },

        lastName:{
            type:String,
            required:true
        },

        email:{
            type:String,
            required:true,
            unique: true, // Ensure email is unique
            match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
        },

        password:{
            type:String,
            required:true
        },

        avatar:{

            Email:String,
            public_url:String
        },


        isActive:{
            type:Boolean,
            required:true
        },

        role:{
            type:String,
            required:true
        },
        
        createdAt:{
            type:Date,
            default:Date.now,
            required:true
        },

        phoneNumber:{
            type:Number,
            required:true
        },

        clockingHours: {
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

        leaveApplication: {




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




        attendance:{
            date:{
                type:Date,
                required:true
            },

            status:{
                type:String,
                enum:["Absent","Leave","Present","Late"],
                required:true
            },

            totalHours:{
                type:Date,
                required:true
            },

            remarks:{
                type:String,
                required:true
            },

            reason:{
                type:String,
                required:true
            }
        }
    }
)

export const UserModel = model('User',userSchema)

