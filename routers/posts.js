const express = require("express");
const post = express.Router();
const postController = require("../controllers/postcontroller.js");
// ROUT LISTA (INDEX)
post.get("", postController.index);
// ROUT PER I DETTAGLI DEL BLOG(SHOW)
post.get("/:id", postController.show);

//ROUT PER LA CREAZIONE DEL POST(CREATE)
post.post("", postController.create);

//ROUT PER L'UPDATE DEL POST(UPDATE)
post.put("/:id", postController.update);

//ROUT PER LA ELIMINAZIONE DEL POST(DESTROY)
post.delete("/:id", postController.destroy);

module.exports = post;
