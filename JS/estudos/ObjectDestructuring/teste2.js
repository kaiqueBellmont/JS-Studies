const hero = {
    name: '',
    realName: '',
    tel: ''
};

const heroi = {
    name: 'kaique'
};

const prop = 'name';
const { [prop]: name } = hero;

const hasDifference = ({ body, required }) =>
    required.filter(field => !Object.keys(body).includes(field))

console.log(hasDifference({body:heroi, required:Object.keys(hero)}))


