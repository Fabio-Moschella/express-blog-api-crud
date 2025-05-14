const blogPost = require("../data/blogPosts.js");

const index = (req, res) => {
  res.json({
    description: "Lettura della lista dei post",
    data: blogPost,
  });
};
const show = (req, res) => {
  const id = parseInt(req.params.id);
  const post = blogPost.find((currentPost) => currentPost.id === id);
  console.log(post);
  res.json({
    description: "Lettura del dettaglio dei post" + id,
    data: post,
  });
};
const create = (req, res) => {
  res.json("Creazione del post");
};

const update = (req, res) => {
  const id = req.params.id;
  res.json("Modifica totale del post" + id);
};

const destroy = (req, res) => {
  const id = req.params.id;
  res.json("Eliminazione del post" + id);
};

module.exports = { index, show, create, update, destroy };
