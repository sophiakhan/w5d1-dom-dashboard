
// 1. Count the number of records in the "Current Quarter Details" table.

var recordsCount = document.getElementsByTagName('tr').length;
console.log(recordsCount - 1); // minus one for header

// 2. Set each dashboard image to different images, one for each season. Make sure you also set the alt="" attribute with an appropriate description.

var winterImage = document.getElementsByTagName('img')[0];
winterImage.src = "https://unsplash.it/200?image=908";
winterImage.title = "Snowy Mountain";

var springImage = document.getElementsByTagName('img')[1];
springImage.src = "https://unsplash.it/200?image=997";
springImage.title = "Cliff Over Water";

var summerImage = document.getElementsByTagName('img')[2];
summerImage.src = "https://unsplash.it/200?image=973";
summerImage.title = "Summer Beach";

var fallImage = document.getElementsByTagName('img')[3];
fallImage.src = "https://unsplash.it/200?image=924";
fallImage.title = "Fall Trees"; 

//alternate way

// var images = document.querySelectorAll('img');
// images[0].src = 'URL';
// images[1].src = 'URL';
// images[2].src = 'URL';
// images[3].src = 'URL';

// 3. Below each dashboard image, there's a season/quarter name. Below those, there are three dots. Replace those three dots with a randomly generated number formatted as currency, like $12,589.00.

function _randomCurrency(max) {
   return '$' + (Math.random() * max).toFixed(2); 
};

var winterPrice = document.querySelectorAll('.text-muted')[0];
winterPrice.innerText = _randomCurrency(10000);

var springPrice = document.querySelectorAll('.text-muted')[1];
springPrice.innerText = _randomCurrency(10000);

var summerPrice = document.querySelectorAll('.text-muted')[2];
summerPrice.innerText = _randomCurrency(10000);

var fallPrice = document.querySelectorAll('.text-muted')[3];
fallPrice.innerText = _randomCurrency(10000);

// 4. Change the currently selected left side menu item from Overview to Reports.

//var activePage = document.querySelector.innerText='Overview';
var overviewTab = document.getElementsByTagName('li')[4];
overviewTab.classList.remove('active');

var reviewTab = document.getElementsByTagName('li')[5];
reviewTab.classList.add('active');

// 5. Set the default search input value to "Q4 sales".

var searchInput = document.querySelector('.form-control');
searchInput.value = "Q4 Sales";

// 6. Add the "table-hover" class to the table. See the Bootstrap table docs.

var tableHover = document.querySelector('.table');
tableHover.classList.add('table-hover');

// 7. Add the "success" class to the 7th - 10th row of the table, like: <tr class="success">...</tr>

var rows = document.querySelectorAll('tr');

rows.forEach(function(row, i) {
    if (i >= 7 && i <=10) {
        row.classList.add('success');
    }
});

// 8. Change the table header names to: ID, First Name, Last Name, Department, Client.

var id = document.querySelectorAll('th')[0];
id.innerText = 'ID';

var firstName = document.querySelectorAll('th')[1];
firstName.innerText = 'First Name';

var lasttName = document.querySelectorAll('th')[2];
lasttName.innerText = 'Last Name';

var department = document.querySelectorAll('th')[3];
department.innerText = 'Department';

var client = document.querySelectorAll('th')[4];
client.innerText = 'Client';

// 9. Make an array of objects, each object representing a single row in the table. Remove the commas from the ID column and convert it to an actual Number data type. Example: [{id: 1001, firstName: 'Lorem', lastName: 'ipsum', department: 'dolor', client: 'sit'}]

var arrayObjects = document.querySelectorAll('tbody tr')
arrayObjects = Array.from(arrayObjects).map(function(arrayObject) {
   return {
       id: Number(arrayObject.children[0].innerHTML.replace(',', '')),
       firstName: arrayObject.children[1].innerHTML,
       lastName: arrayObject.children[2].innerHTML,
       department: arrayObject.children[3].innerHTML,
       client: arrayObject.children[4].innerHTML,
   }
   rowOfObjects.push(rowOfObject) // push new objects into the array 
})

console.log(arrayObjects);

//alternate way

var data = [];
var rows = document.querySelectorAll('tbody tr');

rows.forEach(function(row) {
    var object = {};
    object.id = Number(row.children[0].innerText.replace(',', ''));
    object.firstName = row.children[1].innerText;
    object.lastName = row.children[2].innerText;
    object.department = row.children[3].innerText;
    object.client = row.children[4].innerText;

    data.push(object); 

});

// 10. Make each word in the table capitalized.

document.querySelector('.table').classList.add('text-capitalize'); 