//Criação de função
function saudacao(){
    console.log("Bom Dia");
} 

//Ultilizando a função
saudacao();

//Função com parâmetros
function soma (a,b){
    return a + b;
}

console.log(soma(2,10))

//Função com parâmetros padrão 
function somapadrao(x = 1, y = 1){
    return x + y 
}

console.log(somapadrao()) // 2
console.log(somapadrao(5))// 6
console.log(somapadrao(10,4))// 14

// ----> FUNÇÃO ANONIMAS<----

const raiz = function(n){
    return n **0.5
}

//Ultilização de função
console.log(raiz(9))

//---->ARROW FUNCTION<----

const sqrt = (n) => n ** 0.5;

function somatotal(z,h,soma){
    console.log(z + h + somapadrao())
}

somatotal(1,2)