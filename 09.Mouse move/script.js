var body = document.querySelector('body')
var circle = document.querySelector('.circle')
var h1 = document.querySelector('h1')

body.addEventListener('mousemove',function(elem){
    console.log(elem.x);
    console.log(elem.y);
circle.style.top = elem.y + 'px'
circle.style.left = elem.x + 'px'

    
})
h1.addEventListener('mouseenter', function(){
    circle.style.scale = 3
})

h1.addEventListener('mouseleave', function(){
    circle.style.scale = 1
})