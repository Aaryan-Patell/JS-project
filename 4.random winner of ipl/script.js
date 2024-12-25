var h2 = document.querySelector('h2')
var btn = document.querySelector('button')
var arr = ['CSK','RCB','MI','KKR','GT','LSG','RR','SRH','DC','PBKS']

var random = Math.floor(Math.random()*arr.length)

btn.addEventListener('click',function(){

    var random = Math.floor(Math.random()*arr.length)

    h2.innerHTML=arr[random]
    console.log(arr[random]);
    
})








