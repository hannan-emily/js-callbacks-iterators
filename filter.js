var people = [
	{
		name: "Bob",
		coolnessScore: 23
	},
	{
		name: "Jen",
		coolnessScore: 40
	},
	{
		name: "James",
		coolnessScore: 15.6
	},
	{
		name: "Isolde",
		coolnessScore: 17
	}
];

// Write code that uses the filter function, and the below isCool function to return a list of people who are cool.

// var newArr1 = arr.filter(function(name) {
//   if (name.indexOf("g") !== -1) {
//   return false;
//   } else {
//       return true;
//     }
// });


var isCool = function(person) {
	return person.coolnessScore > 20;
}

var coolPeople = people.filter(function(person) {
  return isCool(person);
});

coolPeople.forEach(function(person) {
  console.log(person.name + ' is cool');
});


// Example results:
//
// Bob is cool
// Isolde is cool
