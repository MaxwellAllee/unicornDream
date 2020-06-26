const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const dreamSchema = new Schema({
    dream: {
        type: String,
        trim: true,
        required: "Dream must have a description"
    }
})

const Dream = mongoose.model("Dreams", dreamSchema);

module.exports = Dream;