// function divide(num1,num2){
//     qot=0
//     qot=num1/num2
//     return qot
// }
// let result=divide(2,10)
// console.log(result)



// // function expression
// let add=function(a,b){
//     sum=a+b
//     return sum
// }
// console.log(add(5,5))


// arrow function 
// let add=(num1,num2)=>{
//     sum=num1+num2
//     console.log(sum)
// }
// add(5,5)


// let product=(num1,num2)=>{
//     product=num1*num2
//     console.log(product)
// }
// product(5,5)

// let difference=(num1,num2)=>{
//     difference=num1-num2
//     return difference
// }
// difference(10,5)
// console.log(difference)


// for(let i=1;i<=10;i++){
//     console.log(i)
// }


// function numbers(){
//     for(let i=1;i<=10;i++)
//         console.log(i)
// }

// numbers()


// function sumofnumbers(n){
//     let sum=0
//     for(let i=1;i<=n;i++){
//         sum=sum+i
//     }
//     return sum
// }

// console.log(sumofnumbers(4))



// function factorial(n){
//     let number =n
//     let factorial =1
//     for(let i=1;i<=number;i++){
//         factorial=factorial*i
//     }
//     return factorial
// }
// console.log(factorial(5))


// function checknumber(num){
//     if(num%4===0){
//         console.log("even")
//     }else{
//         console.log("odd")
//     }
// }
// checknumber(7)


// function numbers(a,b,c){
//     if(a>b){}

// }


// let num=[1,2,3,4]
// let sum=0
// for(i=0;i<num.length;i++){
//    sum=sum+num[i]
// }
// console.log(sum)

// function evennumber(){
//     let num=[1,2,3,4,5,6]
//     let count=0
//     for(let i=0;i<num.length;i++){
//          if(num[i]%2===0)
//         count=count+1
//     }
//     return count
       
// }
// console.log(evennumber())

// let mark=80
// if(mark>90){
//     console.log("grade a")
// }else if(mark>75){
//     console.log("grade b")
// } else if(mark>50){
//     console.log("grade c")
// }else{
//     console.log("fail")
// }


// let fruits=["apple","mango","grapes","orange"]
// let reversedfruits=[]
// for(let i=fruits.length-1;i>=0;i--){
//     reversedfruits.push(fruits[i])
// }
// console.log(reversedfruits)

// function longestword(n){
//     let word=n[0]
//     for(let i=1;i<n.length;i++){
//         if(n[i].length>word.length){
//             word=n[i]
//         }
//     }
//     return word
// }
// console.log(longestword(["aadhil","muhammed","kannurr"])); 



// let names=["Aadhil","muhammed","fijas","sheika"]
// for (let name of names) {
//     if (name[0] === "A") {
//         console.log(name)
//     }
// }


// let num=[12,3,4,15,6,17,18,9]
// let smallnumbers=[]
// for (let i of num){
//     if(i<10){
//         smallnumbers.push(i)
//     }

// }
// console.log(smallnumbers)

// function person(){
// let student={
//     name:"aadhil",
//     age:20,
//     marks:85
// }
// console.log(student.name,"is",student.age,"years old and scored",student.marks,"marks")
// }
// person()




// let person={
//     name:"muhammed aadhil",
//     age:20,
//     place:"thalassery"}
//     for(let i in person){
//         console.log(i+":",person[i])
//     }


// const users = [
//   { name: "Sara", age: 22 },
//   { name: "Ali", age: 19 },
//   { name: "Reema", age: 25 }
// ];
// function property(n){
//     for(let i of n)
//         if(i.name==="Ali")
//             return i
// }

// console.log(property(users))




// function averagemark(){
//      let marks=[78, 85, 90, 67, 88]
//      let sum=0
//      for(let mark of marks){
//         sum+=mark
// }
// let average=sum/marks.length
// return average
// }
// console.log(averagemark())


// function contains(num1,num2){
//     for(let i of num1){
//         if(i===num2){
//             return true
//         }
//     }
//     return false
// }
// let num=[1,2,3,4]
// console.log(contains(num,4))
// console.log(contains(num,0))



// function numbers(){
//     let num=[1,2,3,4,5,6]
//     let sum=0
//     for(let i of num){
//         if(i%2===0){
//             sum+=i
//         }
//     }
//     return sum
// }
// console.log(numbers())


