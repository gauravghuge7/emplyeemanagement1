import mongoose from "mongoose"

const snapshotSchema = new mongoose.Schema({
 
    email: {
        type: String,
        required: true
    },

    snaps: [{
        
        empPhoto: {
            type: String,
            required: true
        },


        screenShot: {
            type: String,
            required: true
        },
        
        time: {
            type: Date,
            required: true
        }
    }]

    
}, {timestamps: true})

export const Snapshot =  mongoose.model("Snapshot", snapshotSchema)   