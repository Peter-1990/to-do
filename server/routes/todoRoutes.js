const express = require("express");
const { createTodoController, getTodoController, deleteTodoController, updateTodoController } = require("../controllers/todoController.js");
const authMiddlewares = require("../middlewares/authMiddlewares.js");

const router = express.Router();

router.post("/create", authMiddlewares, createTodoController);

router.get("/getAll/:userId", authMiddlewares, getTodoController);

router.delete("/delete/:id", authMiddlewares, deleteTodoController);

router.patch("/update/:id", authMiddlewares, updateTodoController);

module.exports = router;