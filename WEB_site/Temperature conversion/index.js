const temInput = document.getElementById('temInput');
const cRadio = document.getElementById('cRadio');
const fRadio = document.getElementById('fRadio');
const resultP = document.getElementById('resultP');



function convert(){
    tem = Number(temInput.value); 
    
    if(cRadio.checked){
        result = tem * 9 / 5 + 32
        resultP.textContent = `${result.toFixed(1)} °F`
        
    }
    else if(fRadio.checked){
        result = (tem - 32) * (5/9)
        resultP.textContent = `${result.toFixed(1)} °C`
    }
    else{
        resultP.textContent = "Select a unit!"
    }
}