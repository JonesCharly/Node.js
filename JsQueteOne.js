class person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    tellMyName() {
        return this.name;
    }

    tellMyAge() {
        return this.age;
    }

};

let personeOne = new person ('John', 45);
let personeTwo = new person ('Mary', 30);

console.log(`I am ${personeOne.tellMyName()}`);
console.log(`I am ${personeOne.tellMyAge()} years old`);
console.log(`I am ${personeTwo.tellMyName()}`);
console.log(`I am ${personeTwo.tellMyAge()} years old`);

