const mongoose = require("mongoose")
const user = require("./User")
const worker = require("./Worker")

mongoose.connect("mongodb://localhost/testdb", () => {
    console.log ("connected to database")
})
