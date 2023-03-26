const express = require('express');
let axios = require('axios');
var app = express();

// Convert incoming requests and outgoing responses to json
app.use(express.json());

app.post('/', async function (req, res, next) {
  // Store array of developers from user request
  const devs = req.body.developers;

  // Get each developers data 
  const results = devs.map(d => axios.get(`https://api.github.com/users/${d}`).catch(err => console.log(err)));

  try {
    // Await all get requests to finish
    const resp = await axios.all(results)

    // Build response to user
    const out = resp.map(r => ({
      name: r.data.name,
      bio: r.data.bio
    }));

    // Return json
    return res.json(out);
  } catch {
    next(err);
  }
});

// export app
module.exports = app;
