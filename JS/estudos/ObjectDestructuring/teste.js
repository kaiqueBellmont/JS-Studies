const hero = {
    id: 10,
    name: 'Batman',
    realName: 'Bruce Wayne',
    login: 'kaique.costa',
    email: 'kaique.costa@gmail.com'
};
const EMAIL_FIELD = 'Email'
const USERNAME_FIELD = "nome"
const AT_SYMBOL = "@"
const prop = 'name';
const { [prop]: name } = hero;

name; // => 'Batman'
console.log(name)

const getUserKey = ({ id, login }) => {
    if (!login) return { id }
    if (login.includes(AT_SYMBOL)) return { [EMAIL_FIELD]: login }
    return { [USERNAME_FIELD]: login }
}
console.log(getUserKey(hero))
