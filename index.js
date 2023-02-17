
const express = require("express");
const app = express();
const port = 3011;

app.use(express.static("public2"));
/*
app.get("/", (req, res) => {
    res.send("Get method.")
});

app.post("/" , (req, res) => {
    res.send("Post method.")
})

app.put("/" , (req, res) => {
    res.send("Put method.")
})

app.delete("/" , (req, res) => {
    res.send("delete method.")
})*/

//  ================OR=================
app.use(express.static('public'))

/*
app.listen(port, () => {
    console.log( `Server started: listening on ${port}`)
})
*/



// ===============================================================
const people = [
   
    {name: "Su Su", age: 20, id: 1},
    {name: "Aung Aung", age: 19, id: 2},
    {name: "Khin Khin", age: 22, id: 3},
]
// ===============Static URL=============
app.get("/people", (req, res) => {
    // return res.send(people)   Or
     res.status(200)
     return res.json(people)
});


// ===================app.route()===================
const user = [
    {name: "Su Su", age: 20},
    {name: "Aung Aung", age: 19},
    {name: "Khin Khin", age: 22},
    
]
app.route("/user")
   .get((req, res) => {
     res.send(user)
   })
   .post((req, res) => {
     res.send({name: "Su Khin", age: 22})
   })
   .put((req, res) => {
    res.send("Put method.")
   })
   .delete((req, res) => {
    res.send("delete method.")
   })



// ==================Dynamic URL=================

let id;
app.get("/people/:id/:homename/:aboutpage", (req, res, next) => {
    id = req.params.id; /*if you want to id Number, you write req.params.id*/
   
    next();
},   (req, res, next) => {
    res.status(200).json({id})
}) 

/*
app.route("/people")
    .delete((req, res) => {
       const sameage = people.find(person => person.id === 3)
       console.log(sameage);
       people.splice(sameage, 2)
       res.send(people)
    })

*/   
// ==========================express.router()====================

const birds = require('./routes/birdRouter')

app.use('/birds', birds)


// ================================How to files=======================
app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/img.png.png`)
})

app.listen(port, () => {
    console.log( `Server started: listening on ${port}`)
})
