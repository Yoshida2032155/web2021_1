const express = require("express");
const app = express();

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('test2.db');

app.set('view engine', 'ejs');
app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  const message = " ";
    let sql = "select id, name, offense, defense, search, control from character;";
    //console.log(sql);    // ②
    db.serialize( () => {
        db.all(sql, (error, data) => {
            if( error ) {
                res.render('home', {mes:"エラーです"});
            }
            //console.log(data);    // ③
            res.render('selectVALO', {data:data});
        })
    })
});

app.get("/001", (req, res) => {
    let sql = 'insert into character ("chracter_id") values ('+ req.query.pp +','+ req.query.pp2 +');';
  db.serialize( () => {
        db.all(sql, (error, data) => {
            if( error ) {
                res.render('home', {mes:"エラーです"});
            }
            //console.log(data);    // ③
            res.render('selectVALO', {data:data});
        })
    })
})

app.use(function(req, res, next) {
  res.status(404).send('ページが見つかりません');
});

app.listen(80, () => console.log("Example app listening on port 80!"));