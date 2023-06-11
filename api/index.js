'use strict';

const
  express = require('express'),
  cors = require('cors'),
  news = require('./data/news.json');

const app = express();
app.use(cors());

const getNewsByTitle = query => {
  return news.articles.filter(item => {
    const patt = new RegExp(query, 'gi');
    return patt.test(item.title);
  });
}

app.get('/v1/news', (req, res) => {
  if (!req.query.q)
    return res.json(news);

  const foundResults = getNewsByTitle(req.query.q);

  return res.json({
    articles: foundResults
  });
});

let server = app.listen(8000, '0.0.0.0', () => {
  console.log(`API listening on http://${server.address().address}:${server.address().port}`);
});