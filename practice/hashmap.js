class Contact{
    constructor(name, age, number){
        this.name = name;
        this.age = age;
        this.number = number;
    }
}

const contacts = new Map();
contacts.set('Lisa', new Contact("lisa broadhead", 13, '111-222-3333'));
contacts.set('Gus', new Contact("Gus Gus", 2, null));
contacts.set('Natalie', new Contact("Natalie Baker", 10, '444-555-6666'));

console.log(contacts.get("Lisa").number);
