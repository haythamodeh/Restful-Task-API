const controller = require("./controller");

module.exports = function (app){
    app
        .get('/', controller.allTasks)
        .get('/api/task/:id', controller.getTask)
        .post("/api/task", controller.createTask)
        .delete("/api/task/delete/:id", controller.deleteTask)
        .put("/api/task/:id", controller.updateTask)
}