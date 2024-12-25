var bulb = document.querySelector('.bulb')
var btn = document.querySelector('button')

flag = 1
btn.addEventListener('click', function () {

    if (flag == 1) {
        bulb.style.backgroundColor = 'white'
        flag = 0
    }
    else {
        bulb.style.backgroundColor = 'yellow'
        flag = 1
    }
})