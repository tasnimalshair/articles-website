//  to controll ur website

const express = require("express");
const app = express();
const port = 5000;
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));
// HELMET to host the app
const helmet = require("helmet");
app.use(helmet());


// for auto refresh
const path = require("path");
const livereload = require("livereload");
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, 'public'));


const connectLivereload = require("connect-livereload");
app.use(connectLivereload());

liveReloadServer.server.once("connection", () => {
    setTimeout(() => {
        liveReloadServer.refresh("/");
    }, 100);
});


//Mongoose
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://tasnim:c4a@cluster0.a0its9l.mongodb.net/all-data?retryWrites=true&w=majority")
    .then(result => {
        app.listen(process.env.PORT || port, () => {
            console.log(`Example app listening at http://localhost:${port}`);
        });
    })
    .catch(err => {
        console.log(err);
    });

app.get("/", (req, res) => {
    res.redirect("/all-articles");
});


const allArticlesRouter = require('./routers/all-articles');
app.use('/all-articles', allArticlesRouter)



app.get("/add-new-article", (req, res) => {
    res.render("add-new-article", { myTitle: 'create new article' })
});



//  404 
app.use((req, res) => {
    res.status(404).send("Sorry can't find that!");
});