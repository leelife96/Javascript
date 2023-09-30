function openPlayerConfig() {
    plyaerConfigOverlayElement.style.display = 'block';
    backdropElement.style.display = 'block';
}   

function closePlayerConfig() {
    plyaerConfigOverlayElement.style.display = 'none';
    backdropElement.style.display = 'none';
    formElement.firstElementChild.classList.remove('error'); 
    errorsOutputElement.textContext = '';  
}

function savePlyaerConfig (event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const enteredPlayername = formData.get('playername').trim(); 

    if(!enteredPlayername) {
        event.target.firstElementChild.classList.add('error');
        errorsOutputElement.textContext = 'Please enter a valid name!';
        return;
    }
}