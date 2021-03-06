const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const db = require('../database/index');
const path = require('path');
const expressStaticGzip = require('express-static-gzip');

const port = 4001;

const app = express();
// app.use(express.static('./dist'));
app.use('/', expressStaticGzip(('./dist'), {
  enableBrotli: true,
   orderPreference: ['br', 'gz'],
   setHeaders: function (res, path) {
      res.setHeader("Cache-Control", "dist, max-age=31536000");
   }
}))
app.use(express.json());
app.use(cors());

// get all hashtags
app.get('/hashtags', async(req, res) => {
  try {
    const hashtags = await db.getHashtags();
    res.status(200).send({
      success: true,
      count: hashtags.length,
      data: hashtags
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      success: false,
      msg: error
    });
  }
});

app.get('/hashtags/:id', async(req, res) => {
  try {
    const { id } = req.params;

    const hashtag = await db.getHashTag(id);

    if ( !hashtag ) {
      res.status(400).json({
        success: false,
        msg: `no song with id ${req.params.id}`,
        error: error
      });
    }

    res.status(200).send({
      success: true,
      data: hashtag[0].hashtags
    });
  } catch (error) {
    // console.error(error);
    res.status(400).json({
      success: false,
      msg: `no song with id ${req.params.id}`,
      error: error
    });
  }
});

app.get('/:current', (req, res) => {
  console.log('hit');
  res.sendFile(path.join(__dirname,'../dist/index.html'));
});

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});

module.exports = app;