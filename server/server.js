import express from "express";
import cors from "cors";
import DbConnect from "./config/db.js";
import AuthRoute from "./routes/authRoute.js"
import NoteRoute from "./routes/noteRoute.js"


const app = express()

app.use(cors())
app.use(express.json())


app.get('/test', function (req, res) {
    res.send('Hello Hadi Rasal')
})

//Routes
app.use('/api/v1/auth', AuthRoute)
app.use('/api/v1/notes', NoteRoute)

//Mongo Connect
DbConnect()



app.listen(8080, () => {
    console.log("Server Connected to PORT 8080")
})

