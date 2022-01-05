const express = require('express');
const recycleRouter = express.Router();
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

recycleRouter
    .get("/", (req, res) => {
        res.send(data)
    })
    .post("/", (req, res) => {
        const itemId = req.body;
        itemId._id = uuidv4();
        data.push(itemId);
        res.send(itemId);
    })
    .put("/:itemId", (req, res) => {
        const itemId = req.params.itemId;
        const itemIndex = data.indexOf(e => e._id === itemId)
        Object.assign(data[itemIndex], req.body)
        res.send(`${data[itemIndex].title} updated Successfully`)
    })
    .delete("/:itemId", (req, res) => {
        const itemId = req.params.itemId
        const itemIndex = data.indexOf(e => e._id === itemId)
        data.splice(itemIndex, 1)
        res.send("deleted Successfully")
    })

    module.exports = recycleRouter