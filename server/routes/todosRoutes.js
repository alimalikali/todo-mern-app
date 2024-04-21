const express = require("express");
const { getAllTodos, getTodo, createTodo, updateTodo, deleteTodo,} = require("../controllers/todosControllers");

const router = express.Router();

router.get("/", getAllTodos);
router.get("/:id", getTodo);
router.post("/", createTodo);
router.patch("/:id", updateTodo);
router.delete("/:id", deleteTodo);

module.exports = router;
