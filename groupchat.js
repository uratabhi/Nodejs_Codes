const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');



app.use(bodyParser.urlencoded({extended : false}));


app.get('/login', (req, res)=>{
    res.send('<form onsubmit="localStorage.setItem(`username`, document.getElementById(`username`).value)"action="/" method="POST"><input id="username" type="text" name="username" placeholder="UserName"><button type="submit">login</button></form>')
})

app.get("/", (req, res)=>{
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
app.post("/", (req, res)=>{
    console.log(req.body.username);
    console.log(req.body.message);
    fs.writeFile("userName.txt", `${req.body.username}: ${req.body.message}`, {flag : 'a'}, (err)=>{
        err ? console.log(err) : res.redirect("/");
    });
})

app.listen(3000);