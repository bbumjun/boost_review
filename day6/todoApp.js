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
    },
    {
        id: 567,
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
function show(param) {
    const [status] = param
    const type = ['current', 'todo', 'doing', 'done']
    if (param.length !== 1 || !type.includes(status)) throw '잘못된 입력입니다.'
    if (status === 'current') console.log(getCurrentStatus())
    else console.log(getStatus(status))

}
function getCurrentStatus() {
    let listByStatus = []
    const status = ['todo', 'doing', 'done']
    status.forEach(element => {
        const list = data.filter(item => item.status === element)
        const status = element
        const listById = list.map(item => item.id)
        listByStatus.push({ status, list: listById })
    })
    return listByStatus.reduce((prev, cur) => { return `${prev} ${cur.status}: [${cur.list}],` }, `현재상태 : `).slice(0, -1)

}
function getStatus(status) {
    const dataByStatus = data.filter(element => element.status === status)
    return dataByStatus.reduce((prev, cur) => { return `${prev} '${cur.context}, ${cur.id}번, 태그[${cur.tags}]',` }, `${status}리스트(총 ${dataByStatus.length}건) :`).slice(0, -1)
}
function add(params) {
    let [context, tags] = params
    tags = JSON.parse(tags)
    function getNewId(IDs) {
        while (1) {
            const tempID = Math.floor(Math.random() * 10000) + 1
            if (!IDs.includes(tempID)) return tempID
        }
    }
    const id = getNewId(data.map(item => item.id))
    const newTodo = {
        id,
        status: 'todo',
        context,
        tags
    }
    data.push(newTodo)
    console.log(`${context}가 추가되었습니다.`)
    console.log(getCurrentStatus())
}

function update(params) {
    const [id, status] = params
    const initTime = Date.now()
    let targetContext
    while (Date.now() - initTime < 2000);
    data = data.map(item => {
        if (item.id == id) {
            item.status = status
            targetContext = item.context
        }
        return {
            id: item.id,
            status: item.status,
            context: item.context,
            tags: item.tags
        }
    })
    console.log(`${targetContext} 가 ${status}로 상태가 변경되었습니다`)
    console.log(getCurrentStatus())
}
function del(params) {
    const [id] = params
    let targetContext,targetStatus
    if (data.some(item => item.id == id)) {
        data = data.filter(item => {
            if (item.id ==id) {
                targetContext = item.context
                targetStatus = item.status
            }
            return item.id != id
        })

    } else {
        console.log('해당 아이디가 없습니다.')
        return
    }
    console.log(`${targetContext}가 ${targetStatus}목록에서 삭제되었습니다.`)
    console.log(getCurrentStatus())
}
initProgram()