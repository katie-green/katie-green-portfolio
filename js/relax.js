"use strict";

const circleContainer = document.querySelector('.circleContainer')
const text = document.querySelector('#text')

const totalTime = 7500
const breatheTime = (totalTime / 5) * 2
const holdTime = totalTime / 5

breatheAnimation();

function breatheAnimation () {
    text.innerHTML = 'Breathe In'
    circleContainer.className = 'circleContainer grow'

    setTimeout(() => {
        text.innerText = 'Hold'

        setTimeout(() => {
            text.innerText = 'Breathe Out'
            circleContainer.className = 'circleContainer shrink'
        }, holdTime)

    }, breatheTime)
}

setInterval(breatheAnimation, totalTime)