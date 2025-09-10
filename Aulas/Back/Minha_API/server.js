//Importando o express
const express = require('express')

//Criando um minha aplicaçao
const app = express()

//Permitir trabalhar com JSON
app.use(express.json())

//Porta onde a API vai rodar (PORT e variavel de ambiente)
const PORT = 3001;

let usuarios = [
    {id: 1, nome: "Ana", idade: 20},
    {id: 2, nome: "Carlos", idade: 30},
    {id: 3, nome: "Maria", idade: 22},
    {id: 4, nome: "Maria Juana", idade: 22},
    {id: 5, nome: "Carlos Eduardo", idade: 22}
]

app.get(`/`,(req, res) => {
    res.send("PÁGINA INICIAL")
})

app.get(`/usuarios`,(req, res) => {
    res.json(usuarios);
})

app.get('/usuarios/:id', (req, res) => {
    const id = req.params.id
    const usuario = usuarios.find(u => u.id == id)

    if(usuario){
        res.json(usuario)
    }else{
        res.status(404).json({mensagem:"Usuário Não Encontrado"})
    }
})

app.get('/usuarios/buscar/:nome', (req, res) => {
    const buscaNome = req.params.nome.toLocaleLowerCase()
    const resultados = usuarios.filter(u => u.nome.toLocaleLowerCase().includes(buscaNome))

    if(resultados.length > 0){
        res.json(resultados)
    }else{
        res.status(404).json({mensagem:"Usuário Não Encontrado"})
    }
})

//Inicia o Servidor
app.listen(PORT, () => {
    console.log(`Servidor na porta ${PORT}`)
})