const express = require('express');
const cors = require('cors')
const app = express();
const port = 8000;


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./server/routes/player.routes')(app);
require('./server/config/mongoose.config');
app.listen(port, () => console.log(`Listening on port: ${port}`) );