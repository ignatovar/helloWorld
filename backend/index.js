const express = require('express')
const app = express();

app.get('/', (req, res) => {
    res.json({key:"value"});
});

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});

