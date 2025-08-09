const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI)
        console.log(`Connected To Mongodb ${mongoose.connection.host}`.bgGreen.white);
    } catch (error) {
        console.log(`Mongodb error ${error}`)
    }
};

module.exports = connectDB;