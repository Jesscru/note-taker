// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/notes", function(req, res) {
  res.sendFile(path.join(__dirname, "notes.html"));
});



// Displays all characters
app.get("/api/characters", function(req, res) {
  
});

// Displays all saved notes
app.get("/api/notes", function(req, res) {
  
});

// Create new notes - takes in JSON input
app.post("/api/notes", function(req, res) {

});

// Deletes requested note via an id given to the note 
app.delete("/api/notes/:id", function(req, res) {

});


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});