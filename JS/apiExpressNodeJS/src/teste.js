const {request} = require('express');
const data = require('../mock_data.json');
const fs = require("fs");
const { error } = require('console');
const { body, validationResult } = require('express-validator');
const { on } = require('events');
const { json } = require('body-parser');



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
        let completeData = 
            [userData.id = data.length + 1 + "",
            userData.first_name = userData.first_name ? userData.first_name : null,
            userData.last_name = userData.last_name ? userData.last_name : null,
            userData.email = userData.email ? userData.email : null,
            userData.gender = userData.gender ? userData.gender : null,
            userData.ip_address = userData.ip_address ? userData.ip_address : null,]
            json.completeData
        resolve(completeData);
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
