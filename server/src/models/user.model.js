import {Schema, model} from 'mongoose';
import jwt from 'jsonwebtoken';

const userSchema = new Schema (
    
    {

        adminEmail: {
            type: String,
            required: true,
        },

        adminId: {
            type: String,

        },


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
            
             // Ensure email is unique
            unique: true,
            match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
        },

        password:{
            type:String,
            required:true
        },

        avatar:{

            public_id:String,
            secure_url:String,

        },


        isActive:{
            type:Boolean,
            default:false,
            expiresIn:"8h",
            
        },

        role:{
            type:String,
            required:true,
            default:"user"
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
           
        },


        dailyReports: [{
            type: String,
            enum: ['Daily', 'Weekly', 'Monthly'],
            required: true
        }],

        snapshots: [{
           
            type: Schema.Types.ObjectId,
            ref: 'Snapshot'
            
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





        attendance:{

            date:{
                type:Date,
               
            },

            status:{
                type:String,
                enum:["Absent","Leave","Present","Late"],
                
            },

            totalHours:{
                type:Date,
                
            },

            remarks:{
                type:String,
               
            },

            reason:{
                type:String,
                
            }
        }
    },
    {timestamps:true}
)


userSchema.methods = {

    generateUserToken: function() {

        return jwt.sign(
            {
                id: this._id,
                email: this.email,
                adminEmail: this.adminEmail,
                role: this.role,
                phoneNumber: this.phoneNumber,
                
            },
            process.env.JWT_SECRET,
            {expiresIn: "1d"}
        )
    }
}


export const UserModel = model('UserModel',userSchema)

