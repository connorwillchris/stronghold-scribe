
// get the elements
const randomNameBtn = <HTMLButtonElement>document.getElementById('randomNameBtn');
const charNameTxt = <HTMLInputElement>document.getElementById('charNameTxt');

// get the json file
let jRandomName;
let jRandomNameLen;

function getRandomNum(m: number): number {
    return Math.floor(Math.random() * m);
}

fetch('../rpg/5e/randomNames.json')
    .then(response => response.json())
    .then(json => {
        jRandomName = json;
        jRandomNameLen = Object.keys(json).length;
    });

// get a bunch of random names

randomNameBtn.onclick = () => {
    let name = jRandomName[getRandomNum(jRandomNameLen)];
    charNameTxt.value = `${name}`;
};
