
var btn = document.querySelector('button')
var h1 = document.querySelector('h1')
var grow = document.querySelector('.grow')
var h2 = document.querySelector('h2')


var r = Math.floor(Math.random()*10)
 var growth = 0
btn.addEventListener('click',function(){
   var a= setInterval(() => {
        
        growth++
        
        grow.style.width= growth + '%'
        h1.innerHTML = growth + '%'
        
    }, r*10);
    setTimeout(() => {
        clearInterval(a)
        btn.style.pointerEvents ='none'
        btn.innerHTML = 'Downloaded'
    }, r*1000);
   


    h2.innerHTML = `Download complete in ${r}s`
    
})
