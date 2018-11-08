var person = {
    name : 'Sarah',
    country : 'US',
    age : 35,
    treehouseStudent: true,
    skills : ['JavaScript', 'Python']
};

function print(message) {
    var div = document.getElementById('output');
    div.innerHTML = message;
}
/*
var message = '<p>Hello. My name is ' + person.name + '</p>';
message += '<p>I live in the ' + person.country + '</p>';
person.name = 'Rainbow Dash';
message += '<p>But I wish my name was ' + person.name + '</p>';
message += '<p>I am ' + person.age + ' years old.</p>';
person.age += 1;
message += '<p>But now I am ' + person.age + '!</p>';
message += '<p>I have ' + person.skills.length + ' skills.</p>';
message += '<p>' + person.skills.join(', ') + '</p>';
print(message);
*/

for (var prop in person) {
    console.log(prop);
}

for (var things in person) {
    console.log(person[things]);
}

for (var stuff in person) {
    console.log(stuff, ', ', person[stuff]);
}