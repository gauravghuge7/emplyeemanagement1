import {Schema, model} from 'mongoose';

const leaveSchema = new Schema (
    
    {

        fullName:{
            type:String,
            // required:true
        },
    
        reason:{
            type:String,
            required:true
        },
        
        email: {
            type: String,
            required: true
        },

        employeeId: {
            type: String,
            required: true
        },

        date:{
            type:Date,
            required:true
        },

        department:{
            type:String,
            required:true
        },

        explainAboutLeave:{
            type:String,
            required:true
            
        },
        leaveStatus:{
            type:String,
            default:'pending'
        }

    }
)

export const LeaveModel = model('Leave',leaveSchema);