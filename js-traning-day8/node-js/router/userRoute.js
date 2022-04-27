module.exports = app =>{
    const user = require('../controller/userController');
    const router = require("express").Router();

    router.post('/create', user.create);
    router.get('/users', user.findall);
    router.get('/user/:id', user.findone);

    app.use('/api/vidly', router);

}