let image = document.querySelector('img')
let button = document.querySelector('button')
let form = document.querySelector('form')
let input = document.querySelector('input')
let h5 = document.querySelector('h5')
form.addEventListener('submit' , Qrgenerator)
   async function Qrgenerator(e){
     e.preventDefault()
        const res = await fetch('https://hindi-jokes-api.onrender.com/jokes/2?api_key=5089e995b73f77f71357470ff358')
        const joke = await res.json()
        h5.innerText = joke.data[0].jokeContent
        h5.style.color = 'red'
    }