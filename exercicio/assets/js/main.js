
function calculo(){
    let peso = document.getElementById('peso');
    let altura = document.getElementById('altura');
    let diag = document.getElementById('resultado')

    imcBruto = peso.value / (altura.value * altura.value)
    imc = imcBruto.toFixed(1)

    if(imc < 18.5){
        diag.innerHTML="Abaixo do peso";
        diag.classList.add("ruim");

    }else if(imc > 18.5 && imc <= 24.9){
        diag.innerHTML="Normal";
        diag.classList.add("bom");
    }else if(imc > 25 && imc <= 29.9){
        diag.innerHTML="Sobrepeso";
        diag.classList.add("bom");

    }else if(imc > 30 && imc <= 34.9){
        diag.innerHTML="Obesidade grau 1";
        diag.classList.add("mRuim");

    }else if(imc > 35 && imc <= 39.9){
        diag.innerHTML="Obesidade grau 2";
        diag.classList.add("pessimo");

    }else if(imc > 40){
        diag.innerHTML="Obesidade grau 3";
        diag.classList.add("pessimo");
    }
}
