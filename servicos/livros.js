const fs = require("fs")

function getTodosLivros() {
    return JSON.parse(fs.readFileSync("livros.json"))
}

function getLivro(id) {
    return JSON.parse(fs.readFileSync("livros.json")).filter(livro => livro.id === id)
}

function modificaLivro(id, conteudo) {
    let livrosAtuais = JSON.parse(fs.readFileSync("livros.json"))
    let indiceLivro = livrosAtuais.findIndex(livro => livro.id === id)
    if(indiceLivro === -1 ) {
        throw new Error("id inexistente")
    }
    const conteudoMudado = {...livrosAtuais[indiceLivro], ...conteudo}
    livrosAtuais[indiceLivro] = conteudoMudado

    fs.writeFileSync("livros.json",JSON.stringify(livrosAtuais))

    return conteudo
}

function insereLivro(novoLivro) {
    const livrosAtuais = JSON.parse(fs.readFileSync("livros.json"))
    fs.writeFileSync("livros.json",JSON.stringify([...livrosAtuais, novoLivro]))

    return novoLivro
}

function deletaLivro(id) {
    const livrosAtuais = JSON.parse(fs.readFileSync("livros.json"))
    fs.writeFileSync("livros.json",JSON.stringify(livrosAtuais.filter(livro => livro.id !== id)))

    return id
}

module.exports = {
    getTodosLivros,
    getLivro,
    modificaLivro,
    insereLivro,
    deletaLivro
}