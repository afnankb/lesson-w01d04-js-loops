


//Print every number from 0 to 10
for (var i=0;i<=10;i++){


    console.log(i)
    
    
    }
    
    //Print every number from 10 to 0
    for (var i=10;i>=1;i--){
    
    
    console.log(i)
    
    
    }
    
    
    
    //Print every number from 4 to -16
    
    for (var i=4 ; i>= -16 ; i--){
    
    console.log(i)
    
    }
    
    
    
//Print every fifth number from 8 to 41
    
    for (var i=8;i<=41;i++){
    
    
    console.log(i)
    
    
    }
    
    
    
    
    
    
    //Change all odd numbers to be those numbers multiplied by two:
    
    
    const numbers = [4, 9, 7, 2, 1, 8];
    
    for(let i=0 ; i<numbers.length ; i++){
    
    if (numbers[i]% 2 === 0  ){
    
    console.log (numbers[i])
    
    }
    else 
    console.log(numbers[i]*2)
    
    };
    
    
    //Create an array to hold your favorite colors. For each choice, log to the screen a string like: My #1 choice is blue.
    
    var color = ["blue", "black", "white "];
    
    for (var i=0 ; i<color.length ; i++){
    
    console.log(" my #"+i+" choice is "+color[i]);
    
    }
    
    
    
    
    
    //Create an array of ages. Loop through and log only the ages that are over 21.
    
    var ages = [21,33,22,61,17,8,13];
    
    for (var i=0 ; i<ages.length ; i++){
    
       if (ages[i]>21){
    console.log(ages[i]);
       }
    }
    
    //Create an array to hold your top five choices of something (music, books, movies, whatever).
    
    var topfivechoices = ["blue","music", "movie","books"];
    
    for (var i=0 ; i<topfivechoices.length ; i++){
    
      
         console.log("My #"+i+"st choice is "+topfivechoices[i])
       
    }
    
    
    
    
    
    //The classic Fizzbuzz Program
    
    var theNumber=1;
    var numberOftimes=100;
    
    for(var i=0;i<numberOftimes;i++) {
    
    if(theNumber % 3 === 0 ){
      console.log("Fizz");
      theNumber= theNumber+1;
    }
    else if(theNumber % 5 === 0){
      console.log("Buzz");
      theNumber= theNumber+1;
    }
    else if (theNumber % 3 === 0 && theNumber % 5 === 0)
    {
      console.log("FizzBuzz");
      theNumber= theNumber+1;
    }
    else {
      console.log(theNumber)
      theNumber= theNumber+1;
    }
    
    
    }
    
    
    
    //The even/odd reporter
    
    
    for (var i=0 ;i<=20 ; i++){
    
    if (i % 2 === 0){
    
    console.log(i+" is even");
    
    }
    else {
    
      console.log(i+"is odd ")
    }
    
    
    }
    
    
    //Multiplication Tables
    
    for (var i=0 ; i<=10 ; i++){
    
    console.log(i*9);
    console.log(i*i)
    
    
    
    
    }
    
    
    //The Grade Assigner
    
    
    for (var i=60 ; i<=100 ;i++){
    
    if(i===100 && i<95){
    
    console.log(i+" you got an A+");
    }
    
    else if (i>=95 && i<90)
    {
    
    console.log(i+" you got an A")
    
    
    }
    
    
    else if (i>=90 && i<85){
    
    console.log(i+" you got an B+")
    
    }
    
    
    
    
    else if (i>=85 && i<80)
    {
    
    console.log(i+" you got an B")
    
    
    }
    
    
    else if (i>=80 && i<75)
    {
    
    console.log(i+" you got an C+")
    
    
    }
    
    else if (i>=75 && i<70){
    
    console.log(i+" you got an C ")
    
    }
    
    else if (i>=70 && i<65){
    
    console.log(i+" you got an D+ ")
      
    }
    
    
    else if (i>=65 && i<60){
    
      console.log(i+" you got an D ")
    }
    
    
    else {
    
    
    }
    
    console.log(i+" you got an F ")
    
    
    }
    
    
    