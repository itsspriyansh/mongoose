const mongoose = require("mongoose")

const workerSchema = new mongoose.Schema({
    name : String,
    age : Number,
    pay : Number,
})

module.exports = mongoose.model("Worker", workerSchema0
)