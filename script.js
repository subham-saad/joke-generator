// assinging variables
const jokeElement = document.getElementById('joke')
const jokeButton = document.getElementById('joke-button')

jokeButton.addEventListener('click', generateJoke)

generateJoke();

async function generateJoke(){
   const config ={
       headers:{
           Accept: 'application/json'
       }
   }
   const res = await fetch('https://icanhazdadjoke.com',config)
   const data = await res.json()

   jokeElement.innerHTML = data.joke
}
