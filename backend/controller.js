const Task = require("./models");
   

module.exports = {
    allTasks: (req, res) => {
        Task.find()
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
    createTask: (req, res) => {
        const DATA = req.body;
        Task.create(DATA)
            .then(() => res.json())
            .catch(err => res.json(err))
    },
    deleteTask: (req, res) => {
        const ID = req.params.id;
        Task.findByIdAndDelete({_id: ID})
            .then(() => res.json())
            .catch(err => res.json(err))
    },
    getTask: (req, res) => {
        const ID = req.params.id;
        Task.findById({_id: ID})
            .then((data) => res.json(data))
            .catch(err => res.json(err))
    },
    updateTask: (req,res) => {
        const ID = req.params.id;
        const DATA = req.body;
        Task.findOneAndUpdate({_id: ID}, DATA, {runValidators: true})
            .then(data => req.json(data))
            .catch(err => res.json(err))
    }
}