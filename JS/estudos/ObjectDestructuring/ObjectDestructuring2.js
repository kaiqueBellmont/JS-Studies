const hero = {
    name: 'Batman',
    realName: 'Bruce Wayne'
};

const { realName: secretName } = hero;

console.log(secretName)// => 'Bruce Wayne'
