function tempo() {
    var hora = document.getElementById('hora')
    var min = document.getElementById('minu')
    var seg = document.getElementById('segu')

    var data = new Date()

    var hr = data.getHours()
    var min = data.getMinutes()
    var seg = data.getSeconds()

    hora.innerHTML = hr
    minu.innerHTML = min
    segu.innerHTML = seg

    setInterval(tempo, 1000)
}
