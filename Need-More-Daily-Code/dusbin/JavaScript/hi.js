let person = {
    name: "John Doe",
    greet: function () {
        return "Hi, I'm " + this.name;
    }
};

console.log(person.greet());
