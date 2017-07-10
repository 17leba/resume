// 计时器
function StopWatch(){
    this.startTime = 0
    this.running = false
    this.paused = false
    this.startPauseTime = 0
    this.totalPauseTime = 0
    this.elapsed = 0
}

StopWatch.prototype = {
    start: function(){
        this.startTime = +new Date()
        this.running = true
        this.startPauseTime = 0
        this.totalPauseTime = 0
    },
    stop: function(){
        if (this.paused){
            // 算出总共暂停了多长时间
            this.unpause()
        }
        this.elapsed = +new Date() - this.startTime - this.totalPauseTime
        this.running = false
    },
    pause: function(){
        if (this.paused) return
        this.startPauseTime = +new Date()
        this.paused = true
    },
    unpause: function(){
        if (!this.paused) return
        this.totalPauseTime += (+new Date()) - this.startPauseTime
        this.startPauseTime = 0
        this.paused = false
    },
    isRunning: function(){
        return this.running
    },
    isPause: function(){
        return this.paused
    },
    getElapsedTime: function(){
        if (this.running){
            return +new Date() - this.startTime - this.totalPauseTime
        }
        return this.elapsed
    },
    reset: function(){
        this.startTime = 0
        this.running = false
        this.paused = false
        this.startPauseTime = 0
        this.totalPauseTime = 0
        this.elapsed = 0
    }
}

export default StopWatch
