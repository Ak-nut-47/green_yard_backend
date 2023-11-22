const { Router } = require("express")
const { PlantModel } = require("../models/post.model")
require("dotenv").config()

const plantsRouter = Router();

plantsRouter.get("/", async (req, res) => {
    try {
        const plants = await PlantModel.find({})
        res.status(200).json({ msg: "Plants", plants })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})


plantsRouter.post("/", async (req, res) => {
    try {
        const post = new PlantModel({ ...req.body })
        await post.save();
        res.status(200).json({ msg: "Plant Added Successfully" })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

module.exports = { plantsRouter }