const fs = require('fs')

fs.readFile('data.json', 'utf8', (err, data) => {
    const jsondata = JSON.parse(data)
    getMatchedType(jsondata, 'sk')

})

Array.prototype.customForEach = function (callback) {
    for (item of this) {
        callback(item)
    }
}
Array.prototype.customMap = function (callback) {
    let result = []
    for (item of this) {
        result.push(callback(item))
    }
    return result
}
Array.prototype.customFilter = function (callback) {
    let result = []
    for (item of this) {
        if (callback(item)) result.push(item)
    }
    return result
}
Array.prototype.customReduce = function (callback, initVal) {
    let result, initCnt
    if (initVal) {
        initCnt = 0
        result = initVal
    } else {
        initCnt = 1
        result = this[0]
    }
    for (let i = initCnt; i < this.length; i++) {
        if (i == 0 && initVal == undefined) continue
        result = callback(result, this[i])
    }
    return result
}


function getMatchedType(jsondata, type) {
    let matchedList = []

    ;(function recursive(data, type) {
        data.customForEach(item => {
            if(item.type===type) matchedList.push(item.name)
            if(item.childnode.length) recursive(item.childnode, type)
        })
    })(jsondata, type)
    let result=matchedList.customReduce((accumulator,currentVal)=>`${accumulator}, "${currentVal}"`,`${type} 타입 데이터는 총 ${matchedList.length}개이며`)
    result+=" 입니다."
    console.log(result)
}