import express from "express";
import path from "node:path"

const app = express();
const port = 3000;

app.use(express.static(path.join(import.meta.dirname, "public")));


app.get("/", (req, res) => {
	res.render("home.ejs", siteOwner);
});


// Write your code here:
app.set("view engine", "ejs");
app.set("views", path.join(import.meta.dirname, "views"));

const siteOwner = {
	username: "Adrian"
};

app.get("/about", (req, res) => {
	res.render("about.ejs");
});

app.get("/contact", (req, res) => {
	res.render("contact.ejs");
});



app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});