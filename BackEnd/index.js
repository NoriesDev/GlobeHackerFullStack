require("dotenv").config();
const express = require("express");
const server = express();
const port = process.env.PORT || 8000;
const dbPool = require("./db/pgClient");
const { getAllPosts, addNewPost } = require("./controllers/blogPostControll");
const cors = require("cors");

// Use CORS middleware before other middlewares and routes
server.use(cors());

server.use(express.json());

server.get("/", (req, res) =>
  res.send(`<p>server is listening on port ${port}</p>`)
);

server.route("/destinations").get(getAllPosts).post(addNewPost);

server.route("/Home").get((req, res) => {});

server
  .route("/Features")
  .get((req, res) => {})
  .post((req, res) => {});

server.route("/About").get((req, res) => {});

server.listen(port, () => console.log(`Server up on port ${port}`));
