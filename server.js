const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotnenv = require("dotenv");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
    useCreateInder: true,
    useNewUrlParser: true,
    useUnifiedTopologyL: true,
    useFindAndModify: false
});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('Mongodb Connecton success!');
})

//access book.js
const reservationRouter = require("./routes/Booking.js")
app.use("/booking",reservationRouter);

//run defined +>
app.listen(PORT, () => {
    console.log('Server is start up and running on port ' + PORT);

})