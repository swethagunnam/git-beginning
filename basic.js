const person = {
  name: "swetha",
  age: 30,
  showName() {
    console.log(this);
    console.log(this.name);
    console.log("hai");
    console.log("hai1");
    console.log("hiii");
  },
};

person.showName();
