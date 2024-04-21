
const mongoose = require("mongoose");


const todosSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        unique:true
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
})


const Todo  = new mongoose.model("Todo",todosSchema);

module.exports = Todo;