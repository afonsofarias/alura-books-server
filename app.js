const express = require('express')
const routerLivros = require('./rotas/livros')
const app = express()
const port = 8000

app.use(express.json())
app.use('/livros', routerLivros)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})