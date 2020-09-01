const express = require('express');
var cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

const userApi = require('./routes/users');

app.use(cors())
app.get('/', (req, res) => {
  let userInfo = req.header("user-agent");
  res.send(`New UserInfo: ${userInfo}`);
});

userApi(app);

app.listen(port, err => {
  if (err) {
    console.error('Error:', err)
    return
  }
  console.log(`Listen http://localhost:${port}`)
})