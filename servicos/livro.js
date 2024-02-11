const fs = require("fs")

function getTodosLivros() {
    return JSON.parse(fs.readFileSync("livros.json"))
}

function getLivroPorId(id) {
    const livros = JSON.parse(fs.readFileSync("livros.json"))

    const livroFiltrado = livros.filter( livro => livro.id === id ) [0]
    return livroFiltrado
}

function insereLivro(livroNovo) {
    const livros = JSON.parse(fs.readFileSync("livros.json"))

    const novaListaDeLivros = [ ...livros, livroNovo ]

    fs.writeFileSync("livros.json", JSON.stringify(novaListaDeLivros))
}

function modificaLivro(modificacoes, id) {
    let livrosAtuais = JSON.parse(fs.readFileSync("livros.json"))
    const indiceModificado = livrosAtuais.findIndex( livro => livro.id === id)
    const conteudoMudado = { ...livrosAtuais[indiceModificado], ...modificacoes }
    // livrosAtuais[indiceModificado] -> é um objeto que checa, por exemplo: {id: "2", nome: "livro irado"}
    // modificacoes -> é um objeto que tras as alterações desejadas e compara com livrosAtuais e 
    //      altera a nova informação passada no indice, ´por exemplo: {nome: "nome mucho legal"}

    livrosAtuais[indiceModificado] = conteudoMudado
    // assim a variavel livrosAtuais no [indiceModificado] vai receber o conteudo da variavel conteudoMudado
    fs.writeFileSync("livros.json", JSON.stringify(livrosAtuais))
}

function apagaLivro(apagar, id) {
    let livrosAtuais = JSON.parse(fs.readFileSync("livros.json"))
    const indiceApagar = livrosAtuais.findIndex( livro => livro.id === id)
    const conteudoApagado = { ...livrosAtuais[indiceApagar], ...apagar }

    livrosAtuais[indiceApagar] = conteudoApagado

    fs.WriteStream("livros.json", JSON.stringify(livrosAtuais))
}


module.exports = {
    getTodosLivros,
    getLivroPorId,
    insereLivro,
    modificaLivro,
    apagaLivro
}