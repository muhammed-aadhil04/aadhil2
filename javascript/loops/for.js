for(let i=1;i<=5;i++){
    console.log("count:",i)
}

for(let i=2;i<=20;i+=2){
    console.log("count:",i)
}

let fruits=["apple","banana","mango"];
for(let i of fruits){
    console.log(i)
}
let person={name:"aadhil",age:"20",city:"kannur"};
for(let key in person){
    console.log(key,":",person[key])
}