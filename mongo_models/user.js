var mongoose = require('mongoose')

    const userSchema = new mongoose.Schema({
        username : String
    });
    module.exports = mongoose.model('username', userSchema);