let productNameInputElement = document.getElementById('product-name');
let remainingCharsElement = document.getElementById('remaining-chars');

let maxAllowedChars = productNameInputElement.maxLength;

// console.dir(productNameInputElement.maxLength);

function updateRemainingCharacters(event) {
    let enteredText = event.target.value;
    let enteredTextLength = enteredText.length;  

    let remainingCharacters = maxAllowedChars - enteredTextLength;

    remainingCharsElement.textContent = remainingCharacters;
}

if (remainingCharacters === 0) {
    remainingCharsElement.classList.add('error');
    productNameInputElement.classList.add('error');
} else if (remainingCharacters <= 10) {
    remainingCharsElement.classList.add('warning');
    productNameInputElement.classList.add('warning');
    remainingCharsElement.classList.remove('error');
    productNameInputElement.classList.remove('error');
}


else {
    remainingCharsElement.classList.remove('error', 'warning');
    productNameInputElement.classList.remove('error', 'warning');
   
}

productNameInputElement.addEventListener('input', updateRemainingCharacters)

