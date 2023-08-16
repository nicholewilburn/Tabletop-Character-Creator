
//Generate a random number between 1-20
function roll1d20 () {
    let ranNum = Math.floor(20 * Math.random()) + 1;
    console.log(ranNum);
    return ranNum;
}

//Strength
const strField = document.getElementById('strField');
const strBtn = document.getElementById('strBtn');
strBtn.addEventListener('click', generateStr);

let strRolled = false;
function generateStr () {
    if (strRolled = false) {
    const newStr = roll1d20();
    strField.value= newStr;
    strBtn.disabled = true;
    strRolled = true;
    console.log("STR was rolled!");
    }
}

//Dexterity
const dexField = document.getElementById('dexField');
const dexBtn = document.getElementById('dexBtn');
dexBtn.addEventListener('click', generateDex);

let dexRolled = false;
function generateDex () {
    if (dexRolled = false) {
    const newDex = roll1d20();
    dexField.value= newDex;
    dexBtn.disabled = true;
    dexRolled = true;
    console.log("DEX was rolled!");
    }
}

//Constitution
const conField = document.getElementById('conField');
const conBtn = document.getElementById('conBtn');
conBtn.addEventListener('click', generateCon);

let conRolled = false;
function generateCon () {
    if (conRolled = false) {
    const newCon = roll1d20();
    conField.value= newCon;
    conBtn.disabled = true;
    conRolled = true;
    console.log("CON was rolled!");
    }
}

//Intelligence
const intField = document.getElementById('intField');
const intBtn = document.getElementById('intBtn');
intBtn.addEventListener('click', generateInt);

let intRolled = false;
function generateInt () {
    if (intRolled = false) {
    const newInt = roll1d20();
    intField.value= newInt;
    intBtn.disabled = true;
    intRolled = true;
    console.log("INT was rolled!");
    }
}

//Wisdom
const wisField = document.getElementById('wisField');
const wisBtn = document.getElementById('wisBtn');
wisBtn.addEventListener('click', generateWis);

let wisRolled = false;
function generateWis () {
    if (wisRolled = false) {
    const newWis = roll1d20();
    WisField.value= newWis;
    WisBtn.disabled = true;
    WisRolled = true;
    console.log("WIS was rolled!");
    }
}

//Charisma
const chaField = document.getElementById('chaField');
const chaBtn = document.getElementById('chaBtn');
chaBtn.addEventListener('click', generateCha);

let chaRolled = false;
function generateCha () {
    if (chaRolled = false) {
    const newCha = roll1d20();
    chaField.value= newCha;
    chaBtn.disabled = true;
    chaRolled = true;
    console.log("CHA was rolled!");
    }
}
