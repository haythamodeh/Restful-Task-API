const controller = require("./controller");

module.exports = app => {
  app
    .get('/api/tasks', controller.allTasks)
    .get('/api/tasks/:id', controller.getTask)
    .post('/api/tasks', controller.createTask)
    .put('/api/tasks/:id', controller.updateTask)
    .delete('/api/tasks/:id', controller.deleteTask);
}