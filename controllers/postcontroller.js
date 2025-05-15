const blogPost = require("../data/blogPosts.js");

// INDEX

const index = (req, res) => {
  res.json({
    description: "Lettura della lista dei post",
    data: blogPost,
  });
};

//SHOW

const show = (req, res) => {
  const id = parseInt(req.params.id);
  const post = blogPost.find((currentPost) => currentPost.id === id);
  console.log(post);

  // CHECK
  if (!post) {
    res.status(404);
    req.json({
      error: 404,
      message: "post not found",
    });
    return;
  }
  res.json({
    description: "Lettura del dettaglio dei post" + id,
    data: post,
  });
};

// STORE

const store = (req, res) => {
  res.json("Creazione del post");
};

// UPDATE

const update = (req, res) => {
  const id = req.params.id;
  res.json("Modifica totale del post" + id);
};

//DESTROY

const destroy = (req, res) => {
  const id = parseInt(req.params.id);

  const post = blogPost.find((currentPost) => currentPost.id === id);
  //CHECK POST ESISTENTE
  const postIndex = blogPost.indexOf(post);
  console.log(postIndex);
  blogPost.splice(postIndex, 1);
  console.log("Lista aggiornata:", blogPost);
  //CHECK
  if (!post) {
    res.status(404);
    req.json({
      error: 404,
      message: "post inesistente",
    });
    return;
  }

  res.status(204).send();
  const tags = req.query.tags;
  // console.log(tags);
};

module.exports = { index, show, store, update, destroy };
