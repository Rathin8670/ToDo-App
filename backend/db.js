const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://mondalrathin1234xx:rat8670h@cluster0.xumblbs.mongodb.net/todos").then(()=>{
    console.log("db is connected.")
})

const todoSchema=new mongoose.Schema({
    task:{
        type:String,
        require:true,
        unique:true
    },
    des:String,
    complete:Boolean

},{timestamps:true})

const todo=mongoose.model('todo',todoSchema)

module.exports = {
    todo
}

