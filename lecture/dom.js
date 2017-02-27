// returns an object with the first matching element
var button = document.querySelector('.btn');

// html attributes can be accessed as properties
button.id = 'myButton'; 
button.title = 'Click Me!!!'; 
// button.className = 'btn-success'; // destructive way to change class

// if (button.title === 'Click Me!!!') {
//     alert(button.title + ' - The title is amazing');
// }

// 4 methods avail with classList to change class - the better way 
button.classList.add('btn-success');
button.classList.remove('btn-primary');
button.classList.toggle('btn-block'); // flips it back and forth. turns something on and off. removes block if there, adds if not.
//each time code is ran, it goes either on or off. 
// if (button.classList.contains('btn-success')) {
//     altert('Success!');
// } // does the classList have this element, and if so, do something

//returns an array of matching objects
var buttons = document.querySelectorAll('.btn'); 

// for each button it will run the function 
buttons.forEach(function(button, currentIndex) {
    button.classList.add('btn-success');
    button.classList.add('btn-block');
    button.innerHTML = 'Button ' + (currentIndex + 1); //CI gives the current number of the loop

    console.log(button.dataset.showWhenLoading);
});

var firstName = document.querySelector('#firstName'); 
firstName = firstName.value; 

console.log(firstName);

var buttons = document.querySelectorAll('.btn');

buttons.forEach(function(button) {
    button.addEventListener('click', showFirstName);
});

function showFirstName() {
    document.body.innerHTML += firstName;
}