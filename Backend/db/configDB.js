import mongoose from "mongoose";

let isConnected = false; // Track the connection state

async function connectDB() {
  if (isConnected) {
    console.log('Using existing database connection');
    return;
  }
  try {
    const db = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = db.connections[0].readyState;
    console.log('Database connected successfully');
  } catch (error) {
    console.error({
      message: "Failed to connect to DB",
      error: error.message,
    });
  }
}

export default connectDB;
