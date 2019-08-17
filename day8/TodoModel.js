// - todolist 상태값을 add/update/delete등을 통해서 실제 변경하는 역할
// - ES6 Classes 패턴을 사용할 수 없으며, ES6이전의 **prototype패턴**을 활용해서 만들어야 한다.
// - todolist 데이터만 주입받아서 동작된다.
// - 뒤에 나오는 Observer 기능을 하는 객체는 require로 가져와서 사용한다.
// - console.log로 출력하는 역할을 할 수 있으며, console.log부분을 별도의 클래스로 분리할 수도 있다(선택사항)
const util = require('./util')
function TodoModel (todolist) {
    this.todolist = todolist
}
TodoModel.prototype.show = function(params) {
    const [status] = params
    const type = ['current', 'todo', 'doing', 'done']
    if (params.length !== 1 || !type.includes(status)) throw '잘못된 입력입니다.'
    if (status === 'current') console.log(this.getCurrentStatus())
    else console.log(this.getStatus(status))
}
TodoModel.prototype.getCurrentStatus = function() {
    let listByStatus = []
    const status = ['todo', 'doing', 'done']
    status.forEach(element => {
        const list = this.todolist.filter(item => item.status === element)
        const status = element
        const listById = list.map(item => item.id)
        listByStatus.push({ status, list: listById })
    })
    return listByStatus.reduce((prev, cur) => { return `${prev} ${cur.status}: [${cur.list}],` }, `현재상태 : `).slice(0, -1)

}
TodoModel.prototype.getStatus = function(status) {
    const listByStatus = this.todolist.filter(element => element.status === status)
    return listByStatus.reduce((prev, cur) => { return `${prev} '${cur.context}, ${cur.id}번, 태그[${cur.tags}]',` }, `${status}리스트(총 ${listByStatus.length}건) :`).slice(0, -1)

}
TodoModel.prototype.add = function(params) {
    let [context, tags] = params
    tags = JSON.parse(tags)
    const id = util.getNewID()
    const newTodo = {
        id,
        status: 'todo',
        context,
        tags
    }
    const copied = util.deepcopy(this.todolist)
    copied.push(newTodo)
    this.todolist = copied
    console.log(`${context}가 추가되었습니다.`)
    console.log(this.getCurrentStatus())
}
TodoModel.prototype.update = async function(params) {
    
}
TodoModel.prototype.del = function(params) {

}
module.exports = TodoModel