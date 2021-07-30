const express = require('express');
const app = express();
const chalk = require('chalk');
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const {getUsers, getUserById, putUserById, createUser} = require('./src/teste');

app.get('/', (req, res) => {
    res.send('Olá, este é o endereço raiz');
});

app.get('/api/v1/users', async (req, res) => {
    res.json(await getUsers());
})

app.get('/api/v1/users/:id', async (req, res) => {
    res.json(await getUserById(req.params.id));
});

app.put('/api/v1/users/:id', async (req, res) => {
    res.json(await putUserById(req.params.id, req.body))
})

app.post('/api/v1/users', async (req, res) => {
    res.json(await createUser(req.body));
});

app.listen(4010, () => {
    console.log('Listening on port ' + chalk.green('4010'));
});
