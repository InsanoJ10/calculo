function printa(){
    var texto = document.getElementById('i1').value
    var printTexto = document.getElementById('printTexto')
    printTexto.textcontent = `seu nome é ${texto}`
    
    var cor = document.getElementById('i2').value
    var printcolor = document.getElementById('printcolor')
    printcolor.textContent = `A cor escolhida foi ${cor}`

    var data = document.getElementById('i3').value
    var printdata = document.getElementById('printdata')
    printdata.textContent = `A data escolhida foi ${data}`
    
    
    var check = document.getElementById('i4').value
    var printcheck = document.getElementById('printcheck')
    printcheck.textContent = `A check escolhida foi ${check}`

    var apareca = document.getElementById('apareca')
    apareca.style.display = `block`



    
    
    
    console.log(texto, typeof texto);
    console.log(cor, typeof cor);
    console.log(data, typeof data);
    
}