const mongoose = require('mongoose');

mongoURI = "mongodb://localhost:27017/Notero";

const connectToMongo = () => {
    mongoose.connect(mongoURI).then(() => {
        console.log("Connected to Mongo")
    }).catch((err) => { console.log(err) })
}

module.exports = connectToMongo;