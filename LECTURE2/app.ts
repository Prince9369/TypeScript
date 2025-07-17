//Object,Array,Tuple

// console.log("Let's learn object");

//! Object
// const person :{
//     firstName:string;//definig the types of the members of the objects
//     age:number;
//     xyz:{
//         address:string;
//     }
// }={
//     firstName:"Prince",
//     age:21,
//     xyz:{
//         address:"Varanasi"
//     }
// };
// console.log("fenflkcnwlknvwlkn");

//! Array
// const person :{
//     firstName:string;//definig the types of the members of the objects
//     age:number;
//     skills:string[]//denotes array of string
// }={
//     firstName:"Prince",
//     age:21,
//     skills:["ReactJs","NodeJs"]//yaha pe skills me sirf string pass kr skte hai
// };

// let favlanguage1 : string[];
// favlanguage1=["Hiindi","English"];//is me surf string dal skte hai in this array

// //agr we want array me hr type k data dal de to we use any but isse we loose ts powefull things
// //try to avoid "Any" keyword
// let favlanguage2: any[];
// favlanguage2=["Hindi",21,34,true];//array me num,string and boolean teeno dal diya
// // console.log(person);


//! Tuple=>Fixed array of types
// const person : {
//     name :string;
//     age: number;
//     skills:string[];
//     product: [number,string]//we want that ij prodct sirf number and string rhe to we use list in this
// } ={
//     name:"Prince",
//     age:21,
//     skills:["React","JavaScript"],
//     product:[12,"Samsung"],//sequence match krna chahiye with the predefined product list:phle number and then string wrna error
    //it can have only 2 values
// }

// person.product[1]=20;//string pe number nahi dal skte (Invalid)



//! Enum

enum Role{ADMIN,AUTHOR,READ_USER_ONLY};
const person ={
    name:"Prince",
    age:21,
    skills:["React","Node"],
    product:[10,"Samsung"],
    role:Role.ADMIN
}
if(person.role===Role.AUTHOR){
    console.log("Author");
} else if(person.role===Role.ADMIN){
    console.log("Admin");
} else if(person.role==Role.READ_USER_ONLY){
    console.log("read user only");
    
}






