const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

/** BCRYPT */

const SALT_WORK_FACTOR = 10;

const userSchema = new Schema({
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true}
})

userSchema.pre('save', async function(next) {

});

module.exports = mongoose.model('User', userSchema)