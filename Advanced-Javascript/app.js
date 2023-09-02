// document.body.children[1].children[0].href = 'https://google.com';

let anchorElement = document.getElementById('external-link');
anchorElement.href = 'https://google.com';

anchorElement = document.querySelector('#external-id'); // a { color : red; }
anchorElement.href = 'https://academind.com';

let newAnchorElement = document.createElement('a');

let fistParagraph = document.querySelector('p');
fistParagraph.append(newAnchorElement);