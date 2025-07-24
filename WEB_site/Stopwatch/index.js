startbtn = document.getElementById('startBtn');
stopBtn = document.getElementById('stopBtn');
resetBtn = document.getElementById('resetBtn');


let time = 0;
let isStart = false;
let interval;

startBtn.addEventListener('click', () => {
    console.log('시작');
    if (isStart === false) {
        isStart = true;
        interval = setInterval(()=>{
            time += 10;
            updateClock();
        },10);
    }

});

stopBtn.addEventListener('click', () => {
    console.log('멈춤');
    isStart = false;
    clearInterval(interval);
});

resetBtn.addEventListener('click', () => {
    console.log('리셋');
    isStart = false
    time = 0;
    clearInterval(interval);
    document.getElementById('clock').textContent = '00:00:00:00'
});

function updateClock() {
    const ms = time % 1000;
    const totalSeconds = Math.floor(time / 1000);
    const seconds = totalSeconds % 60;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const hours = Math.floor(totalSeconds / 3600);

    const formatted =
        String(hours).padStart(2, '0') + ':' +
        String(minutes).padStart(2, '0') + ':' +
        String(seconds).padStart(2, '0') + ':' +
        String(Math.floor(ms / 10)).padStart(2, '0');

    document.getElementById('clock').textContent = formatted;
}

