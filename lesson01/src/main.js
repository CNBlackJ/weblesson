import 'normalize.css'
import './main.css'
import pokemonGif from 'pokemon-gif'

const btn = document.getElementsByClassName('btn')[0]

btn.addEventListener('click', () => {
  const randomImg = Math.ceil(Math.random() * 721)
  const gifUrl = pokemonGif(randomImg)
  if (gifUrl) {
    const img = document.createElement('img')
    img.src = gifUrl
    const body = document.getElementsByTagName('body')[0]
    body.removeChild(btn)
    body.appendChild(img)
  }
})
