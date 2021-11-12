const express = require("express");
const app = express();
const date = require("./data.js");

app.listen(3000, () => {
    console.log("Server esta corriendo por el puerto 3000")
});


//Peticion GET- estamos pidiendo que envie algo

app.get("/welcome", (req, res) => {     
   console.log("Bienvenido")
});

//si en chrome pones "localhost:3000" en la terminal te va salir "bienvenido" cada vez que se ejecute la paguina de chrome

//si quiero devolver una respuesta --> "req" request lo que traiga el pedido.. "res" respuesta para responder

app.get("/hola", (req, res) => {
    res.send("Hola funciono")
});


//Envio "data" que lo importe del otro archivo js

app.get ("/", (req, res) => {
    res.send(date)
});