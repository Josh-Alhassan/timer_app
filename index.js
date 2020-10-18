const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause')

const circle = document.querySelector('circle');

const parameter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', parameter);

let duration;

const timer = new Timer(startButton, pauseButton, durationInput, {
    onStart(totalDuration) {
        duration = totalDuration;
        console.log('Timer has Started');
    },
    onTick(timeRemaining) {
        console.log('Timer is ticking')
        circle.setAttribute('stroke-dashoffset', 
            parameter * timeRemaining / duration - parameter
        );
        // currentOffSet = currentOffSet - 1
    },
    onCompleted() {
        console.log('Timer is completed')
    }
})
// console.log(timer.start())
// timer.start();
