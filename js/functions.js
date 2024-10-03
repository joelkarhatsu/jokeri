const button = document.querySelector('button'); 
const table = document.querySelector('table');   
const counterParagraph = document.querySelector('p'); 

let rowCount = 0; 

function getRandomNumber() {
    return Math.floor(Math.random() * 10); 
}


function addJokeriRow() {
    const row = table.insertRow(); 

   
    for (let i = 0; i < 7; i++) {
        const cell = row.insertCell(); 
        cell.textContent = getRandomNumber(); 
    }

    rowCount++; 
    counterParagraph.textContent = `Arvottuja rivejä: ${rowCount}`;
}



button.addEventListener('click', addJokeriRow);