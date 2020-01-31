const Todo = require("../models/Todo");

const { validationResult } = require("express-validator");

module.exports = {
  index: (req, res) => {
    Todo.findAll((error, results) => {
      if (error) throw error;
      res.json(results);
    });
  },

  show: (req, res) => {
    const todoID = req.params.id;
    Todo.findById(todoID, (error, result) => {
      if (error) throw error;
      res.json(result);
    });
  },

  new: (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    const todo = req.body;
    req.body.status = 0; //Default value for status
    Todo.create(todo, (error, result) => {
      if (error) throw error;
      res.json(todo);
    });
  },

  edit: (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    const todo = req.body;
    const todoID = req.params.id;

    Todo.update(todo, todoID, (error, result) => {
      if (error) throw error;
      res.json(todo);
    });
  },

  remove: (req, res) => {
    const todoID = req.params.id;

    Todo.delete(todoID, (error, result) => {
      if (error) throw error;
      res.json({ success: "Todo is deleted !" });
    });
  }
};
