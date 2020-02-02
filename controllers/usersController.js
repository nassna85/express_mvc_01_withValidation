const User = require("../models/User");
const userController = require("./UsersControllers");

module.exports = {
  index: (req, res) => {
    userController.index(User, "users", req, res);
  },

  show: (req, res) => {
    userController.show(User, "users", req, res);
  },

  new: (req, res) => {
    const data = req.body;
    data.created_at = new Date();
    data.updated_at = new Date();
    userController.new(User, "users", data, req, res);
  },

  edit: (req, res) => {
    const data = req.body;
    data.updated_at = new Date();
    userController.edit(User, "users", data, req, res);
  },

  remove: (req, res) => {
    userController.remove(User, "users", req, res);
  }
};
