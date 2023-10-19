//Add two numbers
var a =10;
var b =20;
console.log(a+b);

//two bigint numbers and multiply them
var a = 123456789012345789n;
var b = 123456666565651656n;
result = (a*b);
console.log(BigInt(result))

//Arithmetic operators
var x=10;
var y =20;
console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x/y);
console.log(x%y);
console.log(x++);
//11
console.log(x--);
//10
console.log(++y);
//11
console.log(--y);
//10

//comparring opeators

var ab = 24;
var bc = "24";


if(ab==bc)
{
    console.log("Double equal operators");
}
else if(ab===bc)
{
    console.log("Triple equal operators");
}

var gh = 24;
var hj = 30;
if(gh>hj)
{
    console.log("first number is greater than second e");
}

else if(gh<hj)
{
    console.log("second number is greater than first ");
}

else if(gh<=hj)
{
    console.log("second number is greater than first ");
}
else if(gh>=hj)
{
    console.log("first number is greater than first ");
}

else if(gh!=hj)
{
    console.log("they are not equal ");
}

else if (gh!=hj || gh==hj)
{
    console.log("Either of them are equal");
}

else if (gh!=hj && gh==hj)
{
    console.log("Both should be equal");
}









