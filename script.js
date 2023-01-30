const mongoose = require("mongoose")
const User = require("./User")

mongoose.connect("mongodb://localhost/testdb", () => {
    console.log ("connected to database")
})

addUser = async () => {
    try {
        const user = await User.create({
            name : "Priyansh",
            age : 21,
            email : "priyansh@gmail.com",
            hobbies : ["reading", "dancing", "digial painting"],
            address : {
                street : "80 feet road",
                city : "jaipur"
            }
        })
        console.log (user)
    } catch (error) {
        // console.log (error.message)
    }
}

// addUser()
