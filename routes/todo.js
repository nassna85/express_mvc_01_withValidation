const express = require("express");
const router = express.Router();
const { check } = require("express-validator");

const todosController = require("../controllers/todosController");

router.get("/", todosController.index);

router.post(
  "/new",
  check("name")
    .isLength({ min: 5 })
    .withMessage("Name must be at least 2 characters long"),
  check("description")
    .isLength({ min: 10 })
    .withMessage("Description must be at least 10 characters long"),
  todosController.new
);

router.get("/:id", todosController.show);

router.post(
  "/:id/edit",
  check("name")
    .isLength({ min: 5 })
    .withMessage("Name must be at least 2 characters long"),
  check("description")
    .isLength({ min: 10 })
    .withMessage("Description must be at least 10 characters long"),
  todosController.edit
);

router.get("/:id/delete", todosController.remove);

module.exports = router;
