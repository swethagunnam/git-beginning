const person = {
  name: "swetha",
  age: 40,
  showName() {
    console.log(this);
    console.log(this.name);
    var a = 10;
    console.log("10");
  },
  showID() {
    console.log("added ID");
    console.log("added ID2");
  },
};

person.showName();
