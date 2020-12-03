const app = require("express");
const fs = require('fs');





// reads db.json file 
app.get("/api/notes", function(req, res) {
    db = json.parse(fs.readFileSync("../db/db.json", "utf-8"));
    return res.json(db);
});
  
// saves on the request body, writes to json file, sends to client
app.post("/api/notes", function(req, res) {
    var newNote = req.body;
    fs.writeFileSync("../db/db.json", newNote)
    // need to return the new note to the client?

    characters.push(newCharacter);
  
    res.json(newCharacter);
  });