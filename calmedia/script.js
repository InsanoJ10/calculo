function calcularmedia(){
    var no1 = parseFloat(document.getElementById("n1").value)
    var no2 = parseFloat(document.getElementById("n2").value)
    var no3 = parseFloat(document.getElementById("n3").value)
    var res = document.getElementById("res")
    var media = (no1 + no2 + no3) / 3
    if(media >= 7){
        res.textContent = `${media.toFixed(2)} - Passou de ano`
    }else{
        res.textContent = `${media.toFixed(2)} - Reprovou otario`
    }
}