const express = require("express")
const cors = require("cors");
const { connection } = require("./config/db");
const { plantsRouter } = require("./routes/plants.route")


require("dotenv").config()

const app = express();
app.use(express.json())
app.use(cors())

app.use("/plants", plantsRouter)

app.listen(process.env.PORT, async () => {
    try {
        await connection
        console.log(`Server is running at port ${process.env.PORT} and is connected to the database`)
    } catch (error) {
        console.log(error.message)
    }
})
