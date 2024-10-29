const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://Divya:Ads7685@in-aws.eadh1.mongodb.net/")

const connection = mongoose.connection;

connection.on('connected', () => (console.log("DB Connected")))
connection.on('error', () => (console.log("DB Error")))
module.exports = mongoose