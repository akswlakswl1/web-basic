//랜덤으로 주사위 꺼내내는 로직임
//6까지만 인풋을 적용할 수 있나? -> 태그에서 적용 가능

const numInput = document.getElementById('numInput');
const rollBtn = document.getElementById('rollBtn');
const diceResult = document.getElementById('diceResult')
const diceImages = document.getElementById('diceImages')

function RollDice(){
    const values = [];
    const images = [];
    num = Number(numInput.value);
    for (let i = 0; i < num; i++) {
        const value = Math.floor(Math.random() * 6) +1;
        values.push(value);
        images.push(`<img src=dice_img/${value}.png alt="Dice ${value}">`);
    }
    diceResult.textContent = `dice: ${values.join(', ')}`;
    diceImages.innerHTML = images.join('');
}


