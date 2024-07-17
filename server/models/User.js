const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  work: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  links: {
    type: String,
  },
  experience: {
    type: String,
  },
  education: {
    type: String,
  },
  year: {
    type: String,
  },
  skills: {
    type: String,
  },
  hobbies: {
    type: String,
  },
  imgUrl:{
    type:String,
  },
  publicUrl:{
    type:String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("user", userSchema);

module.exports = User;
