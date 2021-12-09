const express = require("express");
const app = express();
const PORT = 3000;
const data = {  
    userInfo:[
        {
            name: "Michael",
            age: 35,
            eyeColor: "blue"
        },
        {
            name: "Easton",
            age: 25,
            eyeColor: "hazel"
        },
        {
            name: "Davey",
            age: 35,
            eyeColor: "brown"
        }
    ],
    userCar: [
        {
            model: "VW",
            color: "Orange",
            year: "2019"
        },
        {
            model: "Chevy",
            color: "blue",
            year: "2015"
        },   
        {
            model: "none",
            color: "none",
            year: "none"
        }
    ],
    userPet: [
        {
            breed: "none",
            size: "none"
        },
        {
            breed: "German Short Hair Pointer",
            size: "Large"
        },
        {
            breed: "Chihuahua",
            size: "Small"
        }
    ]
}
app.get("/data", (req, res) =>{
    res.send(data)
})
app.get("/data/userInfo", (req, res) =>{
    res.send(data.userInfo)
})
app.get("/data/userCar", (req, res) =>{
    res.send(data.userCar)
})
app.get("/data/userPet", (req, res) =>{
    res.send(data.userPet)
})
app.listen(PORT, () =>{
    console.log("Port is running")
})