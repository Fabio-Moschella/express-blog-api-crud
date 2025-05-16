const express = require("express");
const app = express();
const port = 3000;
const postRouter = require("./routers/posts.js");
const errorHandler = require("./middleware/errorhandler.js");

//STATIC ASSEST
app.use(express.static("pubblic"));
app.use(express.json());
//ROUTERS
app.use("/post", postRouter);

//MIDDLEWARE
app.use(errorHandler);

// IL SERVER E IN ASCOLTO SULLA PORTA 3000
app.listen(port, () => {
  console.log("il server è in ascolto sulla porta " + port);
});
