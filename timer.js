class Timer {
    constructor(startButton, pauseButton, durationInput, callbacks) {
        this.startButton = startButton;
        this.pauseButton = pauseButton;
        this.durationInput = durationInput;
        if (callbacks) {
            this.onStart = callbacks.onStart;
            this.onTick = callbacks.onTick;
            this.onCompleted = callbacks.onCompleted;
        }

        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click', this.pause);
    }

    start = () => {
        if (this.onStart) {
            this.onStart(this.timeRemaining);
        }
        this.tick();
        this.interval = setInterval(this.tick, 50)
    };

    tick = () => {
        //Option One
        // const timeRemaining = parseFloat(this.durationInput.value);
        // this.durationInput.value = timeRemaining - 1;
        if (this.timeRemaining <= 0) {
            this.pause();
            if (this.onCompleted) {
                this.onCompleted();
            }
        } else {
            //OPtion Two
            this.timeRemaining = this.timeRemaining - 0.05;
            if (this.onTick) {
                this.onTick(this.timeRemaining);
            }
        }

    };

    //getters and setters
    get timeRemaining() {
        return parseFloat(this.durationInput.value)
    }

    set timeRemaining(time) {
        this.durationInput.value = time.toFixed(2);
    }

    pause = () => {
        clearInterval(this.interval)
    }

}