const { getTodosLivros, getLivro, modificaLivro, insereLivro, deletaLivro } = require("../servicos/livros")

function getLivros(req,res) {
    try {
        const livros = getTodosLivros()
        res.send(livros)
    } catch (error) {
        res.status(500)
        res.send({mensagem: error.message})   
    }
}

function getLivroPorId(req,res) {
    try {
        const id = req.params.id
        if (id && Number(id)) {
            const livros = getLivro(id)
            res.send(livros)
        }
        
        res.status(422)
        res.send({message:"Id inválido"})
    } catch (error) {
        res.status(500)
        res.send({mensagem: error.message})   
    }
}

function postLivro(req, res) {
    try {
        if(req.body.name) {
            const livroInserido = insereLivro(req.body)
            res.status(201)
            res.send({livroInserido})
        }

        res.status(422)
        res.send({mensagem: "O campo name é obrigatório"})
        
    } catch (error) {
        res.status(500)
        res.send({mensagem: error.message})   
    }
}

function patchLivro(req, res) {
    try {
        const id = req.params.id
        if (id && Number(id)) {
            const livroMudado = modificaLivro(req.params.id, req.body)
            res.send({livroMudado})   
        }

        res.status(422)
        res.send({message:"Id inválido"})
    } catch (error) {
        res.status(500)
        res.send({mensagem: error.message})   
    }
}

function deleteLivro(req, res) {
    try {
        const idDeletado = deletaLivro(req.params.id)
        res.send({idDeletado})
    } catch (error) {
        res.status(500)
        res.send({mensagem: error.message})   
    }
}

module.exports = {
    getLivros,
    getLivroPorId,
    patchLivro,
    deleteLivro,
    postLivro
}