import express from 'express'
import dontenv from  'dotenv'
import connectDB from './config/db.js'
import productRoutes from './routes/productroutes.js' 
import userRoutes from './routes/userRoutes.js' 
import  'colors'
import {notFound,errorHandler} from './middleware/errorHandler.js'
const app=express()

app.use(express.json())

dontenv.config()
connectDB()
app.get('/',(req,res)=>{
    res.send('API is running..')
})

app.use('/api/products',productRoutes)
app.use('/api/user',userRoutes)
app.use(notFound)
app.use(errorHandler)

const port=process.env.PORT || 5000
app.listen(port,console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`.yellow.bold))