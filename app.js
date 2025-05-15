const express = require("express");
const app = express();
const port = 3000;
const postRouter = require("./routers/posts.js");

//STATIC ASSEST
app.use(express.static("pubblic"));
app.use(express.json());
//ROUTERS
app.use("/post", postRouter);

// IL SERVER E IN ASCOLTO SULLA PORTA 3000
app.listen(port, () => {
  console.log("il server è in ascolto sulla porta" + port);
});
