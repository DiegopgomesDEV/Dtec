
//
const pessoa1 = {
    nome : "Maria",
    sobrenome: "Xavier",
    idade: 50
}

//
console.log(pessoa1.nome)
console.log(pessoa1.sobrenome)
console.log(pessoa1.idade)

//FUNÇAO FABRICA
function criaPessoa(nome,sobrenome,idade){
    return {
        nome,
        sobrenome,
        idade  
    }
}

//Ultilizar Funçao fabrica
const pessoa2 = criaPessoa("Kauan","Godoy",12)
console.log(pessoa2.nome)
console.log(pessoa2.sobrenome)
console.log(pessoa2.idade)

function CriaçãoCachorro(nome,sono,fome){
return{
    nome,
    sono,
    fome,

    latir(){
        console.log("au au")
    },

        dormir(){
            if(this.sono){
                this.sono = false
            }
        }
    }
}

const cachorro1 = CriaçãoCachorro("Marley",true,20)
cachorro1.latir()
cachorro1.dormir()
console.log(cachorro1.nome)
console.log(cachorro1.sono)
console.log(cachorro1.fome)
