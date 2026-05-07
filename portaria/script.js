function check(){
    var wasborn = parseInt(document.getElementById('birth').value)
    var res = document.getElementById('result')
    var clientAge = document.getElementById('age')


    if(isNaN(wasborn)){
        res.textContent = 'type only numbers dumb bitch 🚫'
        res.style.color = 'red'
        return
    }

    const thisYear = new Date().getFullYear()
    const age = thisYear - wasborn

    if(age >= 18){
        res.textContent = "Over 18, you can come in"
        clientAge.textContent = age
        document.getElementById('v1').style.display = "block"
        document.getElementById('v2').style.display = "none"
    }else{
        res.textContent = "You are under 18, GET THE FUCK OUT 🚫🚫"
        clientAge.textContent = age
        document.getElementById('v1').style.display = "none"
        document.getElementById('v2').style.display = "block"
    }

}
