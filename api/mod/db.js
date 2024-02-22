require('dotenv').config()
const mongoose = require('mongoose')
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });
        console.log('DB connected successfully');
    } catch (err) {
        console.error('DB connection failed', err);
    }
};

module.exports = connectDB;