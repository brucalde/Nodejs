const express = require("express");
const app = express();
const data = require("./data.js");
const utils = require("./utils.json");





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

app.get("/", (req, res) => {
     let info =data.productos[1]
     res.send(info)
});


// Peticion POST
// Este a comparacion de .GET( que da informacion), con POST vamos a recibir informacion

app.use(express.json());


app.post("./home", (req, res) => {
    let pedir = req.body ;
    console.log(pedir);
    res.send("recibido!");
});











//En caso que no tome o reconozca lo enviado, hay que sacarle las comillas al JSON 
//JSON.parse(archivo) para que lo tome