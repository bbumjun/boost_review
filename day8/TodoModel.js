// - todolist 상태값을 add/update/delete등을 통해서 실제 변경하는 역할
// - ES6 Classes 패턴을 사용할 수 없으며, ES6이전의 **prototype패턴**을 활용해서 만들어야 한다.
// - todolist 데이터만 주입받아서 동작된다.
// - 뒤에 나오는 Observer 기능을 하는 객체는 require로 가져와서 사용한다.
// - console.log로 출력하는 역할을 할 수 있으며, console.log부분을 별도의 클래스로 분리할 수도 있다(선택사항)
function TodoModel (todolist) {
    this.todolist = todolist
}

module.exports = TodoModel