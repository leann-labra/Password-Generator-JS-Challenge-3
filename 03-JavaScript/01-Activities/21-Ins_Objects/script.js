// Objects are a collection of properties
var planet = {
  // Properties are made up of key-value pairs
  name: "Earth",
  age: "4.543 billion years",
  moons: 1,
  isPopulated: true,
  population: "7.594 billion"
};

var car = {
  make: 'Ford',
  model: 'Mach-E',
  trim: ['Premium'],
  battery: 'Extended',
  available: true,
  owner: {
    name: 'Farish',
    location: 'Oak Hills',
    email: 'farish@farish.dev'
  }
}

// To access a property's value that is a string, number or booleean, use the object's name and the associated key	
// Uses dot notation and logs "Earth"	
console.log(planet.name);
	
// Uses bracket notation and logs "Earth"
console.log(planet["name"]);

console.log(car.owner.location);
