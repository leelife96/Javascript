function openPlayerConfig() {
    plyaerConfigOverlayElement.style.display = 'block';
    backdropElement.style.display = 'block';
}   

function closePlayerConfig() {
    plyaerConfigOverlayElement.style.display = 'none';
    backdropElement.style.display = 'none';
}

function savePlyaerConfig (event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const enteredPlayername = formData.get('playername');
    console.log(enteredPlayername);
}