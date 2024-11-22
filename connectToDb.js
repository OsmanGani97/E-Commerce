const mongoose = require('mongoose');
const connectToDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://goni9247:osman1997@cluster0.vzzs5je.mongodb.net/", {
           
        })
        console.log('Connected to Mongodb Atlas Successfully');} catch (error) {
        console.error(error);
    }
}
module.exports =connectToDB;