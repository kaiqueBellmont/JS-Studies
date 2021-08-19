const express = require('express');
const app = express();
const chalk = require('chalk');
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const {getUsers, getUserById, putUserById, createUser} = require('./src/teste');
const {login, logout, recovery_password, sing_up} = require('./src/services/auth');

app.get('/', (req, res) => {
    res.send('Olá, este é o local host');
});

app.post('/api/v1/login', async (req, res) => {
    res.json(await login(req.body.username, req.body.pass));
})

app.post('/api/v1/sing_up', async (req, res) => {
    res.json(await login(req.body));
})

app.get('/api/v2/users', async (req, res) => {
    res.json(await getUsersV2(req.query.page, req.query.limit, req.query.filters));
})

app.get('/api/v1/platform/:id_platform/users/:id_user', async (req, res) => {
    res.json(await getUserById(req.params.id_platform, req.params.id_user));
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

app.listen(3000, () => {
    console.log('Listening on port ' + chalk.green('3000'));
});
