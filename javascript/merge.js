let arr1=[1,2]
let arr2=[3,4]
// concat 
let merged=arr1.concat(arr2);
console.log(merged)
// join
console.log(merged.join("*"))
// flat
let nested=[1,[2,[3,4]]];
console.log(nested.flat(2))