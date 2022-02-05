const express = require("express")
const cinemaRouter = require("./routes/cinemas.routes")
const placesRouter = require("./routes/places.routes")

const PORT = process.env.PORT || 8080

const userRouter = require('./routes/user.routes')



const app = express()

const cors = require('cors');
app.use(cors({
    origin: '*'
}));

app.use(express.json())
app.use('/api', userRouter)
app.use('/api', cinemaRouter)
app.use('/api', placesRouter)



app.listen(PORT, () => { console.log("im working")})