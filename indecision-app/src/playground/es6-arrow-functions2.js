const add = (a, b) => {
  return a + b;
}

console.log(add(55, 66));

const user = {
  name: 'man',
  cities: ['philly', 'dublin', 'nyc'],
  printPlacesLived() {
    return this.cities.map((city) => {
      return this.name + ' has lived in ' + city;
    });
  }
}

console.log(user.printPlacesLived());

const multiplier = {
  numbers: [1, 3, 5, 6],
  multiplyBy: 3,
  multiply() {
    return this.numbers.map((number) => number * this.multiplyBy);
  }
}

console.log(multiplier.multiply());