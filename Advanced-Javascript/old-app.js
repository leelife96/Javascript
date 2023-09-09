// document.body.children[1].children[0].href = 'https://google.com';

let anchorElement = document.getElementById('external-link');
anchorElement.href = 'https://google.com';

anchorElement = document.querySelector('#external-id'); // a { color : red; }
anchorElement.href = 'https://academind.com';

let newAnchorElement = document.createElement('a');

let fistParagraph = document.querySelector('p');
fistParagraph.append(newAnchorElement);

let firstH1Element = document.querySelector('h1');

firstH1Element.remove();

firstH1Element.parentElement.removeChild(firstH1Element);

fistParagraph.parentElement.append(firstParagraph);