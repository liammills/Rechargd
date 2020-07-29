// Allows use of environment variables
require('dotenv').config()

const express = require("express");
const bodyParser = require('body-parser');
const path = require("path");
const app = express();

app.use(bodyParser.json());
app.use(express.static("public"));


// Cloudant
var Cloudant = require('@cloudant/cloudant');

var cloudant = new Cloudant({
    url: process.env.CLOUDANT_URL,
    plugins: {
        iamauth: {
            iamApiKey: process.env.CLOUDANT_API_KEY
        }
    }
});

const users = cloudant.use("users");

app.post("/api/users", (req, res) => {
    let email = req.body.email;
    let token = req.body.token;

    users.get(email).then((body) => {
        res.json(body);
    }).catch(err => {
        // Called if first-time user
        users.insert({ _id: email, email: email, services: [] }).then(body => {
            users.get(email).then((body) => {
                res.json(body);
            })
        }).catch(err => {
            res.json({});
        });
    });
});

app.post("/api/update_user", (req, res) => {
    let newBusiness = req.body.newBusiness;

    users.insert(newBusiness).then((body) => {
        users.get(newBusiness.email).then((body) => {
            res.json(body);
        }).catch(err => {
            res.json(newBusiness);
        })
    }).catch(err => console.log(err));
});

app.post("/api/delete_user", (req, res) => {
    let email = req.body.email;
    let token = req.body.token;

    users.get(email).then((body) => {
        users.destroy(email, body._rev);
    }).catch(err => {
        console.log(err);
    });
});


// Main pages
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

const port = process.env.PORT || 8000;

app.listen(port);

console.log("Listening on port " + port);