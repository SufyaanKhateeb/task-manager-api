const mongoose = require('mongoose')
const { join } = require('path')
require('dotenv').config({path: join(__dirname, '..', '..', './config/dev.env')})

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
})