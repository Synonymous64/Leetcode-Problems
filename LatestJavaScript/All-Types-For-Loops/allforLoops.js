console.log(
  "There are Three types of For Loops exists\n1 - For Loop\n2 - For In Loop\n3 - For Of Loop\n4 - For Each Loops"
);

//! For Loops
// for (let i = 0; i < 5; ++i) console.log(i);

//! For in Loops
let obj = {
  name: "Prajwal",
  class: "3rd Year",
  "Roll no": 143,
  age: 20,
};
//! It will only display the key and not the values 
for(eli in obj){
    console.log(eli); //* Check here
    // console.log("Value of " + eli + " is " + obj[eli]); //* Alter way to print both
}

//! For Of loop
//* Won't work for this since the obj should be an literals (string or array)
// for(eli of obj){
//     console.log(eli);
// }
//! This would be working 
for(eli of "Prajwal"){
    console.log(eli);
}