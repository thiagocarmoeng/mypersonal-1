const express = require('express')
const app = express()
const path = require('path')

const port = process.env.PORT || 4200

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (request, response) => {
    response.render('home')
})

//aapp.get('/contato', (request, response) => {
//    response.render('contato')
//})

app.listen(port, (err) => {
    if (err) {
        console.log('Não foi possível iniciar o servidor de MyPersonal.')
    } else {
        console.log('Servidor de MyPersonal rodando ...')
    }
})
