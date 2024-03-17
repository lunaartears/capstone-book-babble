import express, { json } from 'express'
const app = express()
import dotenv from 'dotenv';
import morgan from 'morgan'
import { connect } from 'mongoose'
import authRouter from './routes/authRouter.js';
dotenv.config();




app.use(json())
app.use(morgan('dev'))

async function connectToDB() {
    try {
        connect(
            'mongodb+srv://lunarlightandshadow:D0j6JeBxItkAtcSa@cluster0.vgrevnd.mongodb.net/'
        )
            console.log('Connected to the DB')
    } catch (err) {
        console.log(err)
    }
}

app.use('/auth', authRouter)


app.listen(7007, () => {
    console.log("i work")
    console.log("Server is running on port 7007")
    connectToDB()
})


//D0j6JeBxItkAtcSa
