const { getUsers, getUserById } = require('./teste');
const data = require('../mock_data.json');
console.log(getUsers);

for (const item of data) {
    if(item['id'] == 10){
        console.log(item);
    }   
};