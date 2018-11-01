require('dotenv').config(); // set env variables as the first thing in this app
const app = require('./app');

const port = 5000;
app.listen(port, () => {
  console.log(`API server running on port ${port}`);
});
