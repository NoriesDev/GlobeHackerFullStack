require("dotenv").config();
const express = require("express");
const server = express();
const port = process.env.PORT || 8000;
const dbPool = require("./db/pgClient");
const { getAllPosts, addNewPost } = require("./controllers/blogPostControll");
const cors = require("cors");

// Use CORS middleware before other middlewares and routes
server.use(cors('https://globehackersfrontend-alx6.onrender.com/', 'https://globehackersfrontend-alx6.onrender.com/destinations', 'https://globehackersfrontend-alx6.onrender.com/features'));

server.use(express.json());

server.get("/", (req, res) =>
  res.send(`<p>server is listening on port ${port}</p>`)
);

server.route("/destinations").get(getAllPosts);
server.route("/home").get(getAllPosts);

server
  .route("/features")
  .post(addNewPost, (req, res) =>
  res.send(`blogPost was added to DataBase`));


server.route("/About").get((req, res) => {});

server.listen(port, () => console.log(`Server up on port ${port}`));
