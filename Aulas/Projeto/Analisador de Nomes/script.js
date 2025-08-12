const nome = prompt("Digite seu nome completo: ")
const resultado = document.getElementById(`resultado`)
resultado.innerHTML += `<p class="resultado"><strong>Seu nome é:</strong> ${nome}</p>`;
resultado.innerHTML += `<p class="resultado"><strong>Total de caracteres:</strong> ${nome.length} </p>`;
resultado.innerHTML += `<p class="resultado"><strong>Primeira letra: </strong>${nome[0]} </p>`;
resultado.innerHTML += `<p class="resultado"><strong>Última letra: </strong>${nome.slice(-1)} </p>`;
resultado.innerHTML += `<p class="resultado"><strong>Índice da primeira letra"i": </strong>:${nome.indexOf("i")} </p>`;
resultado.innerHTML += `<p class="resultado"><strong>Índice da ultima letra"i": </strong>${nome.lastIndexOf("i")} </p>`;
resultado.innerHTML += `<p class="resultado"><strong>Últimas 3 letras do nome: </strong>${nome.slice(-3)} </p>`;
resultado.innerHTML += `<p class="resultado"><strong>Maiúscula: </strong>${nome.toUpperCase()} </p>`;
resultado.innerHTML += `<p class="resultado"><strong>Minúsculas: </strong> ${nome.toLocaleLowerCase()} </p>`;
resultado.innerHTML += `<p class="resultado"><strong>Palavras do nome: </strong> ${nome.split(' ')}</p>`;