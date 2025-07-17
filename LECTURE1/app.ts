function add (num1 : number,num2 : number, printResult:boolean,someText:string){
    // //to hanndle this using js we use but it is not a good practise
    // if(typeof num1==="number" && typeof num2==="number")
    // return num1+num2 ;
    // else{
    //     return +num1+num2; + before is ued to convert the num1 into number
    // }
    
    if(printResult){
        console.log(`${someText} ${num1+num2}`);
    } else{
        return num1+num2;
    }
}

const n1=20;//ye string ko bhi add kr de rha
const n2=30;


const printResult=true;
const someText="Sum of two numbers is ="

const ans=add(n1,n2,printResult,someText);
// console.log(ans);