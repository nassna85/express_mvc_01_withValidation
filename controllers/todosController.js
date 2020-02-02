const Todo = require("../models/Todo");
const todosController = require("./TodosControllers");

module.exports = {
  index: (req, res) => {
    todosController.index(Todo, "todos", req, res);
  },

  show: (req, res) => {
    todosController.show(Todo, "todos", req, res);
  },

  new: (req, res) => {
    const data = req.body;
    data.status = 0;
    data.created_at = new Date();
    data.updated_at = new Date();
    todosController.new(Todo, "todos", data, req, res);
  },

  edit: (req, res) => {
    const data = req.body;
    data.updated_at = new Date();
    todosController.edit(Todo, "todos", data, req, res);
  },

  remove: (req, res) => {
    todosController.remove(Todo, "todos", req, res);
  }
};
