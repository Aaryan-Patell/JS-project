
var btn = document.querySelector('button')
var body = document.querySelector('body')


    var arr = ['https://imgs.search.brave.com/IG1d858NHU2i2-Kw6_wtky4KM7L9CZuRZjRD8kyove8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxNy8w/NS9JbnNlY3QucG5n', 'https://imgs.search.brave.com/8hrf7BpgFNySK2-MB9iLxggZXgYN9E3hpc6aCD4eqkk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9wbHVz/cG5nLmNvbS9pbWct/cG5nL3BuZy1pbnNl/Y3RzLWluc2VjdC1w/bmctMjExMi5wbmc', 'https://imgs.search.brave.com/Cq7XOEeRPuPSpAQIBg2mmku3gAvqKGLEXsGfSwN3M-M/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxNy8w/NS9JbnNlY3QtRG93/bmxvYWQtUE5HLnBu/Zw', 'https://imgs.search.brave.com/KawZD_IyAl9batHNTJUcvMKBPQJruhx3LXaR9m3HM30/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxNy8w/NS9JbnNlY3QtUE5H/LUhELnBuZw', 'https://imgs.search.brave.com/MGastpJaqeAd9P7cVwRMtAUkOZUsa9yd1OOyFy-1Mbg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5ncGxheS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzEvQnV0/dGVyZmx5LVBORy1U/cmFuc3BhcmVudC1J/bWFnZXMucG5n', 'https://imgs.search.brave.com/4thx_eGvzcgNXd1nSxqx792v6wmqKnVjb1srYcMuxig/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9wbHVz/cG5nLmNvbS9pbWct/cG5nL3BuZy1pbnNl/Y3RzLWRyYWdvbmZs/eS1wbmctaW1hZ2Ut/MTUwMC5wbmc', 'https://imgs.search.brave.com/1ufzQX6sk_t5bbY6n-oCfOKsqrypCFM6FwFnsu_Tabk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxNy8w/NS9JbnNlY3QtUE5H/LUltYWdlLUZpbGUu/cG5n', 'https://imgs.search.brave.com/4HkaeK3vhRSj9_2AGtZvry6YQFIKhAVzuIdg8NzcWF4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nbWFydC5jb20v/ZmlsZXMvMTUvRmx5/aW5nLUJ1Z3MtUE5H/LVBob3Rvcy5wbmc', 'https://imgs.search.brave.com/iSC1e48GLdLM-8zYjX-deO3qruAdhCKjFfsgI2BrVPA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nbWFydC5jb20v/ZmlsZXMvMTYvUmVk/LUxhZHlidWctSW5z/ZWN0LVBORy1GaWxl/LnBuZw', 'https://imgs.search.brave.com/SyS08EZRFT-z3JEvAI7sVnF7ONGwbaKiLwngogmwSsM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nbWFydC5jb20v/ZmlsZXMvNS9JbnNl/Y3QtUE5HLVRyYW5z/cGFyZW50LnBuZw', 'https://imgs.search.brave.com/J6DTdno7Rg1kEaR9a07EUkA0gKDgJIL1Gx40JJGTkWw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9wbHVz/cG5nLmNvbS9pbWct/cG5nL2J1dHRlcmZs/eS1oZC1wbmctb3Jh/bmdlLWJ1dHRlcmZs/eS1wbmctaW1hZ2Ut/YnV0dGVyZmxpZXMt/ZnJlZS1kb3dubG9h/ZC00MjQ2LnBuZw', 'https://imgs.search.brave.com/p0djwqDkn8sr1AX4pMnnU1drH5MAcS7wy_T2mbp3K3M/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jbGlw/YXJ0LWxpYnJhcnku/Y29tL2ltYWdlcy9w/aTVvOHo0aTkucG5n'

    ]

btn.addEventListener('click',function(){
    var x = Math.floor(Math.random()*80)
    var y = Math.floor(Math.random()*80)

    var imgs = Math.floor(Math.random()*arr.length)

    var img = document.createElement('img')
    img.setAttribute('src',arr[imgs])

    img.style.width = '50px'
    img.style.position = 'absolute'

    img.style.top = x +'%'
    img.style.left = y +'%'


body.appendChild(img)

    
})