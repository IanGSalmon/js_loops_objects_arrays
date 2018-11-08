var quizQuestions = [
    {
        question: 'What color is the sky?',
        answer: 'blue'
    },
    {
        question: 'What is the first month of the year?',
        answer: 'January'
    },
    {
        question: 'What company makes the Switch?',
        answer: 'Nintendo'
    }
];

// Arrays for ques correct and ques incorrect
var correctQuestions = [];
var incorrectQuestions = [];
var correctTally = 0;
var incorrectTally = 0;

function buildList(arr) {
    var listHTML = '<ol>';
    for (var i = 0; i < arr.length; i += 1) {
        listHTML += '<li>' + arr[i] + '</li>';
    }
    listHTML += '</ol>';
    return listHTML;
}

// Loop through questions, compare, add to appropriate array
for (i=0; i < quizQuestions.length; i+=1) {
    question = quizQuestions[i].question;
    answer = quizQuestions[i].answer;
    response = prompt(question);
    if (answer === response) {
        correctTally += 1;
        correctQuestions.push(question);
    } else {
        incorrectTally += 1;
        incorrectQuestions.push(question);
    }
}

function print(message) {
    var outputDiv = document.getElementById('output');
    outputDiv.innerHTML = message;
  }

html = '<h1>Questions Correct: ' + correctTally;
html += '<h2>You got these questions correct:</h2>';
html += buildList(correctQuestions);
html += '<h2>You got these questions wrong:</h2>';
html += buildList(incorrectQuestions);
print(html);