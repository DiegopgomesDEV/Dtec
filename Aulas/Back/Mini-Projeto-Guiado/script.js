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

buscarBtn.addEventListener('click', () => {
    const nomePaís = paísInput.value.trim();

    if(nomePaís === ""){
    
        alert("Por favor, digite o nome de um País")
        return;
    }

    const url = `https://restcountries.com/v3.1/name/${nomePaís}`

    fetch(url)
        .then(response => {
        return response.json();
    })

    .then(data => {
        const país = data[0]

        container.innerHTML = `
            <h2>${país.name.common}</h2>
            <img src="${país.flags.svg}" alt= "Bandeira ${país.name.common}" width="150">

        `
    })
})