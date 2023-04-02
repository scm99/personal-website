window.addEventListener("DOMContentLoaded", askForName);


function askForName(){
    // Prompt Name
    let name = prompt("What's your Name ?");
    // Set Name
    setName(name);
}


function setName(name){
    // Get DOM element
    const nameElement = document.getElementById("visitor-name");
    // Change element
    nameElement.textContent = name;
}