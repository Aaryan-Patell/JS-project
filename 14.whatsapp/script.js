var allstatus = document.querySelector('.allstatus')
var arr = [
    {
        name: 'coding_vibess',
        dp: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kZGluZ3xlbnwwfHwwfHx8MA%3D%3D',
        profile: 'https://images.unsplash.com/photo-1502951682449-e5b93545d46e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29kZGluZ3xlbnwwfHwwfHx8MA%3D%3D',
        time : '12'
    },
    {
        name: 'Hananeh Reisi',
        dp: 'https://images.unsplash.com/photo-1731484636246-ba9365148d60?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDExOXx0b3dKWkZza3BHZ3x8ZW58MHx8fHx8',
        city: 'New York',
        profile: 'https://images.unsplash.com/photo-1734484476823-b85473816c39?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D',
        like: '2k',
        com: '453',
        share: '19',
        time : '22'
    },
    {
        name: 'Frank Flores',
        dp: 'https://images.unsplash.com/photo-1731341711971-dc38777a69e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEyMHx0b3dKWkZza3BHZ3x8ZW58MHx8fHx8',
        city: 'Delhi',
        profile: 'https://images.unsplash.com/photo-1724722154056-f57482d540d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D',
        like: '10k',
        com: '1.2k',
        share: '567',
        time : '19'
    },
    {
        name: 'Taylor Friehl',
        dp: 'https://images.unsplash.com/photo-1732053890668-1df891b0e8af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwOXx0b3dKWkZza3BHZ3x8ZW58MHx8fHx8',
        city: 'London',
        profile: 'https://images.unsplash.com/photo-1731607051748-620edac3fb60?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D',
        like: '34k',
        com: '12k',
        share: '2.4k',
        time : '1'
    },
    {
        name: 'Sung Jin Cho',
        dp: 'https://images.unsplash.com/photo-1619451831105-599f9b2b94f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDg2fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D',
        city: 'Paris',
        profile: 'https://plus.unsplash.com/premium_photo-1734415329531-52f09005961c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE1fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D',
        like: '3.2k',
        com: '2.3k',
        share: '344',
        time : '33'
    },
    {
        name: 'Kyle McLedeo',
        dp: 'https://plus.unsplash.com/premium_photo-1727895542760-7afe342a93c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDExMHx0b3dKWkZza3BHZ3x8ZW58MHx8fHx8',
        city: 'Mumbai',
        profile: 'https://images.unsplash.com/photo-1733371001616-0341f62c56c1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDYxfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D',
        like: '34.5k',
        com: '5.6k',
        share: '345',
        time : '28'
    },
    {
        name: 'Quan Jing',
        dp: 'https://images.unsplash.com/photo-1535579710123-3c0f261c474e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDgzfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D',
        city: 'London',
        profile: 'https://images.unsplash.com/photo-1733036432312-9db8f19fad01?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDc0fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D',
        like: '231k',
        com: '124k',
        share: '34k',
        time : '56'
    }
]

var sum = ''
arr.forEach(function (elem, idx) {
    sum = sum + ` <div class="story" id=${idx}>
                <img  src=${elem.dp} alt="">
                <div class="text">
                    <h4>${elem.name}</h4>
                    <h6>${elem.time} minutes ago</h6>
                </div>
            </div>`

})


allstatus.innerHTML = sum

var full = document.querySelector('.full')

var growth = document.querySelector('.growth')

var story = document.querySelector('.story')


allstatus.addEventListener('click', function (dets) {

    var value = arr[dets.target.id].profile

    full.style.backgroundImage = `url(${value})`
    

    grow = 0
 var a = setInterval(function(){
    
     full.style.display = 'block'
     grow++
     growth.style.width = grow + '%'

     
 },30)

 setTimeout(function(){
    clearInterval(a)
    full.style.display = 'none'
    
 },3000)


})