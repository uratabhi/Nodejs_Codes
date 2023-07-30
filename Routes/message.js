const express = require('express');
const data = require('./data');
const fs = require('fs');

const router = express.Router();

router.get("/", (req, res)=>{
    fs.readFile("userName.txt", (err, data)=>{
         if(err){
             console.log(err);
             data = "No chat exists";
         }
         res.send(`${data}<form action="/" onsubmit = "document.getElementById('username').value=localStorage.getItem('username')"
         method = "POST">
         <input id="message" name="message" type="text" placeholder="message">
         <input type="hidden" name="username" id="username">
         <button type="submit">send</button>
         </form`)
    })
})
router.post("/", (req, res)=>{
    console.log(req.body.username);
    console.log(req.body.message);
    fs.writeFile("userName.txt", `${req.body.username}: ${req.body.message}`, {flag : 'a'}, (err)=>{
        err ? console.log(err) : res.redirect("/");
    });
})




module.exports = router;