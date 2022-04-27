const express = require('express')
const app = express()
const port = 4000
const schedule = require('./cronJob/scheduler')
const time = schedule.time;

const swaggerDoc=require('swagger-jsdoc');
const swaggerUi=require('swagger-ui-express');
const options ={        
    definition: {
      //  swagger: "2.0",
        openapi: "3.0.0",
        info:{
            title:"Vidly Api with Node JS",
            version:"1.0.0",
            description: "A simple User channel Library API"
        },
        servers:[
            {url:`http://localhost:4000/`}
          ]
    },
    apis:['app.js']
}
const swaggerSpec = swaggerDoc(options);
app.use('/api-doc', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

/**
 * @swagger
 * /:
 *   get:
 *     summary: To check get method
 *     description: This api is to check get method working or not
 *     responses:
 *       '200':
 *         description: Get method working
 *         
 */
/**
 * @swagger
 * /api/vidly/users:
 *   get:
 *     summary: To get all users
 *     description: This api is to get user by ID
 *     responses:
 *       '200':
 *         description: Successfully Fetched Users
 *         
 */
/**
 * @swagger
 * /api/vidly/user/{userid}:
 *   get:
 *     summary: Returns User by ID
 *     description: This api is to get User by ID
 *     parameters:
 *       - in: path
 *         name: userid
 *         required: true
 *         description: Numeric Id
 *         schema:
 *           type: integer
 *           format: int64
 *           minimum: 1
 *     responses:
 *       '200':
 *         description: ok
 *         
 */
/**
 * @swagger
 * /api/vidly/create:
 *   post:
 *     summary: Creates a User 
 *     description: This api is to Create new User
 *     requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       '200':
 *         description: created
 *         
 */
const db =require('./models');
db.sequelize.sync();

app.use(express.json());
app.get('/', (req, res) => res.send('Welcome to vidly App'));
app.get('/cron', (req, res) => {
  res.send('Job expire in 60 sec Watch Console to keep track of time');
  time.start();
});

require('./router/userRoute')(app)
require('./router/channelRoute')(app)

app.listen(port, () => console.log(`Vidly-App listening on port ${port}!`))
