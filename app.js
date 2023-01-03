const express = require("express");
const cors = require("cors")
// const axios = require("axios")
const app = express();
app.use(cors())
app.use(express.json());
app.get('/', (req, res) => {
    res.send("GET Request Called")
  })
app.listen(8001,()=>{
    console.log("app is running on 8001" );
})