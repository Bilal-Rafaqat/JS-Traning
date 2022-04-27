const db = require('../models');
const Channel = db.Channel;

let emitter = require('../eventListener/listener')
let myEmitter = emitter.myEmitter

exports.create = (req,res)=>{
    const channel = {
        name: req.body.name,
        user_id: req.body.user_id
    }
   Channel.create(channel)
   .then((channel) => {
       myEmitter.emit("new channel",channel);
       res.send(channel);
   }).catch((err) => {
    res.send(`Error: ${err.message}`);
   });

};

exports.findall = (req, res)=>{
   Channel.findAll()
     .then((data) => {
       myEmitter.emit("all channels",data);
        res.send(data);
      })
     .catch((err) => {
       res.send(`Error: ${err.message}`);
     });
};

exports.findone = (req, res)=>{
    const id = req.params.id;
    Channel.findByPk(id) 
     .then(data => {
      myEmitter.emit("find channel",data);
       res.send(data);
     })
     .catch(err => {
        res.send(`Error: ${err.message}`);
     });
};
