// Returns an object with the first matching element
var button = document.querySelector('.btn');

// Manipulate HTML attributes using properties with the same name as the attribute name
button.id = 'myButton';
button.title = 'Click Me!!!!';

// if (button.title === 'Click Me!!!!') {
//     alert(button.title + ' - the title is amazing.');
// }

// The destructive way to change the HTML class attribute
// button.className = 'btn-success';

// The better way to change the HTML class attribute, using the classList object

// Add a new class
button.classList.add('btn-success');

// Remove an existing class
button.classList.remove('btn-primary');

// Remove a class if it exists, or add it if it doesn't
button.classList.toggle('btn-block');

// Check to see if a class is already on an element
if (button.classList.contains('btn-success')) {
    console.log('The button has a btn-success class on it.');
}

// Returns an array of matching elements
var buttons = document.querySelectorAll('.btn');

// You must loop over them to work with each button, one at a time
// You can add a second argument to a forEach loop to get the current loop counter
buttons.forEach(function(button, currentLoopCounter) {
    var buttonCount = currentLoopCounter + 1;

    button.classList.add('btn-success');
    button.classList.add('btn-block');
    button.innerHTML = 'Button ' + buttonCount;

    // If an HTML element has a Data Attribute, such as data-show-when-loading="yes please"
    console.log(button.dataset.showWhenLoading);
});

document.querySelector('.col-sm-12').innerHTML += '<ul class="list-group"></ul>'

// Working with input values
var firstName = document.querySelector('#firstName');
var buttons = document.querySelectorAll('.btn');

document.addEventListener('click', function(e) {
    var button = e.target;

    if (button.classList.contains('btn')) {
        appendFirstNameInput();
    }
});

function appendFirstNameInput() {
    document.querySelector('.list-group').innerHTML += '<li class="list-group-item">' + firstName.value + '</li>';
}

// querySelectorAll typically gives you a NodeList data type, that only has .length and .forEach()
// Optionally, Array.from() will convert NodeList to a full Array data type if you need to use .map, .filter, .slice, etc.
// console.dir(buttons);
// buttons = Array.from(buttons);