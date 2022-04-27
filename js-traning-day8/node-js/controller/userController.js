const db = require('../models');
const User = db.User;

exports.create = (req,res)=>{
    const user = {
        name: req.body.name,
        email: req.body.email
    }
   User.create(user)
   .then((user) => {
       res.send(user);
   }).catch((err) => {
    res.send(`Error: ${err.message}`);
   });

};

exports.findall = (req, res)=>{
   User.findAll()
     .then((data) => {
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
       res.send(data);
     })
     .catch(err => {
        res.send(`Error: ${err.message}`);
     });
};