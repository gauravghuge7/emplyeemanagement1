import mongoose from "mongoose"

const snapshotSchema = new mongoose.Schema({
 
    email: {
        type: String,
    
    },

    
        
    empPhoto: {
        type: String,

    },


    screenShot: {
        public_id: {
            type: String,
            
        },  
       
        secure_url: {
            type: String,
         
        },
   
    },
    
    time: {
        type: Date,
        default: Date.now,
    }
  

    
}, {timestamps: true})

export const Snapshot =  mongoose.model("Snapshot", snapshotSchema)   