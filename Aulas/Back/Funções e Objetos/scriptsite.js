// Usando JS no site usando class
const form = document.querySelector(".formulario")
const result = document.querySelector(".resultado")

const pessoas = []

form.addEventListener("submit", function(evento){

    evento.preventDefault();

    const nome = form.querySelector(".nome").value;
    const sobrenome = form.querySelector(".sobrenome").value;
    const peso = form.querySelector(".peso").value;
    const altura = form.querySelector(".altura").value;

    const pessoa = {
        nome,
        sobrenome,
        peso,
        altura
    };

    pessoas.push(pessoa);

    console.log(pessoas);

    result.innerHTML += `<p> ${nome} ${sobrenome} - ${peso}KG ${altura}M<\p>`

    //limpa o formulario
    form.reset()
})