const express = require('express');
const path = require('path');



const app = express();

app.use(express.static('./navbar'));

/*
the static is not needed since page is in the doc
app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./navbar/index.html'))
});*/

app.all('*',(req,res)=>{
    res.status(404).send('Resource not found please go back to home page');
});


app.listen(5000, ()=>{
    console.log('listening on port 500....');
})
//app.get
//app.post
//app.put
//app.delete
//app.all
//app.more