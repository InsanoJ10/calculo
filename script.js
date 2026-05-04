function somar(){
    var numero1 = document.getElementById("n1").valueAsNumber
    var numero2 = document.getElementById("n2").valueAsNumber
    var res = document.getElementById("res")
    res.textContent = numero1 + numero2
}
function dividir(){
    var n1 = parseFloat(document.getElementById("d1").value)
    var n2 = parseFloat(document.getElementById("d2").value)
    var res = document.getElementById("resposta")
if(n2 !== 0){
    res.textContent = n1 / n2
}else{
    res.textContent = "não se divide por 0 burro"
}
}
function subtracao(){
    var numero1 = document.getElementById("s1").valueAsNumber
    var numero2 = document.getElementById("s2").valueAsNumber
    var res = document.getElementById("resp")
    res.textContent = numero1 - numero2
}
function mult(){
     var numero1 = document.getElementById("m1").valueAsNumber
    var numero2 = document.getElementById("m2").valueAsNumber
    var res = document.getElementById("respo")
    res.textContent = numero1 * numero2
}





