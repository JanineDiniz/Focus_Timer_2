import state from "./state.js";
import * as timer from './timer.js'
import * as sounds from './sound.js'

export function toggleRunning(){
  state.isRunning =  true
  if (state.isRunning == false){
    return
  }
  timer.countDown()

  sounds.buttonPressAudio.play()
  document.querySelector('#toggleRunning').classList.add('running')
  document.querySelector('#toggleStop').classList.remove('running')
}
export function toggleStop(){
  state.isRunning = false
  sounds.buttonPressAudio.play()
  document.querySelector('#toggleRunning').classList.remove('running')
  document.querySelector('#toggleStop').classList.add('running')
}
export function reset(){
  state.isRunning = false
  timer.updateDisplay()
}

export function setPlus(){ 
  state.minutes += 5
  timer.updateDisplay()
  toggleStop()
}
export function setMinus(){
  state.minutes -= 5
  timer.updateDisplay()
  toggleStop()
}