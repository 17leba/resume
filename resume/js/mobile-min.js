var mobile={init:function(){this.orientation(),this.scaleCanvas(),this.fixShakeDice()},orientation:function(){var a,b;if(a="orientationchange"in window?"orientationchange":"deviceorientation"in window?"deviceorientation":!1,orientationchange){b="orientationchange"in window?function(){var a=window.orientation;0===a||180===a?(document.querySelector(".canvas-main").classList.add("hide"),document.querySelector(".game-cover-wrap").classList.add("hide"),document.querySelector(".orientation-tip").classList.remove("hide")):(document.querySelector(".canvas-main").classList.remove("hide"),document.querySelector(".game-cover-wrap").classList.remove("hide"),document.querySelector(".orientation-tip").classList.add("hide"))}:function(a){alert("con",b);var b=a.alpha;b>45&&135>b||b>225&&315>b?(document.querySelector(".canvas-main").classList.remove("hide"),document.querySelector(".game-cover-wrap").classList.remove("hide"),document.querySelector(".orientation-tip").classList.add("hide")):(document.querySelector(".canvas-main").classList.add("hide"),document.querySelector(".game-cover-wrap").classList.add("hide"),document.querySelector(".orientation-tip").classList.remove("hide"))},window.addEventListener(a,b,!1);var c=document.createEvent("HTMLEvents");c.initEvent(a,!0,!1),document.body.dispatchEvent(c)}},scaleCanvas:function(){var a=window.screen.width>window.screen.height?window.screen.width:window.screen.height,b=(a/1080).toFixed(2);1>b&&(document.querySelector(".game-resume-detail").style.webkitTransform="scale("+b+")",document.querySelector(".game-resume-detail").style.transform="scale("+b+")",document.querySelector(".mini-game-wrap").style.webkitTransform="scale("+b+")",document.querySelector(".mini-game-wrap").style.transform="scale("+b+")",document.querySelector(".canvas-main").style.webkitTransform="scale("+b+")",document.querySelector(".canvas-main").style.transform="scale("+b+")",document.querySelector(".game-cover-wrap").style.webkitTransform="scale("+b+")",document.querySelector(".game-cover-wrap").style.transform="scale("+b+")")},fixShakeDice:function(){Game.prototype.startShakeDice=function(){var a,b,c=this,d="right";this.rollBtn.addEventListener("touchstart",function(e){c.mousedown||c.pauseGameTag||(c.mousedown=!0,a=setInterval(function(){b=c.rollCountSelect.style.width,b=b?parseInt(b):0,c.rollCountSelect.style.width="left"===d?b-10+"px":b+10+"px",b>=190?d="left":0>=b&&(d="right")},16))},!1),this.rollBtn.addEventListener("touchmove",function(a){if(c.mousedown&&!c.pauseGameTag){var b=document.createEvent("HTMLEvents");b.initEvent("mouseup",!0,!1),this.dispatchEvent(b)}},!1),this.rollBtn.addEventListener("touchend",function(){c.mouseup||c.pauseGameTag||(c.mouseup=!0,clearInterval(a),c.playSound(c.diceSound),c.convertRoll(b),c.diceDetailNum(c.diceTotal),c.rollDiceShow(),c.lastRunnerLoc(),c.diceStartRotate())},!1)}}};mobile.init();