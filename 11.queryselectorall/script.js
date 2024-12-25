var btn = document.querySelectorAll('button')
var body = document.querySelector('body')

btn.forEach(function(elem){
    elem.addEventListener('click',function(dets){
    body.style.backgroundColor = elem.innerHTML
    

    })
    
})