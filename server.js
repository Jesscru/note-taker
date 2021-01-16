// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
const fs = require('fs');
var db = require("./db/db.json");


// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
// =============================================================

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.get("/notes", function(req, res) {
  res.sendFile(path.join(__dirname, "/public/notes.html"));
});



// Displays all saved notes
app.get("/api/notes", function(req, res) {
  res.sendFile(path.join(__dirname, "./db/db.json"));
});


// gives each newNote a unique id
let noteID = db.length;

// Create new notes - takes in JSON input
app.post("/api/notes", function(req, res) {
  let newNote = req.body;
  let noteID = (db.length).toString();
  newNote.id = noteID;
  db.push(newNote);

  fs.writeFileSync("./db/db.json", JSON.stringify(db));
  console.log("New note created!");
  res.json(true);
});

// Deletes requested note via an id given to the note 
app.delete("/api/notes/:id", function(req, res) {
  let noteID = req.params.id;
  let newID = 0;
  db.splice(noteID, 1)
  for (thisNote of db) {
      thisNote.id = newID.toString();
      newID++;
    };
    console.log('Note deleted.')

    
    fs.writeFileSync("./db/db.json", JSON.stringify(db));
    res.json(true);
});


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
