// <!-- <!DOCTYPE html>
// <html>
//   <head>
//     <title>Hello World Example</title>
//   </head>
//   <body>
//     <script>
//       alert("Hello, World!");
//     </script>
//   </body>
// </html> -->


// if (true) {
//   var x = 10;
// }
// console.log(x); 
  
// if (true) {
//   const z = 30;
// //   console.log(z);
// }
// console.log(z);

// var a = 5;
// var a = 10; 
// console.log(a);

// let b = 5;
// let b = 10; 
// console.log(b);

// var x = 5;
// let y = 10;
// const z = 15;
// x = 20;
// y = 25;
// z = 30; 
// console.log(x, y, z);


// console.log(typeof "Hello");
// console.log(typeof 42);
// console.log(typeof true);
// console.log(typeof null);
// console.log(typeof undefined);


// let name = "Ali";
// console.log(typeof name);



//  let str="hello";         // string 
//  let num="100";           // number
//  let ishappy=true;        //boolean
//  let empty=null;          //null
//  let notassigned;         //undefined
//  let BigInt = 1234567890123456789012345678901234567890n;  //bigint
 
// console.log(typeof "Hello");
// console.log(typeof 100);
// console.log(typeof true);
// console.log(typeof null);
// console.log(typeof notassigned);
// console.log(typeof BigInt);

// let result = "10" + 5;
// console.log(result);     
// console.log(typeof result);


// let me = {
//     name: "Muhammed Aadhil",
//     age: 22,
//     city: "Kochi",
//     isStudent: true
// };

// console.log(me);

// let a = 10, b = 20;
// console.log(a + b);
// console.log(a += 5);
// console.log(a == "15");
// console.log(a === "15");
// console.log(a > 5 && b < 30);




// let length = 10;
// let width = 5;

// let area = length * width;

// console.log("Length:", length);
// console.log("Width:", width);
// console.log("Area of Rectangle:", area);

// let number = 7;

// if (number % 2 === 0) {
//   console.log(number + " is even");
// } else {
//   console.log(number + " is odd");
// }

// let number = 0;

// if (number > 0) {
//   console.log("Positive");
// } else if (number < 0) {
//   console.log("Negative");
// } else {
//   console.log("Zero");
// }

// let marks = 78;

// if (marks >= 90) {
//   console.log("Grade: A");
// } else if (marks >= 75) {
//   console.log("Grade: B");
// } else if (marks >= 50) {
//   console.log("Grade: C");
// } else {
//   console.log("Grade: F");
// }


// let day = 3;

// switch (day) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   case 6:
//     console.log("Saturday");
//     break;
//   case 7:
//     console.log("Sunday");
//     break;
//   default:
//     console.log("Invalid day number");
// }

// let colors = ["Red", "Green", "Blue"];
// console.log(colors.length);

// let fruits = ["apple", "banana", "cherry"];
// fruits.push("mango");
// fruits.pop();
// console.log(fruits.length);
// console.log(fruits[1]);

// let movies = ["Inception", "Interstellar", "Avatar", "The Dark Knight", "Titanic"];

// console.log("3rd movie:", movies[2]);

// movies.push("Joker");
// console.log("After adding a new movie:", movies);
// console.log("Length after adding:", movies.length);

// movies.pop();
// console.log("After removing the last movie:", movies);
// console.log("Length after removing:", movies.length);

// let i = 1;
// while (i <= 3) {
//   console.log("Hi");
//   i++;
// }

// for (let i = 1; i <= 20; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }


// let languages = ["HTML", "CSS", "JavaScript", "React", "Node.js"];

// for (let lang of languages) {
//   console.log(lang);
// }

// let numbers = [1, 2, 3, 4, 5];

// // 1 Print all elements using forEach()
// console.log("All elements:");
// numbers.forEach(num => console.log(num));

// // 2️ Create a new array with all elements doubled using map()
// let doubled = numbers.map(num => num * 2);
// console.log("Doubled array:", doubled);

// // 3️ Filter numbers greater than 2
// let greaterThanTwo = numbers.filter(num => num > 2);
// console.log("Numbers greater than 2:", greaterThanTwo);

// // 4️ Find the sum of all numbers using reduce()
// let sum = numbers.reduce((acc, curr) => acc + curr, 0);
// console.log("Sum of all numbers:", sum);

// let person = {
//   name: "aadhil",
//   age: 20,
//   city: "kannur"
// };

// console.log(person.name);      
// console.log(person["city"]);   

// person.country = "India";

// person.hobby = "Painting";
// console.log("Hobby:", person.hobby);

// person.age = 22;
// console.log("Updated age:", person.age);

// delete person.city;

// console.log("Final person object:", person);


// let user = { name: "Safa", age: 14, class: "9D" };
//  for (let key in user) { 
//     console.log(key, user[key]); 
//   }

//   let students =[
//     {name:"safa",mark:"75"},
//     {name:"aadhil",mark:"86"},
//     {name:"mohammed",mark:"81"}
//   ];

//   console.log("all students:")
//   for(let student of students){
//     console.log(student.name)
//   }

//   console.log("student who scored above 80:")
// for(let student of students){
//   if(student.mark>80){
//     console.log(student.name,"-",student.mark)
//   }
// }

// let products = [
//    { name: "Moisturizer", price: 300 },
//    { name: "Sunscreen", price: 400 },
//     { name: "Serum", price: 250 } 
//   ];

//   console.log("product details:")
//     for(let product of products){
//       console.log(product.name+"-$"+product.price)
//   }

//   let totalprice=products.reduce((sum, product) => sum + product.price, 0);
//   console.log("Total price of all products: ₹" + totalprice);

//   let productNames = products.map(product => product.name);
//   console.log("Product names:", productNames);

// let expensiveProducts = products.filter(product => product.price > 300);
// console.log("Products costing more than ₹300:", expensiveProducts);


