import StopWatch from './stop-watch'

// 动画计时器
function AnimationTimer(duration, transducer) {
    this.duration = duration || 1000
    this.transducer = transducer
    this.stopWatch = new StopWatch()
}
AnimationTimer.prototype = {
    start: function() {
        this.stopWatch.start()
    },
    stop: function() {
        this.stopWatch.stop()
    },
    pause: function() {
        this.stopWatch.pause()
    },
    unpause: function() {
        this.stopWatch.unpause()
    },
    isRunning: function() {
        return this.stopWatch.isRunning()
    },
    isPause: function() {
        return this.stopWatch.isPause()
    },
    reset: function() {
        this.stopWatch.reset()
    },
    isExpired: function() {
        return this.stopWatch.getElapsedTime() > this.duration
    },
    getRealElapsedTime: function() {
        return this.stopWatch.getElapsedTime()
    },
    getElapsedTime: function() {
        var elapsedTime = this.stopWatch.getElapsedTime(),
            precentComplete = elapsedTime / this.duration
        if (precentComplete >= 1) {
            precentComplete = 1.0
        }
        if (!!this.transducer && precentComplete > 0) {
            elapsedTime = elapsedTime * (this.transducer(precentComplete) / precentComplete)
        }
        return elapsedTime
    }
}

AnimationTimer.makeEaseOutTransducer = function(strength) {
    return function(percentComplete) {
        strength = strength || 1.0

        return 1 - Math.pow(1 - percentComplete, strength * 2)
    }
}

AnimationTimer.makeEaseInTransducer = function(strength) {
    strength = strength || 1.0

    return function(percentComplete) {
        return Math.pow(percentComplete, strength * 2)
    }
}

AnimationTimer.makeEaseInOutTransducer = function() {
    return function(percentComplete) {
        return percentComplete - Math.sin(percentComplete * 2 * Math.PI) / (2 * Math.PI)
    }
}

AnimationTimer.makeElasticTransducer = function(passes) {
    passes = passes || 3

    return function(percentComplete) {
        return ((1 - Math.cos(percentComplete * Math.PI * passes)) *
   (1 - percentComplete)) + percentComplete
    }
}

AnimationTimer.makeBounceTransducer = function(bounces) {
    var fn = AnimationTimer.makeElasticTransducer(bounces)

    bounces = bounces || 2

    return function(percentComplete) {
        percentComplete = fn(percentComplete)
        return percentComplete <= 1 ? percentComplete : 2 - percentComplete
    }
}

AnimationTimer.makeLinearTransducer = function() {
    return function(percentComplete) {
        return percentComplete
    }
}

export default AnimationTimer
