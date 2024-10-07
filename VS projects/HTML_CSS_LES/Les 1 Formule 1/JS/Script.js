function showMessage() {
    alert('Welkom bij de Formule 1 fanpagina!');
    //Sends an alert on joining the page
}
window.onload = showMessage;

function changeBackground(color) {
    document.body.style.backgroundColor = color;
    //Changes the background color on button click
}

function changeTextColor(color) {
    document.querySelector('h1').style.color = color;
    //changes the letter color on the header
}
