const express= require('express')
var basicAuth = require('basic-auth');
const { exec, spawn } = require('node:child_process');
var bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.urlencoded({ extended: true }))

var auth = function(username, password) {
    return function(req, res, next) {
      var user = basicAuth(req);
  
      if (!user || user.name !== username || user.pass !== password) {
        res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
        return res.send(401);
      }
  
      next();
    };
  };
app.get('/',(req,res)=>{
    const url = req.query.url
    exec('curl '+url, (err, stdout, stderr) => {
        if (err) {
          console.error(err);
          return res.send(stderr)
        }
        console.log(stdout);
        return res.send(stdout)
      });
})
app.post('/issue', (req,res)=>{
    return res.send(JSON.stringify(req.body))
})
app.get('/admin', auth('admin', 'iowe3-03ndin2in13'), (req,res)=>{
    return res.send('admin')
})
app.listen(3000)