/*
create student records
prints to webpage
1) Create data strcutre to hold info about students
array named students
each object should have name, track, achieveemnts (# value), points (#)
at least 5 student objects
*/

var students = [
    {
        name: 'Ian',
        track: "Get a job",
        achievements: 30,
        points: 9086
    },
    {
        name: 'Anna',
        track: "Relax more",
        achievements: 20,
        points: 7086
    },
    {
        name: 'Paul',
        track: "Stay on target",
        achievements: 50,
        points: 90086
    },
    {
        name: 'Elizabeth',
        track: "Work less",
        achievements: 40,
        points: 10086
    },
    {
        name: 'Mike',
        track: "Sleep more",
        achievements: 40,
        points: 11486
    },
];

var message = '';
var student;
var search;

function print(message) {
    var outputDiv = document.getElementById('output');
    outputDiv.innerHTML = message;
}

function getStudentReport(student) {
    var report = '<h2>Name: ' + student.name + '</h2>';
    report += '<p>Track: ' + student.track + '</p>';
    report += '<p>Achievements: ' + student.achievements + '</p>';
    report += '<p>Points: ' + student.points + '</p>';
    return report;
}

while (true) {
    search = prompt('Search student records: type a name [Jody] (or type \'quit\' to end');
    if (search === null || search.toLowerCase() === 'quit') {
        break;
    }
    for (i=0; i<students.length; i+=1) {
        student = students[i];
        if (student.name === search ) {
            message = getStudentReport(student);
            print(message);
        }
    }
}

