var h1 = document.querySelector('h1')
var h4 = document.querySelector('h4')
var btn = document.querySelector('button')

var flag = 0
btn.addEventListener('click', function () {
    if (flag == 0) {

        h1.innerHTML = 'Requesting...'
        btn.innerHTML = '.............'

        setTimeout(() => {

            h1.innerHTML = 'Friends...'
            btn.innerHTML = 'Remove friend'
        
        }, 3000);
flag = 1

        
    }
    else {
        h1.innerHTML = 'Stranger'
        btn.innerHTML = 'Add friend'
        flag = 0

    }



})