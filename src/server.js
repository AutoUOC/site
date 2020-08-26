const express = require("express");
const app = express();

// for css and js, use public folder
app.use(express.static("public"));

// put html in views
app.get("/", (req, res) => {
res.sendFile(__dirname + "/views/index.html");
});

const port = process.env.PORT || 5000;
app.listen(port, () => { 
console.log("Your app is listening on port " + port); 
}); 
