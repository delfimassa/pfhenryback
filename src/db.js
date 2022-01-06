const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();


const URI = `mongodb+srv://MarcoCarballo:${process.env.MONGO_PASSWORD}@cluster0.w4hus.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`

mongoose
    .connect(URI, {
        useUnifiedTopology: true,
 		useNewUrlParser: true
    })
    .then(db => console.log(`Base de datos conectada con: ${db.connection.name}`))
    .catch(err => console.log(err));