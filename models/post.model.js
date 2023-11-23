const mongoose = require("mongoose")

const plantSchema = mongoose.Schema({
    title: String,
    price: String,
    description: String,
    careguide: String,
    image: String,
    category: String
})

const PlantModel = mongoose.model("plants", plantSchema)
module.exports = { PlantModel }