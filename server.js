const express = require("express");
const path = require("path");
const favicon = require('serve-favicon')
const logger = require("morgan");
const fs = require("fs");
const PORT = process.env.PORT || 5000;
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(logger("dev"));

app.use(favicon(path.join(__dirname, './build', 'favicon.ico')))

app.use(express.static("./build"))

app.get('/*.(txt|map|json|svg|css|js|jpg|jpeg|png|gif)', (req, res) => {
    const filePath = path.resolve(__dirname, "./build" + req.path);
    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
            return console.log(err);
        }

        res.send(data);
    });
})

app.get("/*", (req, res) => {
    const filePath = path.resolve(__dirname, "./build", "index.html");
    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
            return console.log(err);
        }

        data = data
            .replace(/Title/g, "Tittle")
            .replace(/Description/g, "Description");
        res.send(data);
    });
});


app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})
