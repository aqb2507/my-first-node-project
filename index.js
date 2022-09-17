const cors = require('cors')
const bdparser = require('body-parser')

const exp = require('express')      //importing express

const mon = require('mongoose')     //importing mongoose

const url = "mongodb://localhost/catalog"
mon.connect(url, {useNewUrlParser:true})    //establishing a conn to DB
//useNewUrlParser -> to avoid warnings

const con = mon.connection      //var to access the established conn
const app = exp()       //var to access exprss

con.on('open', () => {
    console.log("DB connected..\nWelcome!!")
})

app.use(exp.json())     //data is in json format
app.use(cors())
app.use(bdparser.urlencoded({ extended: true }))

const rt = require("./Controller/route")
app.use("/book",rt)

app.listen(7000, () => {       //server address
    console.log("Server connected..")
})

console.log("My first FSD project..")