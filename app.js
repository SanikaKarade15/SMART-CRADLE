const express = require('express');
const fs = require('fs');

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get('/', function (req, res) {
    res.render('login');
});

app.get('/dashboardd', function (req, res) {
    res.render('dashboardd');
});

app.post("/", function (req, res) {
    const username = req.body.username;
    const password = req.body.pass;
  
    if (username === "sanikakarade@gmail.com" && password === "et114") {
        res.redirect("/dashboardd");
    }else {
        res.send("You are not authorized to access this page!");
    }
});

app.post("/dashboard", function (req, res) {
    const hours = req.body.hours;
   // const seconds = hours * 3600;

    console.log(hours);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});