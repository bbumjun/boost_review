const _ = require('lodash')
Checker = class {
    constructor(msg) {
        this.msg = msg;
    }
    bindMembers(names) {
        return (ourMembers)=> {
            return new Promise( (resolve,reject) => {
                //반드시 10밀리세컨드 지연실행되어야만 함
                setTimeout( ()=> {
                    const bMember = this.includeMembers(names, ourMembers);
                    if (bMember) {
                        resolve(this.msg["ok"]);
                    } else {
                        resolve(this.msg["fail"]);
                    }
                }, 10);
            })
        }
    }

    //lodash의 every 메서드를 활용해서 구현
    includeMembers(names, ourMembers) {
        //do something...
       return _.every(names,element=>ourMembers.includes(element))
    }
}

const runner = function (generator, names, ourMembers) {
    //구현..
    const iterator = generator(names,ourMembers)
    const res =iterator.next()
    iterator.next(res.value)
}
module.exports = {Checker,runner}