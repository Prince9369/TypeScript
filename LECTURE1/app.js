function add(num1, num2, printResult, someText) {
    // //to hanndle this using js we use but it is not a good practise
    // if(typeof num1==="number" && typeof num2==="number")
    // return num1+num2 ;
    // else{
    //     return +num1+num2; + before is ued to convert the num1 into number
    // }
    if (printResult) {
        console.log("".concat(someText, " ").concat(num1 + num2));
    }
    else {
        return num1 + num2;
    }
}
var n1 = 20; //ye string ko bhi add kr de rha
var n2 = 30;
var printResult = true;
var someText = "Sum of two nu,bers is =";
var ans = add(n1, n2, printResult, someText);
// console.log(ans);
