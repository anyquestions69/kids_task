const express= require('express')
const { exec, spawn } = require('node:child_process');
const app = express()
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
app.listen(3000)