const express = require('express');
const todoRouter = express.Router();
const {v4: uuidv4} = require('uuid');

let data = [
    {
        title: "Web Meeting",
        Description: "FSW-125 Live Class",
        time: "7:30pm",
        date: "12/16/2022",
        isComplete: false,
        _id: uuidv4()
    },
    {
        title: "Web Meeting",
        Description: "FSW-125 Live Class",
        time: "7:30pm",
        date: "12/16/2022",
        isComplete: false,
        _id: uuidv4()
    },
    {
        title: "Web Meeting",
        Description: "FSW-125 Live Class",
        time: "7:30pm",
        date: "12/16/2022",
        isComplete: false,
        _id: uuidv4()
    }
]

todoRouter
    .get("/", (req, res) => {
        res.send(data)
    })
    .post("/", (req, res) => {
        const todoId = req.body;
        newId._id = uuidv4();
        data.push(todoId);
        res.send("added successfully");
    })
    .put("/:todoId", (req, res) => {
        const todoId = req.params.todoId;
        const updateEntry = data.indexOf(e => e._id === todoId)
        Object.assign(data[updateEntry], req.body)
        res.send(`${data[UpdateEntry].title} updated Successfully`)
    })
    .delete("/:todoId", (req, res) => {
        const todoId = req.params.todoId
        const newId = data.indexOf(e => e._id === todoId)
        data.splice(newId)
        res.send("deleted Successfully")
    })

    module.exports = todoRouter