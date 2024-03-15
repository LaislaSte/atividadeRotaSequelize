const express = require("express");
const expsHandle = require("express-handlebars");
const bodyParser = require("body-parser");
const agendamentos = require("./bd");

const app = express();

app.engine('hbs', expsHandle.engine({ extname: '.hbs', defaultLayout: "main" }));
app.set('view engine', 'hbs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("Primeira pagina")
});

app.get('cadastrar/:name/:address/:cep/:date/:phone/:observation', (req, res) =>{
    agendamentos.create({
        name: req.params.name,
        address: req.params.address,
        cep: req.params.cep,
        date: req.params.date,
        phone: req.params.phone,
        observation: req.params.observation
    }).then(() => {
        res.send('Dados cadastrados!')
    }).catch(err => {
        console.log(err)
    })
})

app.listen(8081, () => {
    console.log("Server running at port 8081");
})