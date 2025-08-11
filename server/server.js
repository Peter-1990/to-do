const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const colors = require('colors');
const cors = require('cors');
const connectDB = require('./config/db.js');


//dotenv config
dotenv.config();

//DB Connection
connectDB();


//rest object
const app = express();

//middlewares
app.use(express.json());
app.use(cors({
    origin: "*",
    credentials: true
}));
app.use(morgan("dev"));

app.use('/api/v1/user', require('./routes/userRoutes.js'));
app.use('/api/v1/todo', require('./routes/todoRoutes.js'))

app.get("/", (req, res) => res.send("API Working"))

//port
const PORT = process.env.PORT || 5000;

//listen
app.listen(PORT, () => {
    console.log(`Node Server Running on ${process.env.DEV_MODE} node on Port no ${PORT}`.bgMagenta);
});