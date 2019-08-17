// - - todoModel에서 현재상태를 출력 할 때마다, log.html파일을 새롭게 생성하는 파일이다. (뒤에 설명)
const fs =require('fs')
class TodoHtmlView {
    constructor(todoModel) {
        this.subscribe(todoModel)
    }
    subscribe(publisher) {
        this.publisher=publisher
        this.publisher.addObserver(this)
    }
    updateObserver(){
        this.data = this.publisher.state;
        const context  = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>TodoList Result</title>
        </head>
        <body>
        <h1>todolist</h1>
            <div class="log">
                ${this.data}
            </div>
        </body>
        </html>
        `
        fs.writeFile('html/log.html',context,err=>{
            if(err) throw err
        })
    }
    unsubscribe() {
        this.publisher.deleteObserver(this);
      }
}
module.exports = TodoHtmlView