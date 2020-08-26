const express = require("express");
const app = express();

// for css and js, use public folder
app.use(express.static("src/public"));

// put html in views
app.get("/", (req, res) => {
res.sendFile(__dirname + "/views/index.html");
});

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/views/404.html");
});
        
const listener = app.listen(process.env.PORT, () => { 
console.log("Your app is listening on port " + listener.address().port); 
}); 
