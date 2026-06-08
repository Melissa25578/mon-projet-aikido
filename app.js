const express = require("express");
const lodash = require("lodash");

const app = express();

app.get("/", (req, res) => {
    let userInput = req.query.name;

    // utilisation unsafe (Aikido peut détecter risques)
    let message = lodash.template("Hello <%= name %>")({ name: userInput });

    res.send(message);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});