function check(){
    var wasborn = parseInt(document.getElementById('birth').value)
    var res = document.getElementById('result')
    var clientAge = document.getElementById('age')


    if(isNaN(wasborn)){
        res.textContent = 'type only numbers dumbass 🚫'
        res.style.color = 'red'
        return
    }

    const thisYear = new Date().getFullYear()
    const age = thisYear - wasborn

}