// Insert 'hello' into this array at the end:
const myArray = ['I', 'would', 'like', 'to', 'say'];

// 1. Add 'hello' to the end of the array
const newArray = [...myArray, 'hello'];
console.log(newArray);

// 2. Replace the first element in the array with 'Fred'
const newArray2 = newArray.splice(0, 1, 'Fred');
console.log(newArray2);
console.log(newArray);

// 3. Add 'you' in between 'like', and 'to' and add 'goodbye' at the end.
const newArray3 = [...newArray.slice(0, 3), 'you', ...newArray.slice(3, 5), 'goodbye'];
console.log(newArray3);

// 4. Remove 'like' and 'to' from the array (by index)
const newArray4 = newArray3.splice(2, 1);
const newArray5 = newArray3.splice(3, 1);
console.log(newArray4);
console.log(newArray5);
console.log(newArray3);

// 5. Sort the array
newArray3.sort();
console.log(newArray3);

const myObject = {
  name: 'Fred Blogs',
  age: 35,
};

// 1. Change Fred's name to `Fred Smith`
const newObject = { ...myObject };
console.log(newObject);
newObject.name = "Fred Smith";

// 2. Add a new key {nationality: 'AU'}
newObject.nationality = "AU";
console.log(newObject);

// 3. Add 1 to Fred's age
newObject.age = newObject.age + 1;
console.log(newObject);


const pets = [
  { name: 'Fluffy', type: 'cat', adopted: false },
  { name: 'Mittens', type: 'cat', adopted: true },
  { name: 'Rover', type: 'dog', adopted: false },
];

// 1. Add a new pet to the end of the list: { name: 'Shadow', type: 'dog', adopted: false }
const newPets = [...pets, { name: 'Shadow', type: 'dog', adopted: false }];
console.log(newPets);

// 2. Change Rovers's status to adopted: true
newPets[2].adopted = true;
console.log(newPets);

const todos = {
  inProgress: ['clean the bathroom'],
  completed: ['wash the dishes', 'react homework']
};

// 3. Remove all the completed todos
const newTodos = { inProgress: [...todos.inProgress] };
console.log(newTodos);


// 4. Add a new todo to the inProgress list
newTodos.inProgress.push('Take a break');
console.log(newTodos);


// 5. Move all the inProgress todos to the completed list
// newTodos.completed = newTodos.inProgress;
// newTodos.inProgress = [];
const newTodos2 = { inProgress: [], completed: [...newTodos.inProgress] };

console.log(newTodos2);