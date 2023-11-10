export const kitchenTimer = new Audio('./assets/kichen-timer.mp3')
export const buttonPressAudio = new Audio('./assets/button-press.wav')

const audioFiles = {
forestSound: new Audio('./assets/Floresta.wav'),
coffeeSound: new Audio('./assets/Cafeteria.wav'),
rainSound: new Audio('./assets/Chuva.wav'),
fireSound: new Audio('./assets/Lareira.wav')
}

for (let file in audioFiles) {
  audioFiles[file].loop = true
}

for (let el of document.getElementsByClassName("bgSoundBtn")) {
  el.addEventListener("click", () => {
      el.classList.toggle("active")
      el.classList.toggle('secondary')
      if (el.classList.contains("active")) {
          audioFiles[el.id].play()
      }
      else audioFiles[el.id].pause()
  })
}