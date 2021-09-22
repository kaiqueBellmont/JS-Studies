//Objetos aninhados :
const hero = {
    name: 'Batman',
    realName: 'Bruce Wayne',
    address: {
        city: 'Gotham'
    }
};

// Object destructuring:
function obj({ body }){
    if (body) {
        console.log(Object.keys(body))
        //salvar isso
        console.log( Object.keys(body) instanceof Array)
    }

}
obj({body:hero})
