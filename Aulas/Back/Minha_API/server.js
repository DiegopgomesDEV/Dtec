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
    {id: 3, nome: "Maria", idade: 22}
]

app.get(`/usuarios`,(req,res) => {
    res.json(usuarios);
})

//Inicia o Servidor
app.listen(PORT, () => {
    console.log(`Servidor na porta ${PORT}`)
})