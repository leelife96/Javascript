function openPlayerConfig(event) {
    editedPlayer = +event.target.dataset.playerid; // +'1' -> 1
    plyaerConfigOverlayElement.style.display = 'block';
    backdropElement.style.display = 'block';
}   

function closePlayerConfig() {
    plyaerConfigOverlayElement.style.display = 'none';
    backdropElement.style.display = 'none';
    formElement.firstElementChild.classList.remove('error'); 
    errorsOutputElement.textContext = '';  
    formElement.firstElementChild.lastElementChild.value = '';
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

    const updatedPlayerDataElement = document.getElementById('player-' + editedPlayer + '-data');
    updatedPlayerDataElement.children[1].textContent = enteredPlayername;

    players[editedPlayer - 1].name = enteredPlayername;

    closePlayerConfig();
}