import  express  from "express";

const app = express();

app.get('/', (req, res)=>{
    res.send("This is awesome")
})

app.listen(3000, (req, res)=>{
    console.log("port is running on 3000 ")
})