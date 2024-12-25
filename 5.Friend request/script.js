var btn = document.querySelector('button')
var h5 = document.querySelector('h5')

flag = 0
btn.addEventListener('click',function(){
    if(flag==0){
        btn.innerHTML = '<i class="ri-user-add-fill"></i>cancel request'
        h5.innerHTML = 'Request sent'
        btn.style.backgroundColor ='#777'
        
        setTimeout(() => {
            btn.innerHTML = '<i class="ri-user-add-fill"></i>Remove friend'
        h5.innerHTML = 'Friends'
        btn.style.backgroundColor ='rgb(200,0,0)'

        }, 3000);
    flag = 1
    }

    else{
                    btn.innerHTML = '<i class="ri-user-add-fill"></i>Add friend'
        h5.innerHTML = '22 mutual friends'
        btn.style.backgroundColor ='rgb(0,0,255)'
        flag = 0
    }
})













