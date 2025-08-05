let num = 9.54
let num2 = 9.54
let num3 = 3.60
let num4 = 3.40 

//Arrendodamento para baixo

let resultado = Math.floor(num)
console.log(resultado)

//Arrendodamento para cima
resultado = Math.ceil(num2)
console.log(resultado)

//Arrendodamento padrão (acima de 0.50 vai arrendodar para cima caso seja menor arrendodara para baixo )
resultado = Math.round(num3)
console.log(resultado)
resultado = Math.round(num4)
console.log(resultado)

//Encontrar o maior número 
let maior = Math.max(1,2,3000,-5,92)
console.log(maior)

//Encotrar o menor número
let menor = Math.min(1,2,3000,-5,92)
console.log(menor)

//Número aleatório
let aleatorio = Math.random()
console.log(aleatorio)

//Manipulando random
let min = 5;
let max = 10;
let nAleatorio = Math.random() * (max - min) + min;
console.log(Math.round(nAleatorio))