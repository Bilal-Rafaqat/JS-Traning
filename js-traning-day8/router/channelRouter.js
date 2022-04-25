module.exports = app =>{
    const channel = require('../controller/channelController');
    const router = require("express").Router();
    
    router.post('/channel', channel.create);
    router.get('/channels', channel.findall);
    router.get('/channel/:id', channel.findone);

    app.use('/api/vidly', router);

}