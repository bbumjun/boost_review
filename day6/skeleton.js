function initProgram() {
    //read input ..
    readInput()

}
function readInput() {
    //read input using readline module
    parseInput(input)
}
function parseInput(input) {

    const [command, ...param] = input.split('$$')
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
}

function show(status) {
    const type = ['current', 'todo', 'doing', 'done']
    try {
        if (!type.includes(status)) throw '잘못된 입력입니다.'
        if (status === 'current') console.log(getCurrentStatus())
        else console.log(getStatus(status))
    }
    catch (e) {
        console.log(e)
    }
}
function getCurrentStatus() {
 const todos = data.filter(item=>item.status==='todo')
 const doing = data.filter(item=>item.status==='doing')
 const done = data.filter(item=>item.status==='done')

 // use reduce function ..
 return str
}
function getStatus(status) {
const result = data.filter = (item=>item.status===status)

//use reduce function...
return str
}
function add(params) {
    const [context,tags] = params
        const id = getNewId()
        tags = JSON.parse(tags)
        newTodo = {
            id,
            status: 'todo',
            context,
            tags
        }
        data.push(newTodo)
}

function getNewId() {
    //make new random integer id
}

function update(params) {
    let initDelay = Date.now()
    while(Date.now()-initDelay>2000);
    if (data.some(item => {
        if (item.id === id) {
            item.status = status
        }
    }));
    else {
        console.log(err)
    }
}

function del(params) {
    if(data.some(item=>item.id===id)){
        data = data.filter(item=>item.id!==id)
    }

}

let data = [
    {
        id: 123,
        status: 'todo',
        context: 'study',
        tags: ['programming', 'javascript']
    },
    {
        id: 234,
        status: 'todo',
        context: 'study',
        tags: ['programming', 'javascript']
    }
    , {
        id: 345,
        status: 'todo',
        context: 'study',
        tags: ['programming', 'javascript']
    }
]

initProgram()