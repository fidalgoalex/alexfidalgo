const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.status(200).send({ messange: "Ola mundo estou funcionando"});
})

app.get('/ola', (req, res)=>{
    res.status(200).send({ messange: "Oi eu sou a rota ola"});
})

app.listen(3001, () =>{
    console.log('Api rodando na porta 3001');
})
