// const mongoose = require('mongoose')
// const Schema = mongoose.Schema

// const userSchema = new Schema({
//     username: {
//         type: String,
//         required: true,
//         lowercase: true,
//         unique: true
//     },
//     password: {
//         type: String,
//         required: true
//     },
//     memberSince: {
//         type: Date,
//         default: Date.now
//     },
//     isAdmin: {
//         type: Boolean,
//         default: false
//     }
// })


// module.exports = mongoose.model("User", userSchema)


import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    memberSince: {
        type: Date,
        default: Date.now
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
});

export default model("User", userSchema);
