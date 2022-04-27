const db = require('../models');
const Channel = db.Channel;

exports.create = (req,res)=>{
    const channel = {
        name: req.body.name,
        user_id: req.body.user_id
    }
   Channel.create(channel)
   .then((channel) => {
       res.send(channel);
   }).catch((err) => {
    res.send(`Error: ${err.message}`);
   });

};

exports.findall = (req, res)=>{
   Channel.findAll()
     .then((data) => {
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
       res.send(data);
     })
     .catch(err => {
        res.send(`Error: ${err.message}`);
     });
};
