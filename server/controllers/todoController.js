const todoModel = require("../models/todoModel.js");

const createTodoController = async (req, res) => { 
    try {
        const { title, description, createdBy } = req.body;
        if (!title || !description) {
            return res.status(500).send({
                success: false,
                message: 'please provide title and description'
            });
        }
        const todo = new todoModel({ title, description, createdBy });
        const result = await todo.save();
        res.status(201).send({
            success: true,
            message: "your task has been created",
            result,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'error in create todo',
            error,
        })
        
    }
};


const getTodoController = async (req, res) => {
    try {
        const { userId } = req.params;
        if (!userId) {
            return res.status(404).send({
                success: false,
                message: "No user found with this id",
            })
        };
        const todos = await todoModel.find({ createdBy: userId });
        if (!todos) {
            return res.status(404).send({
                success: true,
                message: "you have no todos"
            })
        };
        res.status(200).send({
            success: true,
            message: "Your Todos",
            todos,
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in get all todo",
            error,
        })
    }
};


const deleteTodoController = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(404).send({
                success: false,
                message: "No todo found in this id",
            })
        }
        const todo = await todoModel.findByIdAndDelete({ _id: id });
        if (!todo) {
            return res.status(404).send({
                success: false,
                message: "No task found",
            });
        }
        res.status(200).send({
            success: true,
            message: "Your Task Has been Deleted",
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            error,
            message: "Error in delete todo",
        })
    }
};


const updateTodoController = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(404).send({
                success: false,
                message: "please private todo id",
            })
        };
        const data = req.body;

        const todo = await todoModel.findByIdAndUpdate(id,
            { $set: data },
            { returnOriginal: false }
        );
        res.status(200).send({
            success: true,
            message: "Your task has been updated",
            todo,
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            error,
            message: "Error In Update Todo",
        })
    }
};


module.exports = {
    createTodoController,
    getTodoController,
    deleteTodoController,
    updateTodoController,
};