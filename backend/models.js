const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/task_api_db', {useNewUrlParser:true});

const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Name is required']
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
    default: ""
  },
  completed: { 
    type: Boolean, 
    default: false 
  },
}, {timestamps:true});

module.exports = mongoose.model('Task', TaskSchema);
