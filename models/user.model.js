const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {type: String,required: true,unique: true,trim: true,minlength: 2},
    password: {type: String,required: true,unique: true,trim: true,minlength: 3},
    videos: {type: Array, required: true, unique: false, trim: true}
}, {
    timestamps: true,
}); 

const User = mongoose.model('User', userSchema);

module.exports = User;