const Todo = require("../models/todosModels");
const mongoose = require('mongoose'); 

const getAllTodos = async (req, res) => {
    try {
        // const { title } = req.body;
        const todos = await Todo.find();
        res.status(200).json({
            status: "success",
            length: todos.length,
            body:{
                todos
            }
        })

    } catch (error) {
        res.status(400).json({
            status: "failed",
            body:{
                message: error
            }
        })
    }
};

const getTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await Todo.find({_id:id});

        res.status(200).json({
            status: "success",
            todo
        })

        
    } catch (error) {
        res.status(400).json({
            status: "failed",
            body:{
                message: error
            }
        })
    }
  
};
const createTodo = async (req, res) => {
    try {
        const { title } =req.body;
        const todo = await Todo.create({title});

        res.status(201).json({
            status:"sucessfully created",
            todo
        })

    } catch (error) {
        res.status(400).json({
            status: "failed",
            body:{
                message: error
            }
        })
    }
};
const updateTodo = async (req, res) => {
    try {
        const { id:_id } = req.params;
        const { title } = req.body;
        const updatedTodo = await Todo.findByIdAndUpdate(_id,{title},{new:true}) ;
        res.status(200).json({
            status:"sucessfully updated",
            updatedTodo
        })
    } catch (error) {
        res.status(400).json({
            status: "failed",
            body:{
                message: error
            }
        });
    }

};
const deleteTodo = async (req, res) => {
    try {
        const { id:_id } = req.params;
        const deleteTodo = await Todo.findByIdAndDelete(_id);
        res.status(200).json({
            status: "deleted successfully",
            deleteTodo
        })
    } catch (error) {
        res.status(400).json({
            status: "failed",
            body:{
                message: error
            }
        });
    }
};

module.exports = { getAllTodos, getTodo, createTodo, updateTodo, deleteTodo};
