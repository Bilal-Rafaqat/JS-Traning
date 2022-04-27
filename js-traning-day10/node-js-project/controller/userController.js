const db = require('../models');
const User = db.User;
let emitter = require('../eventListener/listener')
let myEmitter = emitter.myEmitter

exports.create = (req,res)=>{
    const user = {
        name: req.body.name,
        email: req.body.email
    }
   User.create(user)
   .then((user) => {
    myEmitter.emit("new user",user);
       res.send(user);
   }).catch((err) => {
    res.send(`Error: ${err.message}`);
   });

};

exports.findall = (req, res)=>{
   User.findAll()
     .then((data) => {
      myEmitter.emit("total users",data);
        res.send(data);
      })
     .catch((err) => {
       res.send(`Error: ${err.message}`);
     });
    
};

exports.findone = (req, res)=>{
    const id = req.params.id;
    User.findByPk(id) 
     .then(data => {
      myEmitter.emit("find user",data);
       res.send(data);
     })
     .catch(err => {
        res.send(`Error: ${err.message}`);
     });
};
