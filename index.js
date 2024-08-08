const express = require('express');
const app = express();

app.listen(3000, () => {
 console.log("Server running on port 3000");
});

app.get("/msg", (req, res, next) => {
    res.json({"message": "Verification successful"});
});

app.use(express.json()); // for parsing application/json

app.post("/msg", (req, res, next) => {
 const message = req.body.message;
 res.json({"receivedMessage": message});
});

class Message {
    constructor(content) {
      this.content = content;
    }
   
    getContent() {
      return this.content;
    }
}

app.post("/msg", (req, res, next) => {
    const newMessage = new Message(req.body.message);
    res.json({"receivedMessage": newMessage.getContent()});
});
   

   