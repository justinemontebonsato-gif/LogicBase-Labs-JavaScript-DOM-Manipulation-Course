const headerElement = document.querySelector('.title');

// headerElement.addEventListener('click', (event) => {
//     console.log(event);
// })

//click event
headerElement.addEventListener('click', (event) => {
    console.log(event);
})

//mouse events
const balanceSummary = document.querySelector('.balance-summary');
balanceSummary.addEventListener('mouseleave', (event2) => {
    console.log(event2);
})

//input events and clipboard events
const category = document.querySelector('#category');
category.addEventListener('input', (event3) => {
    console.log(event3);
})

//form events
const formElement = document.querySelector('form');
console.log(formElement);

// 1. On form 'submit', event.target is the <form> itself. Forms automatically map any name="..." attribute as a property, allowing shorthand like event.target.amount.value.
// 2. For regular elements (like buttons or divs), event.target is just the exact DOM node you clicked (e.g. event.target.value). Only forms have that special name-to-property mapping!
formElement.addEventListener('submit', (event4) => {
   event4.preventDefault(); 
    console.log(event4.target.amount.value);
    console.log(event4.target.category.value); 
})