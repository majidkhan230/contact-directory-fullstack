// db/configDB.js
import mongoose from "mongoose";

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGODB_URI); // Options are no longer needed
        console.log('DB is successfully connected');
    } catch (error) {
        console.error({
            message: "Failed to connect to DB",
            error: error.message
        });
    }
}

export default connectDB;
