const express = require("express");
const post = express.Router();
const postController = require("../controllers/postcontroller.js");

post.get("", postController.index);
// ROUT PER I DETTAGLI DEL BLOG
post.get("/:id", postController.show);

//ROUT PER LA CREAZIONE DEL POST
post.post("", postController.create);

//ROUT PER L'UPDATE DEL POST
post.put("/:id", postController.update);

//ROUT PER LA ELIMINAZIONE DEL POST
post.delete("/:id", postController.destroy);

module.exports = post;
