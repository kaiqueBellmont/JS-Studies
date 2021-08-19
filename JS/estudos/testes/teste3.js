class Person {
    constructor(name) {
        this.name = name;
    }
    describe() {
        return `Person named ${this.name}`;
    }
    static logNames(persons) {
        for (const person of persons) {
            console.log(person.name);
        }
    }
}
class Employee extends Person {
    constructor(name, title) {
        super(name);
        this.title = title;
    }
    describe() {
        return super.describe() +
            ` (${this.title})`;
    }
}
const jane = new Employee('Jane', 'CTO');
assert.equal(
    jane.describe(),
    'Person named Jane (CTO)');