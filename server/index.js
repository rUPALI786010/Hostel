const express = require('express');
const mongoose = require('mongoose');
const app = express();

const User = require('./models/users.models')

mongoose.connect('mongodb+srv://tanmay:t21022003@cluster0.3o59srj.mongodb.net/?retryWrites=true&w=majority')

app.get("/", (req, res) => {
    res.send("Hello World")
})
app.get("/home", (req, res) => {
    res.send("Home")
})

app.get('/api/login', async (req, res) => {
    try {
        const user = await User.findOne({
            email: req.query.email,
            password: req.query.password,
        })
        if (user) {
            res.json({
                status: "ok",
                message: "User Logged in",
                user: user.email,
                firstname: user.firstname,
                lastname: user.lastname
            })
        }
        else {
            res.json({
                status: "Error",
                message: "Invalid Credentials"
            })
        }
        console.log(res);
    }
    catch (err) {
        console.log("Log in error", err);
    }
})
app.post('/api/register', async (req, res) => {
    console.log(req.body);
    // try {
    //     const user = await User.create({
    //         firstname: req.body.firstname,
    //         lastname: req.body.lastname,
    //         email: req.body.email,
    //         mobile: req.body.mobilenumber,
    //         password: req.body.password
    //     })
    //     res.json({
    //         status: "ok",
    //         message: "User Logged in",
    //         user: user.email,
    //         firstname: user.firstname,
    //         lastname: user.lastname
    //     })
    // }
    // catch (err) {
    //     res.json({ status: "error", error: err })
    //     console.log("Error", err);
    // }
})

port = 5000;
app.listen(port, () => {
    console.log("Server Running on port: ", port)
})