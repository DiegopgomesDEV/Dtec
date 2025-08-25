const form = document.querySelector('#formulario');
const resultado = document.querySelector('#resultado');

form.addEventListener('submit', function (e) {
        e.preventDefault();

        const pesoinput = form.querySelector("#peso").value;
        const alturainput = form.querySelector("#altura").value; 

        const peso = Number(pesoinput);
        const altura = Number(alturainput);
        const valorimcbruto = (peso/(altura**2)).toFixed(2);
        const valortotal = Number(valorimcbruto);



        if (valortotal < 18.5){
                resultado.innerHTML = `<p class="paragrafo-resultado">Seu IMC é ${valortotal} (Abaixo do peso).</p>`;
        } 
        else if (valortotal >= 18.5 && valortotal <= 24.9 ){
                resultado.innerHTML = `<p class="paragrafo-resultado">Seu IMC é ${valortotal} (Peso normal).</p>`;
        } 
        else if (valortotal >= 25 && valortotal <= 29.9 ){
                resultado.innerHTML = `<p class="paragrafo-resultado">Seu IMC é ${valortotal} (Sobrepeso).</p>`;
        }
        else if (valortotal >= 30 && valortotal <= 34.9 ){
                resultado.innerHTML = `<p class="paragrafo-resultado">Seu IMC é ${valortotal} (Obesidade grau 1).</p>`;
        }
        else if (valortotal >= 35 && valortotal <= 39.9 ){
                resultado.innerHTML = `<p class="paragrafo-resultado">Seu IMC é ${valortotal} (Obesidade grau 2).</p>`;
        }
        else if (valortotal > 40){
                resultado.innerHTML = `<p class="paragrafo-resultado">Seu IMC é ${valortotal} (Obesidade grau 3).</p>`;
        }
        else if (altura == peso ){
        resultado.innerHTML = `<p class="bad"> Invalido </p>`;
        return
        }
        else if (!peso){
        resultado.innerHTML = `<p class="bad">Peso invalido</p>`
        return
        }
        else if (!altura){
        resultado.innerHTML = `<p class="bad">Altura invalido</p>`
        return
        }
})