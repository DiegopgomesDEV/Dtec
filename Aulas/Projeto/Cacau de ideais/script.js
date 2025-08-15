const botaoCard = document.querySelector(".produto-card");

  const nomeProduto = botaoCard.querySelector(".nomeProduto").textContent;
  const descricao = botaoCard.querySelector(".descricao").textContent;
  const valor = botaoCard.querySelector(".valor").textContent;


  resultado.innerHTML =+ `<p> ${nomeProduto}, ${descricao}, ${valor}</p>`
  

  resultado.innerHTML += `<p> ${nomeProduto}, ${descricao}, <strong>${valor}<strong/> </p>`


function botaoproduto2(){
  const nomeProduto2 = botaoCard2.querySelector(".nomeProduto2").textContent;
  const descricao2 = botaoCard2.querySelector(".descricao2").textContent;
  const valor2 = botaoCard2.querySelector(".valor2").textContent;

  resultado.innerHTML += `<p> ${nomeProduto2}, ${descricao2}, <strong>${valor2}<strong/> </p>`
}

  function botaoproduto3(){
  const nomeProduto3 = botaoCard3.querySelector(".nomeProduto3").textContent;
  const descricao3 = botaoCard3.querySelector(".descricao3").textContent;
  const valor3 = botaoCard3.querySelector(".valor3").textContent;

  resultado.innerHTML += `<p> ${nomeProduto3}, ${descricao3}, <strong>${valor3}<strong/> </p>`

}