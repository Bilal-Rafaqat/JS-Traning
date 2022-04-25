const express = require('express')
const app = express()
const port = 3000

const db =require('./models');
db.sequelize.sync();

app.use(express.json());
app.get('/', (req, res) => res.send('Welcome to vidly App'));
require('./router/channelRouter')(app)

app.listen(port, () => console.log(`Vidly-App listening on port ${port}!`))