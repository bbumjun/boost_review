// util.js 를 객체리터럴 형태로 만들고, 아래 기능을 포함한다.
// - unique한 방식으로 id를 생성하는 방식
// - delay를 시키는 함수
// - 기타 일반적인 유틸리티 기능이라고 판단되는 기능들
const uuidv1 = require('uuid/v1')
module.exports = {
    getNewID() {
        return uuidv1
    },
    deepcopy(obj) {
        return JSON.parse(JSON.stringify(obj))
    },
   
}