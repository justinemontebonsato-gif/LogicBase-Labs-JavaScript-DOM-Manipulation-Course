// Create new Elements
const BALSUMCONTAINER = document.querySelector('.balance-summary');
let divElement = document.createElement('div');
console.dir(divElement);
divElement.className = 'new-div';
divElement.setAttribute('id', 'balsum-new-div');
divElement.setAttribute('title', 'New Div Element');

const H3ELEMENT = BALSUMCONTAINER.querySelector('h3');

// prepend adds something at the beginning of a container
BALSUMCONTAINER.prepend(divElement);

// insertBefore adds something before a thing
BALSUMCONTAINER.insertBefore(divElement, H3ELEMENT);

// best practice. append accepts everything.
BALSUMCONTAINER.append(divElement);

// oldschool. appendChild only accepts nodes.
