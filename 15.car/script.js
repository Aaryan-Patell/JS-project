const red = document.querySelector('#red')
const blue = document.querySelector('#blue')
const black = document.querySelector('#black')
const white = document.querySelector('#white')

 const btnblue = document.querySelector('#btnblue')  
 const btnred = document.querySelector('#btnred')  
 const btnwhite = document.querySelector('#btnwhite')  
 const btnblack = document.querySelector('#btnblack')   
 btnblue.addEventListener('click', function(){
    blue.style.display ="block"
    red.style.display = "none"
    white.style.display='none'
    black.style.display='none'
 })

 btnred.addEventListener('click', function(){
    blue.style.display ="none"
    red.style.display = "block"
    white.style.display='none'
    black.style.display='none'
 })

 btnwhite.addEventListener('click', function(){
    blue.style.display ="none"
    red.style.display = "none"
    white.style.display='block'
    black.style.display='none'
    
 })

 btnblack.addEventListener('click', function(){
    blue.style.display ="none"
    red.style.display = "none"
    white.style.display='none'
    black.style.display='block'
   
 })