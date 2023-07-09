// get the elements
const randomNameBtn = document.getElementById('randomNameBtn');
const charNameTxt = document.getElementById('charNameTxt');
// get the json file
let jRandomName;
let jRandomNameLen;
function getRandomNum(m) {
    return Math.floor(Math.random() * m);
}
// get the JSON at the document root
fetch('/rpg/5e/randomNames.json')
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
