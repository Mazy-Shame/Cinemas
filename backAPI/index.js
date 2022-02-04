const express = require("express")
const cinemaRouter = require("./routes/cinemas.routes")

const PORT = process.env.PORT || 8080

const userRouter = require('./routes/user.routes')

const app = express()


app.use(express.json())
app.use('/api', userRouter)
app.use('/api', cinemaRouter)



app.listen(PORT, () => { console.log("im working")})