import 'normalize.css'
import './main.css'
import 'modernizr'
import musicUrl from './The_End_Of_The_World.mp3'

const container = document.getElementById('music')

if (Modernizr.audio) {
  const music = new Audio(musicUrl)
  music.controls = 'controls'
  container.appendChild(music)
} else {
  const musicIntro = document.createElement('p')
  musicIntro.textContent = '刘德华演唱的浪子心声是电影《追龙》的插曲。'
  container.appendChild(musicIntro)
}

const title = document.createElement('h1')
title.innerText = 'DOM 实践'

const grids = document.createElement('div')
grids.setAttribute('class', 'pure-g')

const app = document.getElementById('app')
app.appendChild(title)
app.appendChild(grids)

const button = document.getElementById('btn')

button.addEventListener('click', () => {
  title.style.transform = 'rotateX(180deg)'
  setTimeout(() => {
    title.style.transform = 'rotateX(360deg)'
  }, 1000)
})
