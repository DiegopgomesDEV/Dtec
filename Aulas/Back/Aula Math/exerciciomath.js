const numero = Number(prompt('Digite um número:'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

const raiz = numero ** 0.5; // Raiz quadrada
const tstinteiro =Number.isInteger(numero); // Verifica se é inteiro
const tstnumber = Number.isNaN(numero); // Verifica se é NaN (Not a Number)
const min = Math.floor(numero); // Arrendondamento para baixo
const max = Math.ceil(numero); // Arrendondamento para baixo e para cima
const decimais2 = numero.toFixed(2); // Duas casas decimais

numeroTitulo.innerHTML = numero;
texto.innerHTML  += `<p <strong>A raiz quadrada do seu número:</strong> ${raiz}</p>`;
texto.innerHTML  += `<p <strong>Seu número é inteiro:</strong> ${tstinteiro}</p>`;
texto.innerHTML  += `<p <strong>Seu número é NAN :</strong> ${tstnumber}</p>`;
texto.innerHTML  += `<p <strong>Seu número arrendondado para baixo :</strong> ${min}</p>`;
texto.innerHTML  += `<p <strong>Seu número arrendondado para cima :</strong> ${max}</p>`;
texto.innerHTML  += `<p <strong>Seu número com duas casas decimais :</strong> ${decimais2}</p>`;