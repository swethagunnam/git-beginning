const person = {
  name: "swetha",
  age: 30,
  showName() {
    console.log(this);
    console.log(this.name);
  },
};

person.showName();
