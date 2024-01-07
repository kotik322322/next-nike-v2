// import mongoose from 'mongoose';

// const connection = {};

// async function dbConnect() {
//   if (connection.isConnected) {
//     return;
//   }

//   const db = await mongoose.connect(process.env.MONGODB_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });

//   connection.isConnected = db.connections[0].readyState;
// }

// export default dbConnect;

import mongoose from "mongoose";

interface ProcessEnvType {
  MONGODB_URI: string;
}

declare const process: {
  env: ProcessEnvType;
};

const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB.");
  } catch (error) {
    console.log(error);
  }
};

export default connectMongoDB;
