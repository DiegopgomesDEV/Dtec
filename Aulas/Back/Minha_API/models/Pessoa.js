const mongoose = require('mongoose')

const pessoasSchema = new mongoose.Schema(
    {
        nome: {type: String, required: true},
        idade: {type: Number, required: true}
    },
    {timestamp:true}
)

module.exports = mongoose.model('Pessoa', pessoasSchema)