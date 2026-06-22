function calculateCGPA(){

let grades=document.querySelectorAll(".grade");
let credits=document.querySelectorAll(".credit");

let totalPoints=0;
let totalCredits=0;

for(let i=0;i<grades.length;i++){

let grade=parseFloat(grades[i].value);
let credit=parseFloat(credits[i].value);

totalPoints+=grade*credit;
totalCredits+=credit;

}

let cgpa=(totalPoints/totalCredits).toFixed(2);

let percentage=((cgpa-0.75)*10).toFixed(2);

document.getElementById("cgpa").innerHTML=cgpa;

document.getElementById("percentage").innerHTML=percentage+"%";

}

function resetForm(){

location.reload();

}