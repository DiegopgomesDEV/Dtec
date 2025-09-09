//Refencias aos elesmentos do HTML

const paísInput = document.getElementById("paísInput")
const container = document.getElementById("container")
const buscarBtn = document.getElementById("buscarBtn")

// Mostrar o api restcountries.com, brazil com informações variadas no console.log
//fetch("https://restcountries.com/v3.1/name/brazil")
//.then(response => {
//    console.log(response.json())
//})

// Mostra infomarções especificas sobre o País desejado(Brasil)  
//fetch("https://restcountries.com/v3.1/name/brazil")
//.then(response => {
//    return response.json();
//})
//.then(data => {
//    const país = data[0]
//    console.log(país.name.common)
//})

// Dar função a teclas do teclado no site 
document.addEventListener('keydown', (event) => {
    if(event.key === "Enter"){
        event.preventDefault()
        buscarBtn.click()
    }
})

buscarBtn.addEventListener('click', () => {
    const nomePaís = paísInput.value.trim();

    if(nomePaís === ""){
    
        alert("Por favor, digite o nome de um País")
        return;
    }

    const url = `https://restcountries.com/v3.1/translation/${nomePaís}`

    container.innerHTML = "<p>Busacando...</p>"

    fetch(url)
    .then(response => {
        if(!response.ok){
                throw new Error("País Não Encontrado")
        }

        return response.json();
    })

    .then(data => {
        const país = data[0]
        const moeda = Object.values(país.currencies)[0].name;

        container.innerHTML = `
            <h2>${país.translations.por.common}</h2>
            <img src="${país.flags.svg}" alt= "Bandeira ${país.translations.por}" width="150">
            <p><strong>Capital:</strong> ${país.capital[0]}</p>
            <p><strong>População:</strong> ${país.population.toLocaleString()}</p>
            <p><strong>Moeda:</strong> ${moeda}</p>
            `

            paísInput.value = ""
            
    })

    .catch(error => {
        console.error(error)
        container.innerHTML = `<p style= "color: red;">Erro: ${error.message}</p>`
        paísInput.value = ""
    })
})