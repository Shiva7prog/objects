//  1) Create an object representing a car with properties make, model, and year.
// Use Object.freeze() to prevent modifications, then try to change the model and display the result.

var car={
    make:'abc',
    model:'old',
    year:1999
}
console.log(car);
Object.freeze(car);
car.model='new'
console.log(car);
console.log(Object.isFrozen(car));

// 2) Create an object representing a user with properties name, age, and email.
// Use Object.isFrozen() to check if the object is frozen and display the result.

var user={
Name:'shiva',
age:21,
email:'shivareddy0855@gmail.com'
}
console.log(Object.isFrozen(user));
console.log(user);

// 3) Create an object representing a product with properties name, category, and price.
// Use Object.isSealed() to check if the object is sealed and display the result.


let product={
    Name:'santoor',
    category:'soap',
    price:50
}
console.log(Object.isSealed(product));
console.log(product);

//4) Create an object representing a laptop with properties brand, model, and price.
//Use Object.keys() to list all the keys in the object and display them.

let laptop={
    brand:"dell",
    model:'intel5',
    price:'70000'
}
console.log(Object.keys(laptop));

//5) Create an object representing a house with properties location, size, and price.
// Use Object.values() to retrieve all values from the object and display them.

var house={
    location:'hyderabad',
    size:'189',
    price:'20000000'
}
console.log(Object.values(house));

// 6) Create an object representing a smartphone with properties brand, model, and price. 
// Seal the object using Object.seal(), modify the price, and then check if the object is sealed using Object.isSealed().
 var smartphone={
    brand:'oneplus',
    model:'2t5g',
    price:30000
 }
 Object.seal(smartphone);
 smartphone.price=50000
 console.log(Object.isSealed(smartphone));
 console.log(smartphone);
 
 // 7) Create an object representing a book with properties title, author, and publishedYear. 
 // Freeze the object using Object.freeze(), then try to modify the publishedYear and check if the object is frozen using Object.isFrozen().

var book={
    title:'python',
    author:'gauido van',
    publishedyear:1969
}
Object.freeze(book)
book.publishedyear=1999
console.log(Object.isFrozen(book));
console.log(book);

// 8) Create an object representing a person with properties firstName, lastName, and age. 
// Use both Object.keys() and Object.values() to retrieve and display all keys and values of the object.

var person={
    firstname:'shiva',
    lastname:'reddy',
    age:21
}
console.log(Object.keys(person));
console.log(Object.values(person));

// 9) Create an object representing a course with properties title, instructor, and duration. 
// Use Object.entries() to get the key-value pairs, and then modify the object using the delete operator to remove the duration property.

var course={
    title:'fullstack',
    instructor:'vamsi sir',
    duration:'6 months'
}
console.log(Object.entries(course));
delete course.duration
console.log(course);

// 10) Create an object representing an employee with properties name, position, and salary. 
// Seal the object using Object.seal(), modify the position, and then use Object.keys() to list all properties and verify that no new properties can be added.

var employees={
    NAME:'shiva',
    position:'developer',
    salary:50000
}
Object.seal(employees);
employees.position='hr'
employees.transport="cab"
console.log(employees);
console.log(Object.keys(employees));


