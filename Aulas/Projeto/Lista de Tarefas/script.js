
const mostralista = document.getElementById("lista")
const botaorem = document.querySelector('.remove')
const input_inf = document.getElementById("inputusuario");
const removetar = document.querySelector('.tarefas') 


function addlista(){
const cli = document.createElement("li")
const saveinput = input_inf.value
cli.textContent = (saveinput)
cli.classList.toggle("tarefas")
mostralista.appendChild(cli)
const cbotao = document.createElement("button")
cbotao.textContent = "Remove"
cbotao.classList.toggle("remove")
cli.appendChild(cbotao)
}


    botaorem.addEventListener("click", function(){
    removetar.remove()
})



