                // grabbing the child elements
/*
    const GRANDPARENT = document.querySelector('.main-content');
    const PARENT = GRANDPARENT.children[1];

    const CHILDREN = PARENT.children;

    console.log(CHILDREN);

    console.log(CHILDREN[2]);

    console.log(GRANDPARENT.querySelectorAll('.transaction-item'));

    console.log(CHILDREN[PARENT.children.length - 1]);
*/



                // grabbing the parent elements
const CHILDREN = document.querySelector('.transaction-item');
const PARENT = CHILDREN.parentElement;
const GRANDPARENT = CHILDREN.closest('.main-content');
console.log(PARENT);
console.log(GRANDPARENT);

                // grabbing the NEXT sibling element
let child1 = CHILDREN;
let child2 = child1.nextElementSibling;
console.log(child1);
console.log(child2);
child2.style.backgroundColor = 'darkgreen';

                // grabbing the PREVIOUS sibling element 
let child4 = PARENT.children[3];
child4.style.backgroundColor = 'darkblue';
let previousOfChild4 = child4.previousElementSibling;
previousOfChild4.style.backgroundColor = 'lightblue';

console.log(child4);
console.log(previousOfChild4);