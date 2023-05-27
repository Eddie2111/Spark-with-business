import mongoose from 'mongoose';

async function Mongo() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/Spark',{
        maxPoolSize: 100,
        wtimeoutMS: 2500,
    });
    console.log('Connected to database');
  } catch (error) {
    console.error('Error connecting to database:', error);
  }
  // await mongoose.disconnect();
}

export default Mongo;
