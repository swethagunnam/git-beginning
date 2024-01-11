const person = {
  name: "swetha",
  age: 40,
  showName() {
    console.log(this);
    console.log(this.name);
    var a = 10;
    console.log("hai");
  },
};

person.showName();
