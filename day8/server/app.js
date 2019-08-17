const express =  require('express')
const fs = require('fs')
const app =express()
app.get('/',(req,res)=> {
    fs.readFile('server/data.json','utf-8',(err,result)=>{
        if(err) throw err
        res.send(result)
    })
})

app.listen(8090,()=> {
    console.log('listening on 8090 port!')
})