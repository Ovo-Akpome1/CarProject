const mongoose = require ("mongoose");

const carSchema = new mongoose.Schema ({
    name:{
        type: String,
        required:true
    },
    model: {
        type: String,
        required:true
    },
    year:{
        type: Number,
        required:true
    },
    color:{
        type: String,
        required:true
    }
}, {timestamps: true})

module.exports = mongoose.model ("CarModel", carSchema);