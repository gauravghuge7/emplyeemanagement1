import mongoose from "mongoose"

const announcementSchema = mongoose.Schema({
    createdBy:{
        type:String,
        
        required:true
    },
    announcement:[{
       type:String,
       required:true 
    }]
        
    
}, { timestamps:true})

export const Announcement = mongoose.model("Announcement", announcementSchema);
