// - - todoModel에서 현재상태를 출력 할 때마다, log.html파일을 새롭게 생성하는 파일이다. (뒤에 설명)

class TodoHtmlView {
    constructor(todoModel) {
        this.todoModel = todoModel
    }
}
module.exports = TodoHtmlView