//URl do servidor 

const { response, json } = require("express");

//
const API_URL = 'http://localhost:3001/usuarios';

//Elementos container 
const userCardsContainer = document.getElementById('user-cards-container');
const addUserform = document.getElementById('addUserForme');
const btnListUsers = document.getElementById('btnListUsers');

//Elementos do Modal
const editmodal = document.getElementById('editModal');
const editUserForm = document.getElementById('editUserForm');
const cancelEdit = document.getElementById('btnCancelEdit');
const editIdInput = document.getElementById('editId');
const editNameInput = document.getElementById('editName');
const editAgeInput = document.getElementById('editAge');

// Funcões 

//Função que faz requisição de usuários na API
function fetchAndRenderUsers () {
    fetch(API_URL)
        .then(response => response.json())
        .then(users => renderUsers(users))
        .catch(error => {
            console.error('Error ao busacar usuário', error);
            userCardsContainer.innerHTML = `<p> erro ao carregar usuários</p>`;
        });
}

//Função para adicionar o usuário
function addUser(userData) {
    fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
    .then(response => response.json())
        .then(() => {
            addUserForm.reset();
            fetchAndRenderUsers;
        })
}

