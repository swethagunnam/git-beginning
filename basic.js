const person = {
  name: "swetha",
  age: 20,
  showName() {
    console.log(this);
    console.log(this.name);
  },
};

person.showName();
