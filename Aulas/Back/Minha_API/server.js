//Carregar variaveis de ambiente
require('dotenv').config()

//Importando o express
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken') //Para Tokens
const bcrypt = require('bcryptjs') //Para Criptogarfia

//Imporatando as Collections
const User = require('.models/User')
const Pessoa = require('.models/Pessoa')

const PORT = process.env.PORT || 3002;
const mongoURI = process.env.MONGO_URI;
const JWT_SECRET = process.env.JWT_SECRET;


//conexão mongodb
mongoose.connect(mongoURI)
  .then(() => console.log("Conectado ao MongoDB Atlas"))
  .catch(error => {console.error("Falha na Conexão ao MongoDB", error.message);
  process.exit(1);
})

//Função geradora de tokens de login
const generateToken = (id) => {
  return jwt.sign({id}, JWT_SECRET, {expiresIn: '1d'})
}

const protect = (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
    try{
      token = req.headers.authorization.split(' ')[1]
      jwt.verify(token, JWT_SECRET);
      next()
    } catch(error) {
      return res.status(401).json({mensagem: "Não autorizado, token inválido"})
    }
  }
}

//Criando minha aplicação
const app = express()

//Permitir trabalhar com json
app.use(express.json())
//permitir trabalhar com cors
app.use(cors())

// Rotas ADMIN
app.post('/api/register-adim', async (req, res) => {
  const {email, password} = req.body
  try{
    const userExists = await User.findOne({email})
    if (userExists){
      return res.status(400).json({mensagem: "Nome de usuário ja existe"})
    }
    const user = await User.create({email, password})
    res.status(201).json({mensagem: "Usuário criado com sucesso"})
  } catch (error) {
    res.status(500).json({mensagem:"Erro do registro admin", erro: error.message})
  }
})

app.post('api/login-adim', async (req,res) => {
  const {email,password} = req.body
  try{
    const user = await User.findOne({email}).select('+password')

    if(user && (await user.MatchPassword(password))) {
      res.json({
        email: user.email,
        token: generateToken(user._id),
        mensagem: "Login Realizado com sucesso"
      });
    } else {
      res.status(401).json({mensagem:"Credencias inválidas"})
    }
  }catch(error){
    res.status(500).json({mensagem: "Erro no login", erro: error.message})
  }
})


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