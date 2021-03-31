
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import products from './data/products.js'
import users from './data/users.js'
import Product from './models/productModel.js'
import User from './models/userModel.js'
import Order from './models/orderModel.js'
import 'colors'

dotenv.config()
connectDB()

const importData= async ()=>{
    try {
        await User.deleteMany()
        await Product.deleteMany()
        await Order.deleteMany()
        console.log('import data function')
        const createdUsers=await User.insertMany(users)
        console.log(createdUsers)
        const adminUser=createdUsers[0]._id
        const sampleProducts=products.map(product=>{return {...product,user:adminUser}})
        await Product.insertMany(sampleProducts)
        console.log('Data Imported'.green.inverse)
        process.exit()
    
    } catch (error) {
        console.log(`Error:${error}`.red.inverse)
        process.exit(1)
    }
   
}

const destroytData= async ()=>{
    try {
        await User.deleteMany()
        await Product.deleteMany()
        await Order.deleteMany()
    
        
        console.log('Data destroyed'.green.inverse)
        process.exit()
    
    } catch (error) {
        console.log(`Error:${error}`.red.inverse)
        process.exit(1)
    }
   
}



if(process.argv[2]==='-d'){
    destroytData()
}
else{
    importData()
}