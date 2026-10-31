const HEADERELEMENT = document.getElementById('expense-tracker');
console.log(HEADERELEMENT);
const INPUTFIELD = document.getElementById('amount');
console.log(INPUTFIELD);

// HEADERELEMENT.textContent = 'Expense Tracker Application';
HEADERELEMENT.textContent = 'Expense Tracker Application';
console.log(HEADERELEMENT.textContent);
console.log(HEADERELEMENT.innerText);
console.log(HEADERELEMENT.innerHTML);


HEADERELEMENT.style.color = "red";
HEADERELEMENT.style.fontSize = "2rem";
HEADERELEMENT.style.backgroundColor = "chocolate";

const items = document.getElementsByClassName('transaction-item');
console.log(items);

for (let i = 0; i < items.length; i++) {
    console.log(items[i]);
}
for (let i = 0; i < items.length; i++) {
    items[i].style.backgroundColor = "lightgray";
    console.log(items[i].textContent);
}

console.log(document.getElementsByTagName('img'));

console.log(document.querySelector(".label"));
console.log(document.querySelectorAll(".label"));
console.log(document.querySelectorAll("#amount"));
console.log(document.querySelector("p"));
console.log(document.querySelectorAll("p"));
console.log(document.querySelector(".label:nth-child(2)"));
console.log(document.querySelectorAll(".label:nth-child(2)"));

console.log(document.querySelector('[role="button"]'));