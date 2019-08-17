const TodoModel = require("./TodoModel.js")
const TodoController = require("./TodoController.js")
const TodoHtmlView = require('./TodoHtmlView.js') //뒤에 설명
const request = require('request')
//todolist 값을 서버에서 얻어와야 한다.
request('http://localhost:8090',(err,res,body)=>{
    const todolist = JSON.parse(body)
    const todoModel = new TodoModel(todolist);
    const controller = new TodoController(todoModel);
    controller.runTodo();
    // new TodoHtmlView(todoModel);
})
