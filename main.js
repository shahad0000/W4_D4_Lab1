
// 1
let h1 = document.getElementsByClassName('first')[0];
h1.style.backgroundColor = "black";
h1.style.color = "white";


// 2
let pElement = document.getElementById('req-2');
pElement.style.fontWeight = "bold";

// 3
let imgElement = document.getElementsByTagName('img')[0].src = "/image.png";

// 4
let ul = document.querySelector("#list");
let item1 = document.createElement('li');
let item2 = document.createElement('li');
let item3 = document.createElement('li');

item1.style.border = "1px solid gray";
item2.style.border = "1px solid gray";
item3.style.border = "1px solid gray";

item1.style.color = "darkblue";
item2.style.color = "darkblue";
item3.style.color = "darkblue";

item1.style.display = "inline";
item2.style.display = "inline";
item3.style.display = "inline";

item1.innerText = "one";
item2.innerText = "two";
item3.innerText = "three";

ul.appendChild(item1);
ul.appendChild(item2);
ul.appendChild(item3);

// 5
let table = document.createElement("table");
let row1 = document.createElement('tr');
let row2 = document.createElement('tr');


let col1 = document.createElement('td');
let col2 = document.createElement('td');
let col3 = document.createElement('td');
let col4 = document.createElement('td');

col1.innerText = "col 1";
col2.innerText = "col 2";
col3.innerText = "col 3";
col4.innerText = "col 4";


row1.appendChild(col1);
row1.appendChild(col2);

row2.appendChild(col3);
row2.appendChild(col4);

table.appendChild(row1);
table.appendChild(row2);

document.body.appendChild(table)
