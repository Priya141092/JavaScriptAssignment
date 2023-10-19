try
{
    var c=1;
    throw "error in try"
    
}
catch(error)
{
   console.log(error);
 console.error("An error occured",error.message);
}

finally{
    console.log("finally mth12");
}

//Switch statement
var a = 3;
switch (a) {
 case 1:
 console.log('case 1 executed');
 break;
 case 2:
 console.log("case 2 executed");
 break;
 case 3:
 console.log("case 3 executed");
 break;
 case 4:
 console.log("case 4 executed");
 break;
 default:
 console.log("default case executed");
}


//while loop and do while loop and for loop

var ab =0;
var arr= [2,4,6,8,9];

while(ab<arr.length)
{
    console.log(arr[ab])
    ab++;
}

var bd =0;
 do 
{
    console.log("this is do while loop",arr[bd])
    ab++;
    
}while(ab<arr.length)

//Function
function getHelloWorld(a,b) {
    return a+b;
  }
  
  
  console.log(getHelloWorld("hi",2)); 

  
