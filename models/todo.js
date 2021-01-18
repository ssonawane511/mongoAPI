const mongoose  = require('mongoose');

const TodoSchema = new mongoose.Schema({
  task: { type: String, required: true },
  date: { type: Number, default: Date.now()},
  taskId : { type: String, required: true},
  isCompleted : { type : Boolean },
},{
    collection:"my-todo"
});

const model = mongoose.model('TodoModel',TodoSchema)

module.exports = model;