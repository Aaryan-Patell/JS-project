var body = document.querySelector('body')
var img = document.querySelector('img')

 x = 0
 y = 0
body.addEventListener('keydown',function(dets){
    console.log(dets.code);
  
    
    if(dets.code == 'ArrowRight' && y<80){
        y++
        img.style.left = y + '%'
    }
    else if(dets.code == 'ArrowLeft' && y>0){
        y--
        img.style.left = y + '%'
        
    }
    else if(dets.code == 'ArrowUp' && x>0){
        x--
        img.style.top = x + '%'
    }
    else if (dets.code == 'ArrowDown' && x<75){
        x++
        img.style.top = x + '%'
        
    }
    
})