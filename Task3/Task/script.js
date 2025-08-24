// 1. Create Variables
const studentName = "Amal Elsayed";
let studentAge = 20;
var isEnrolled = true ;
let grades = [100, 95, 90];


// 2. Operators
let sumGrades = grades[0] + grades[1] + grades[2];
console.log(sumGrades);

let average = sumGrades / grades.length;
console.log(average);

let Path = average >= 60 ;
console.log(Path);


//3. if / else / else if
if(average >= 90){
    console.log("Excellent");
}
else if(average >= 75){
    console.log("Very Good");
}
else if(average >= 60){
    console.log("Good");
}
else{
    console.log("Failed");
}


//4. switch
let subNumber = parseInt(prompt("enter a subject number (1, 2, or 3):"))
switch(subNumber){
    case 1 :
        console.log("Math: " + grades[0]);
        break;
    case 2 :
        console.log("Science: " + grades[1]);
        break;
    case 3 :
        console.log("English: " + grades[2]);
        break;
    default :
        console.log("Invalid subject number");
}


//5. Loops – for
for (let i=0 ; i<grades.length ; i++){
    console.log("Grade " + (i+1) + ': ' + grades[i]);
}


//6. Functions
function calcTotal(gradesArray){
    let total = 0 ;
    for(i=0 ; i<gradesArray.length ; i++){
        total = total + gradesArray[i];
    }
    return total ;
}

const calcAverage = (gradesArray) => {
    return calcTotal(gradesArray) / gradesArray.length;
};
let totalGrades = calcTotal(grades);
let averageGrades = calcAverage(grades);
console.log(totalGrades);  
console.log(averageGrades); 


//7. while
let num = 10;
while(num < 10){
    console.log("done");
}


//8. do-while
let num2 = 10;
do{
    console.log("done");
}
while(num2 < 10);


//9. Array
let numbers = [1 , 2 , 3 , 4 , 5 , 6];

let sumFor = 0;
for(let i=0 ; i<numbers.length; i++){
    sumFor += numbers[i];
}
console.log(sumFor);


let sumWhile = 0;
let index = 0;
while (index < numbers.length) {
    sumWhile += numbers[index];
    index++;
}
console.log(sumWhile);