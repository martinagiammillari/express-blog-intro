// Creiamo il progetto base con una rotta / che ritorna un testo semplice con scritto ”Server del mio blog”
// Creiamo un array dove inserire una lista di almeno 5 post, per ognuno indicare titolo, contenuto, immagine e tags (tags è un array di stringhe)
// Creiamo poi una rotta /bacheca che restituisca un oggetto json con la lista dei post e il conteggio, partendo da un array.
// Configuriamo gli asset statici sull’applicazione in modo che si possano visualizzare le immagini associate ad ogni post.
// Testare su postman

import express from "express";
import posts from "./posts.js";


const app = express ();
const port = 3600;
app.use(express.static("public"));


app.get("/", (req, res)=>{
res.send("Server del mio blog");
})



app.get("/bacheca", (req, res) => {
  res.json({
    conteggio: posts.length,
    posts: posts
  });
});



app.listen(port, function(){
    console.log("il server è in ascolto sula porta 3600");
})