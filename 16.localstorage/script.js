var main = document.querySelector('#main')

var btn = document.querySelector('button')
var themes = document.querySelector('#theme')

main.setAttribute('class', localStorage.getItem('Theme'))




flag = 0

btn.addEventListener('click', function () {
    if (flag == 0) {

      localStorage.setItem('btn','ri-moon-clear-fill')
      
      
        localStorage.setItem('Theme', 'dark')
        main.setAttribute('class', localStorage.getItem('Theme'))
        themes.setAttribute('class',localStorage.getItem('btn'))
        

        flag = 1
    }
    else {
        localStorage.setItem('btn', 'ri-sun-fill')
        
        localStorage.setItem('Theme', 'light')
        main.setAttribute('class', localStorage.getItem('Theme'))
        themes.setAttribute('class', localStorage.getItem('btn'))
        


        flag = 0
    }

})

