const text = document.getElementById('text');
const textArr = text.innerText.split('');

const newE1 = document.createElement('h1');
newE1.innerHTML=`
${textArr.map(letter => `<span class="letter" style="${randomVisibility()}">${letter}</span>`).join('')}
`;
newE1.classList.add('overlay');

document.body.appendChild(newE1);

function randomVisibility() {
    return Math.random() < 0.5 ? 'visibility:hidden':'visibility:visible';
}