const person = {
  name: "swetha",
  age: 40,
  showName() {
    console.log(this);
    console.log(this.name);
  },
  showID() {
    console.log("added ID");
    console.log("added ID2");
  },
};

person.showName();
