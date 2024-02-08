const mongoose = require('mongoose')

const connectDB =async()=>{
    try {
        await mongoose.connect(process.env.mongoURI)
        console.log('DB is connected')
    } catch (error) {
        console.log(error)
    }
}


module.exports = connectDB