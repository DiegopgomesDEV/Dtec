const nome = prompt("Digite seu nome completo: ")
const resultado = document.getElementById(`resultado`)
resultado.innerHTML += `<p class="resultado"><strong>Seu nome é:</strong> ${nome}</p>`;
resultado.innerHTML += `<p class="resultado"><strong>Total caracteres:</strong> ${nome.length} </p>`;
resultado.innerHTML += `<p class="resultado"><strong>Primeira letra:</strong> ${nome[0]} </p>`;
resultado.innerHTML += `<p class="resultado"><strong>Ultima letra:</strong> ${nome.slice(-1)} </p>`;
resultado.innerHTML += `<p class="resultado"><strong>Indice da primeira letra"i"</strong>:${nome.indexOf("i")} </p>`;
resultado.innerHTML += `<p class="resultado"><strong>Indice da ultima letra"i":</strong>${nome.lastIndexOf("i")} </p>`;
resultado.innerHTML += `<p class="resultado"><strong>As ultimas 3 letras do nome: </strong>${nome.slice(-3)} </p>`;
resultado.innerHTML += `<p class="resultado"><strong>O nome em letras maiuscula:</strong>${nome.toUpperCase()} </p>`;
resultado.innerHTML += `<p class="resultado"><strong>o nome em letras minusculas:</strong> ${nome.toLocaleLowerCase()} </p>`;
resultado.innerHTML += `<p class="resultado"><strong>As palavras do nome separadas por virgula:</strong> ${nome.split(' ')}</p>`;