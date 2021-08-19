/*
Exemplos de request:
    O servićo espera o que para executar
    * Existe filtros ou campos não obrigatório?
    * São dados primários para exeućão do GET?
        ID, Login, senha, etc
    
    Exemplo: Login
        Espera:
            Login e senha
        Exemplo de servićo:
            login(login, senha){...}
        Exemplo de requisićão:
            URL: /login
            BODY: {id_platform: .., login: .., senha: ..}
        Exemplo de controller:
            login_service.login(req.body.login, req.body.senha)


    Exemplo: Listar usuário
        Espera:
            filtros, página e limite
        Exemplo de servićo:
            listUsers(page, limit, filters){...}
        Exemplo de requisićão:
            URL: /login
            query: {page: .., limit: .., filters: {}}
        Exemplo de controller:
            login_service.login(req.body.page, req.body.limit, page.body.filters)


*/



const {request} = require('express');
const data = require('../mock_data.json');
const fs = require("fs");
const { error } = require('console');
const { body, validationResult, check } = require('express-validator');
const { on } = require('events');
const e = require('express');
const chalk = require('chalk');


const campoVazio = "ERRO: Este campo deve ser preenchido"

async function getUsersV2(page = null, limit = null) {
    page = !page || page < 1 ? 1 : page
    limit = limit > 10 ? 10 : limit
    
    return new Promise((resolve, reject) => {
        resolve(data);
    })
}

async function getUsers() {
    return new Promise((resolve, reject) => {
        resolve(data);
    })
}

async function getUserById(id_user) {
    return new Promise((resolve, reject) => {
        for (const item of data) {
            if (item['id'] === id_user) {
                resolve(item);
            }
        }
    })
}

async function createUser(userData) {
    return new Promise((resolve, reject) => {
        userData.id = data.length + 1 + ""
        userData.first_name = userData.first_name ? userData.first_name : campoVazio
        userData.last_name = userData.last_name ? userData.last_name : campoVazio
        userData.email = userData.email ? userData.email : campoVazio
        userData.gender = userData.gender ? userData.gender : campoVazio
        userData.ip_address = userData.ip_address ? userData.ip_address : campoVazio

        

        console.log(Object.values(userData))
        // for(value of Object.values(userData)){
        //     if(value == campoVazio){
        //         break
        //     }
        // }console.log(userData)
        
        console.log(Object(userData))
        
        console.log(userData)
        resolve(userData);
        fs.writeFileSync('mock_data.json', JSON.stringify(data, null, "\t"));
    })
}

async function putUserById(id_user, userData) {
    return new Promise((resolve, reject) => {
        let updatedUserData;
        for (const item of data) {
            if (item['id'] === id_user) {
                item.first_name = userData.first_name ? userData.first_name : item.first_name
                item.last_name = userData.last_name ? userData.last_name : item.last_name
                item.email = userData.email ? userData.email : item.email
                item.gender = userData.gender ? userData.gender : item.gender
                item.ip_address = userData.ip_address ? userData.ip_address : item.ip_address
                console.log(item)
                updatedUserData = item
                break
            }
        }

        fs.writeFileSync('mock_data.json', JSON.stringify(data, null, "\t"));
        resolve(updatedUserData)
    })
}

module.exports = {getUsers, getUserById, putUserById, createUser}
// criar uma outra função getuser
