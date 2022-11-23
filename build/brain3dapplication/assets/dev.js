var question1Score = 0;
var question2Score = 0;
var question3Score = 0;
var question4Score = 0;
var question5Score = 0;
var question6Score = 0;
var question7Score = 0;
var question8Score = 0;
var question9Score = 0;
var question10Score = 0;

var weightHigh = 30;
var weightMedium = 25;
var weightMediumHigh = 20;
var weightLowMedium = 15;
var weightLow = 10;

// form calls this function with answer 18-90
function question1Sum(value){
    question1Score = 3.33* ((100 - (((value -18)/72)*100))/100);
    calculateTotalAndApply();
}

// form calls this function , no range so 
function question2Sum(value){
    question2Score = 3.33;
    calculateTotalAndApply();
}

// form calls this function with answer 5-30
function question3Sum(value){
    question3Score = 7.5* ((100 - (((value -5)/25)*100))/100);
    calculateTotalAndApply();
}

// form calls this function with answer 0-40
function question4Sum(value){
    question4Score = 7.5*(value/40)
    calculateTotalAndApply();
}

// form calls this function with answer 1 or 0.5 or 0
function question5Sum(value){
    question5Score = 25 * value;
    calculateTotalAndApply();
}

// form calls this function with answer 0-20
function question6Sum(value){
    question6Score = 3.33*(value/20);
    calculateTotalAndApply();
}

// form calls this function with answer 1 or 0.5 or 0
function question7Sum(value){
    question7Score = 15 * value;
    calculateTotalAndApply();
}

// form calls this function with answer 1 or 0.5 or 0
function question8Sum(value){
    question8Score = 7.5 * value;
    calculateTotalAndApply();
}

// form calls this function with answer 1 or 0.5 or 0
function question9Sum(value){
    question9Score = 7.5 * value;
    calculateTotalAndApply();
}

// form calls this function , no range so 
function question10Sum(value){
    question10Score = 20;
    calculateTotalAndApply();
}


function calculateTotalAndApply(){
    var wPercentHigh = ((question3Score+question4Score+question8Score+question9Score)/weightHigh)*weightHigh;
    var wPercentMedHigh = ((question5Score)/weightMediumHigh)*weightMediumHigh;
    var wPercentMed = ((question10Score)/weightMedium)*weightMedium;
    var wPercentLowMed = ((question7Score)/weightLowMedium)*weightLowMedium;
    var wPercentLow = ((question1Score+question2Score+question6Score)/weightLow)*weightLow;
    var percentTotal = wPercentHigh+wPercentMedHigh+wPercentMed+wPercentLowMed+wPercentLow;
    updateBrainSection(percentTotal)
}















