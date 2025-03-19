import mongoose from "mongoose";

const dbConnect = async () => {
    try {
        const connection = await mongoose.connect(`${process.env.MONGODB_URI}`)
        if (!connection) {
            console.log(`Error while connecting to database`)
        }
        console.log(`MongoDB connected successfully || HOST : ${connection.connection.host}`)
    } catch (error) {
       console.error(`Error while connecting to database : ${error}`) 
    }
}

export default dbConnect;