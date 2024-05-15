const {Schema, model} = require('mongoose');

const userSchema = new Schema (
    {
        FirstName:String,
        LastName:String,
        Email:String,
        Avatar:String,
        isActive:Boolean,
        Role:String,
        createdAt:Date,
        PhoneNumber:Number,
        users:[{
            type: Schema.Types.ObjectId,
            ref: 'User'
          }]
        
    }
)

const UserModel = model('User',userSchema)

module.exports = UserModel