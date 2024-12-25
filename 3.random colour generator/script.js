var btn = document.querySelector('button')
var main = document.querySelector('.main')
var child1 = document.querySelector('.child1')
var child2 = document.querySelector('.child2')




btn.addEventListener('click', function () {
    var c1 = Math.floor(Math.random() * 100)
    var c2 = Math.floor(Math.random() * 200)
    var c3 = Math.floor(Math.random() * 250)


    main.style.backgroundColor = `rgb(${c1},${c3},${c3})`
    child1.style.backgroundColor = `rgb(${c2},${c1},${c2})`
    child2.style.backgroundColor = `rgb(${c1},${c2},${c1})`



    
})


