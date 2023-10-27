const dbPool = require('../db/pgClient');

const getAllPosts = async (req, res) => {
    try {
      const { rows } = await dbPool.query(
        'SELECT * FROM blogPost;'
      );
      res.send(rows);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: error.message });
    }
  };


  const addNewPost = async (req, res) => {
    try {
      const { title, date, author, article, imageurl, dining, adventures, shopping } = req.body;
      if (!title || !date || !author || !article || !imageurl || !dining || !adventures|| !shopping ) throw new Error('Missing data');
  
      const {
        rows: [post],
      } = await dbPool.query(
        'INSERT INTO blogPost ( title, date, author, article, imageurl, dining, adventures, shopping ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8 ) RETURNING *;',
        [ title, date, author, article, imageurl, dining, adventures, shopping ]
      );
  
      return res.status(201).json(post);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: error.message });
    }
  };

  module.exports = {
    getAllPosts,
    addNewPost
  }