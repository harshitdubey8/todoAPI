import mongoose from "mongoose";

const connectDB = async () => {
  const dbPASS = "SNGg7W2H4YTG5P2";
  const dbURI = `mongodb+srv://root:${dbPASS}@cluster0.zjbpi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

  try {
    const conn = await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });
    console.log(`Mongodb connected ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
