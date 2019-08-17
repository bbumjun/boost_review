// - 사용자 입력내용(add/update/delete)을 분석해서 분기하는 역할
// - **ES Classes** 형태로 구현해야 한다.
// - TodoModel객체만 주입받는다.
const util = require('./util.js')
const readline = require('readline')
class TodoController {
    constructor(todoModel) {
        this.todoModel = todoModel
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        })
    }
    runTodo() {
        this.rl.setPrompt('명령을 입력하세요: ')
        this.rl.prompt()
        this.rl.on('line', input => {
            if (input === 'q') this.rl.close()
            else {
                this.rl.pause()
                this.parseInput(input)
                this.rl.prompt()
                this.rl.resume()
            }
        }).on('close', () => process.exit())

    }
    parseInput(input) {
        const [command, ...param] = input.split('$$')
        try {
            switch (command) {
                case 'show': {
                    this.todoModel.show(param)
                    break
                }
                case 'add': {
                    this.todoModel.add(param)
                    break
                }
                case 'update': {
                    this.todoModel.update(param)
                    break
                }
                case 'delete': {
                    this.todoModel.del(param)
                    break
                }
                default: {
                    throw "no command"
                }
            }
        } catch (e) {
            console.log('somethig error... ' + e)
        }
    }
}
module.exports = TodoController