const express = require('express');
var cors = require('cors')
const mongoose = require('mongoose');
const port = 3002;
const router = require('./routes/slider-routes')

const app = express();

app.use(cors())
app.use(express.json())
app.use('/home',router)

mongoose.connect('mongodb+srv://Nijat:gXIlfSzMfJdpsrxd@cluster0.7gksg.mongodb.net/FrontendProject1DB?retryWrites=true&w=majority')
.then(() => console.log('Connect Database...!'))
.then(() => {
    app.listen(port)
})
.catch((err) => console.log(err))