const mongoose = require('mongoose');

const  todoSchema = new mongoose.Schema({
    title:String,

    description:String,

    completed:{
        type:Boolean,
        default:false
    },
    user_id: {type: mongoose.Schema.Types.ObjectId, ref:'User'}
});

module.exports = mongoose.model('Todo',todoSchema);