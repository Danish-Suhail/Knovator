const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    status: {
        type: Boolean,
        default: true
    },
    
    geolocation: {
        latitude: { type: Number, required: true },
        longitude: { type: Number, required: true }
    }
}, { timestamps: true });

module.exports = mongoose.model('Post', postSchema);