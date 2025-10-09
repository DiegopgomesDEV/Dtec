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


app.get('/usuarios/nome/:nome', async (req,res) => {
  try{
    const buscaNome =req.params.nome;
    const resultados = await Usuario.find({
      nome: {$regex: buscaNome, $options:'i'}
    });

    if (resultados.length > 0){
      res.json(resultados);
    }
    else{
      res.status(404).json({messagem: "Usuário Não Encotrardo"})
    };
  }
  
  catch (error){
    console.error("Erro na busca", error);
    res.status(500).json({mensagem:"Erro no servidor", erro:error.message})
  }
})

app.get('/usuarios/idade/:idade', async (req,res) => {
  try{
  const buscaIdade = req.params.idade;
  const resultados = await Usuario.find({
    idade: buscaIdade
  })
  
  if (resultados.length > 0){
      res.json(resultados);
    }
    else{
      res.status(404).json({messagem: "Usuário Não Encotrardo"})
    };
  }
  
  catch (error){
    console.error("Erro na busca", error);
    res.status(500).json({mensagem:"Erro no servidor", erro:error.message})
  }
});


app.delete('/usuarios/:id', async (req, res) => {
  try{
    const id = req.params.id;
    // use the correct mongoose helper to delete by id
    const usuariodeletado = await Usuario.findByIdAndDelete(id);

    if(!usuariodeletado){
      return res.status(404).json({mensagem: "Usuário Não Encontrado"});
    }

    res.json({mensagem:"Usuário deletado", usuario: usuariodeletado});
  }catch(error){
    res.status(400).json({mensagem:"Erro ao deletar", erro: error.message});
  }
})

app.post('/usuarios', async (req, res) => {
  try{
    const novoUsuario = await Usuario.create({
      nome: req.body.nome,
      idade: req.body.idade
    });
    res.status(201).json(novoUsuario)
  }catch(error){
    res.status(400).json({mensagem: "Dados Invalidos ou Erro ao salvar", erro: error.message})
  }
})

app.put('/usuarios/:id', async(req,res) => {
  try{
    const id = req.params.id
    const {nome, idade} = req.body
    // use findByIdAndUpdate when you have the id string
    const Usuarioatualizado = await Usuario.findByIdAndUpdate(
      id,
      {nome, idade},
      {new: true, runValidators: true}
    )
    if(!Usuarioatualizado){
      return res.status(404).json({mensagem: "Usuário Não Encrotrado"})
    }
    res.json(Usuarioatualizado)
  }catch(error){
    res.status(400).json({mensagem:"Erro ao atualizar", erro: error.message})
  }
})

//Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor na porta ${PORT}`)
})