const canvas = document.getElementById('drawCanvas');
const ctx = canvas.getContext('2d');
const colorPicker = document.getElementById('colorPicker');
const clearButton = document.getElementById('clearButton');

let isDrawing = false;
let lastX = 0;
let lastY = 0;

function draw(event){
    if(!isDrawing) return;
    
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
    [lastX, lastY] = [event.offsetX, event.offsetY];
}



canvas.addEventListener('mousedown',(event) => {
    isDrawing = true;
    [lastX,lastY] = [event.offsetX,event.offsetY]
    ctx.strokeStyle = colorPicker.value;
    ctx.lineWidth   = 2;
    ctx.lineJoin    = 'round';
    ctx.lineCap     = 'round';
})

canvas.addEventListener('mousemove',draw)


canvas.addEventListener('mouseup',()=> {
    isDrawing = false;

})

canvas.addEventListener('mouseout',()=> {
    isDrawing = false;
    
})

colorPicker.addEventListener('input', () => {
    ctx.strokeStyle = colorPicker.value;
  });
  
  clearButton.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  });

