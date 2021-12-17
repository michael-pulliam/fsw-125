const express = require('express');
const inTakeRouter = express.Router();
const {v4: uuidv4} = require('uuid');

let data = [
    {
        name: "soda can",
        description: "empty can",
        recyclable: true,
        quantity: 2,
        pricePerUnit: 1, 
        _id: uuidv4()
    },
    {
        name: "new Paper",
        description: "News Paper",
        recyclable: true,
        quantity: 6,
        pricePerUnit: 2, 
        _id: uuidv4()
    },
    {
        name: "Car Tire",
        description: "Used Tire",
        recyclable: false,
        quantity: 100,
        pricePerUnit: 5, 
        _id: uuidv4()
    }
]

inTakeRouter
    .get("/", (req, res) => {
        res.send(data)
    })
    .post("/", (req, res) => {
        const newData = req.body;
        newData._id = uuidv4();
        data.push(newData);
        res.send("Data added Successfully");
    })
    .get("/:itemId", (req, res) =>{
        const itemId = req.params.itemId
        const findItem = data.filter(e => e._id === itemId)
        res.send(findItem)
    })
    .put("/:itemId", (req, res) =>{
        const itemId = req.params.itemId;
        const newEntry = data.findIndex(e => e._id === itemId);
        Object.assign(data[newEntry], req.body)
        res.send(`${data[newEntry].name} updated Successfully`)
    })

    .delete("/:itemId", (req, res) =>{
        const itemId = req.params.itemId
        const newEntry = data.findIndex(e => e._id === itemId);
        data.splice(newEntry, 1)
        res.send("Entry Deleted")

    })


module.exports = inTakeRouter