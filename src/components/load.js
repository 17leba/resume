import Config from '../config'
var sourceNums = 0,
    sourceArr = []
    // 检测是否为数组或者对象
var checkSource = {
    checkType: function(source) {
        if (this.isArray(source) || this.isObject(source)) {
            return true
        }
        return false
    },
    isArray: function(obj) {
        return Array.isArray(obj) || toString.call(obj) === '[object Array]'
    },
    isObject: function(obj) {
        return toString.call(obj) === '[object Object]'
    }
}

var loadSources = {
    progress: 0,
    init: function(source, callback) {
        if (!checkSource.checkType(source)) {
            alert('载入资源格式为数组或者对象！')
            return false
        }
        if (checkSource.isArray(source)) {
            // 数组格式
            var len = source.length
            for (var i = 0; i < len; i++) {
                sourceNums += source[i].length
            }
            sourceArr = source
        }

        if (checkSource.isObject(source)) {
            // 对象格式
            for (var j in source) {
                // 统计资源总数
                sourceNums += source[j].length
                sourceArr.push(source[j])
            }
        }
        this.loadMain(sourceArr, callback)
    },
    loadMain: function(obj, callback) {
        var that = this,
            imageObj = obj[0],
            mediaObj = obj[1],
            jsonObj = obj[2],
            imageId = 0,
            mediaId = 0
        var mediaHandler = function() {
            Config.mediaSource.push(this)
            mediaId++
            if (mediaId < mediaObj.length) {
                loadMedia()
            }
            that.progress = (imageId + mediaId) / sourceNums
            that.showProgressBar(that.progress)

            this.removeEventListener('canplay', mediaHandler, false)

            if (mediaId === mediaObj.length) {
                callback()
            }
        }
        var loadImg = function() {
            var image = new Image()
            image.src = imageObj[imageId]

            image.onload = function() {
                if (image.complete === true) {
                    Config.imgSource.push(image)
                    imageId++
                    if (imageId < imageObj.length) {
                        loadImg()
                    }
                    that.progress = imageId / sourceNums
                    that.showProgressBar(that.progress)
                    if (imageId === imageObj.length) {
                        loadMedia()
                    }
                }
            }
            image.error = function() {
                imageId++
                loadImg()
                that.progress = parseFloat(imageId / sourceNums).toFixed(2)
                that.showProgressBar(that.progress)
            }
        }

        function loadMedia() {
            var media = document.createElement('audio')
            media.src = mediaObj[mediaId]
            if (/iPad|iPhone/i.test(navigator.userAgent)) {
                Config.mediaSource.push(media)
                mediaId++
                if (mediaId < mediaObj.length) {
                    loadMedia()
                } else {
                    that.showProgressBar(1)
                    callback()
                }
            } else {
                media.addEventListener('canplay', mediaHandler, false)
            }
        }
        // 获得canvas sprite的位置信息
        for (var i = 0; i < jsonObj.length; i++) {
            this.getLocJson(jsonObj[i])
        }
        loadImg()
    },
    dealXmlHttp: function(xmlHttp) {
        var responseText = JSON.parse(xmlHttp.responseText),
            jsonName = responseText.meta.image.replace(/(.png|.jpeg|.jpg|.gif)$/i, '')
        Config.jsonObj[jsonName] = responseText.frames
    },
    getLocJson: function(jsonObj) {
        var jsonName = jsonObj.meta.image.replace(/(.png|.jpeg|.jpg|.gif)$/i, '')
        Config.jsonObj[jsonName] = jsonObj.frames
    },
    showProgressBar: function(p) {
        var progress = parseInt(p * 100)
        document.getElementById('load-precent').style.width = 500 * progress / 100 + 'px'
        document.getElementById('load-precent-nums').innerHTML = progress + '%'
    },
    showPrecentNums: function(precents) {
        document.getElementById('load-precent-nums').innerHTML = precents + '%'
    }
}

export default loadSources
