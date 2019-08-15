const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
let data = [
    {
        id: 123,
        status: 'todo',
        context: 'study',
        tags: ['programming', 'javascript']
    },
    {
        id: 234,
        status: 'doing',
        context: 'health',
        tags: ['running', 'swimming']
    }
    , {
        id: 345,
        status: 'done',
        context: 'boostcamp',
        tags: ['programming', 'javascript']
    }
]

function initProgram() {
    readInput()
}

function readInput() {

    rl.setPrompt('명령을 입력하세요: ')
    rl.prompt()
    rl.on('line', (input) => {
        if (input === 'q') process.exit()
        rl.pause()
        parseInput(input)
        rl.prompt()
        rl.resume()
    })
}

function parseInput(input) {
    const [command, ...param] = input.split('$$')
    try {
        switch (command) {
            case 'show': {
                show(param)
                break
            }
            case 'add': {
                add(param)
                break
            }
            case 'update': {
                update(param)
                break
            }
            case 'delete': {
                del(param)
                break
            }
            default: {
                throw "잘못된 입력입니다."
            }
        }
    } catch (e) {
        console.log(e)
    }
}
initProgram()