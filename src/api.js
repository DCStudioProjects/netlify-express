const express = require("express");
const serverless = require("serverless-http");
const axios = require("axios");
const app = express();
const router = express.Router();
const querystring = require("querystring");

router.get("/", (req, res) => {
  const { data } = await axios.post(
    `http://rezkance.com/ajax/get_cdn_series/`,
    querystring.stringify(
      {
        id: 1154,
        translator_id: 8,
        season: 1,
        episode: 1,
        action: "get_stream",
      }
    )
  );
  res.json({
    data
  });
});

app.use(`/.netlify/functions/api`, router);

module.exports = app;
module.exports.handler = serverless(app);
