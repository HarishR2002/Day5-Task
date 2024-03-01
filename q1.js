class Person {
    constructor(name, age, gender, address) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.address = address;
    }

    getName() {
        return this.name;
    }

    getAge() {
        return this.age;
    }

    getGender() {
        return this.gender;
    }

    getAddress() {
        return this.address;
    }
}

// Creating a Person instance
const person = new Person("John Doe", 30, "Male", "123 Main St, Anytown, India");

// Getting details of the person
console.log(`Name: ${person.getName()}`);
console.log(`Age: ${person.getAge()}`);
console.log(`Gender: ${person.getGender()}`);
console.log(`Address: ${person.getAddress()}`);
