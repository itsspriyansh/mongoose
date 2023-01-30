const mongoose = require("mongoose")

const addressSchema = new mongoose.Schema({
    street : String,
    city : String,
})

const userSchema = new mongoose.Schema({
    name : String,
    age : {
        type : Number,
        min : 1,
        max : 100,
    },
    email : {
        type : String,
        required : true,
    },
    createdAt : {
        type : Date,
        default : () => Date.now(),
        immutable : true,
    },
    updatedAt : {
        type : Date,
        default : () => Date.now(),
    },
    bestFriend : mongoose.SchemaTypes.ObjectId,
    hobbies : [String],
    address : addressSchema,
})

module.exports = mongoose.model("User", userSchema)
