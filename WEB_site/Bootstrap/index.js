const myCard = document.getElementById('card-body');
const myCardText = document.getElementById('card-text');


myCard.addEventListener('mouseover',()=>{
    console.log('호버');
    myCardText.textContent = "오늘도 화이팅";
});
myCard.addEventListener('mouseout',()=>{
    console.log('호버아웃');
    myCardText.textContent = "안녕하세요";

});