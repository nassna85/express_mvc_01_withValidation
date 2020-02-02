const express = require("express");
const router = express.Router();

const todosController = require("../controllers/todosController");

router.get("/", todosController.index);

router.post("/new", todosController.new);

router.get("/:id", todosController.show);

router.post("/:id/edit", todosController.edit);

router.get("/:id/delete", todosController.remove);

module.exports = router;
