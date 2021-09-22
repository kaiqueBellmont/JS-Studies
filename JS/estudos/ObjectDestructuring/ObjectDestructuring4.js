
const hero = Object

const heroi = {
    name: 'Batman',
    realName: 'Bruce Wayne',
    tel: ''
};


const hasDifference = ({ body, required }) =>
    required.filter(field => !Object.keys(body).includes(field))

// passar um como array e um como obj
// passar um obj.keys e o outro passar um obj normal
//filter e o metodo do array