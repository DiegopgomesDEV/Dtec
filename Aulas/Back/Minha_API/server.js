//Carregar variaveis de ambiente
require('dotenv').config()

//Importando o express
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const PORT = process.env.PORT || 3002;
const mongoURI = process.env.MONGO_URI;

//conexão mongodb
mongoose.connect(mongoURI)
  .then(() => console.log("Conectado ao MongoDB Atlas"))
  .catch(error => {console.error("Falha na Conexão ao MongoDB", error.message);
  process.exit(1);
})

//Criando minha aplicação
const app = express()

//Permitir trabalhar com json
app.use(express.json())
//permitir trabalhar com cors
app.use(cors())

//estrurura do documento schema

const usuarioSchema = new mongoose.Schema(
  {
    nome: {type: String, require:true},
    idade: {type: Number, require:true}
  },{timestamps:true}
);

//modelo e collection
const Usuario = mongoose.model('Usuario', usuarioSchema)

app.get('/',(req,res) => {
  res.send("PÁGINA INICIAL")
})


app.get('/usuarios', async (req,res) => {
    try{
      const usuarios = await Usuario.find({});
      res.json(usuarios);
    } catch(error) {
      res.status(500).json({mensagem:"Error ao buscar Usuários", erro: error.message})
    }
})

app.get('/usuarios/:id', async (req, res) => {
  try{
    const id = req.params.id;
    const usuario = await Usuario.findById(id);

    if(usuario){
      res.json(usuario)
    }else{
      res.status(404).json({mensagem:"Usuário Não encontrado"})
    }
  } catch (error) {
      res.status(400).json({mensagem:"Erro de Servidor", erro: error.message})
  }
})


app.get('/usuarios/nome/:nome', (req,res) => {
    const buscaNome = req.params.nome.toLowerCase()
    const resultados = usuarios.filter(u => u.nome.toLowerCase().includes(buscaNome))
    if(resultados.length > 0){
      res.json(resultados)
    }else {
      res.status(404).json({mensagem: "Usuário Não Encontrado"})
    }
})

app.get('/usuarios/idade/:idade', (req,res) => {
  const buscaIdade = req.params.idade
  const usuario = usuarios.filter(u => u.idade == buscaIdade)
  if(usuario.length > 0){
    res.json(usuario)
  }else{
    res.status(404).json({mensagem: "Usuário não encontrado"})
  }
})

app.delete('/usuarios/:id', (req, res) => {
    const id = req.params.id
    usuarios = usuarios.filter(u => u.id != id)
    res.json({mensagem: "Usuário Removido com sucesso"})
})

app.post('/usuarios', (req, res) => {
  const novoUsuario = {
    id: usuarios.length + 1,
    nome: req.body.nome,
    idade: req.body.idade
  };
  usuarios.push(novoUsuario)
  res.status(201).json(novoUsuario)
})

app.put('/usuarios/:id', (req,res) => {
  const id = req.params.id;
  const nome = req.body.nome
  const idade = req.body.idade

  const usuario = usuarios.find(u => u.id == id)

  if (!usuario){
    return res.status(404).json({mensagem: "Usuário Não encontrado"})
  }
  usuario.nome = nome || usuario.nome
  usuario.idade = idade || usuario.idade
  res.json(usuario)
})

//Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor na porta ${PORT}`)
})