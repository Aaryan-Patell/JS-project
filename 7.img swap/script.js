var img1 = document.querySelector('.img1')
var img2 = document.querySelector('.img2')
var btn = document.querySelector('button')



btn.addEventListener('click',function(){
    var a =img1.getAttribute('src')
    img1.setAttribute('src',img2.getAttribute('src'))
    img2.setAttribute('src',a)


   
})
