const express = require('express');
const app = express();
const chalk = require('chalk');

const {getUsers, getUserById, putUserById} = require('./src/teste');

app.get('/', (req, res)=>{
    res.send('Olá, este é o endereço raiz');
});

app.get('/api/v1/users', async (req, res) =>{
    res.json(await getUsers());
})

app.get('/api/v1/users/:id', async (req, res) => {
    res.json(await getUserById(req.params.id));
});

app.put('/api/v1/users/:id', async(req, res) => {
    res.json("Isso é um put!");
    res.json(await putUserById(req.params.id));
    
})

app.listen(3000, ()=>{
    console.log('Listening on port '+ chalk.green('3000'));
});
