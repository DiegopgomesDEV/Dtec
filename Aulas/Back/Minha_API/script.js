const { response, json } = require("express");

//Criando uma constante com o endereço da API 
const API_URL = "http://localhost:3005/pessoas";

//Seleção de Elementos do HTML INICIAL
const userCardsContainer = document.getElementById('user-cards-container');
const addUserForm = document.getElementById('addUserForm');
const btnListUsers = document.getElementById('btnListUsers');

//Seleção de elementos do MODAL
const editModal = document.getElementById('editModal');
const editUserForm = document.getElementById('editUserForm');
const btnCancelEdit = document.getElementById('btnCancelEdit');
const editIdInput = document.getElementById('editId');
const editNameInput = document.getElementById('editName')
const editAgeInput = document.getElementById('editAge')

//Elementos do modal login
const loginModal = document.getElementById('loginModal')
const btnLoginModal = document.getElementById('btnLoginModal')
const btnCancelLogin = document.getElementById('btnCancelLogin')
const adminLoginForm = document.getElementById('adminLoginForm')
const adminAuthsStatus = document.getElementById('adminAuthsStatus')

//Elementos do Modal de Registro
const registerModal = document.getElementById('registerModal')
const btnRegisterModal = document.getElementById('btnRegisterModal')
const btnCancelRegister = document.getElementById('btnCancelRegister')
const adminRegisterForm = document.getElementById('adminRegisterForm')
const adminRegisterStatusForm = document.getElementById('adminRegisterStatusForm')

//Váriavel Global para o Token
let authToken = '';


//CRIAÇÃO DE FUNÇÕES
function fetchAndRenderUsers() {
    //Faz uma requisição GET para a URL
    fetch(API_URL)
        .then(response => response.json())
        //renderUsers() função que vai organizar as informações na tela
        .then(users => renderUsers(users))
        .catch(error => {
            console.error("Erro ao buscar usuários", error);
            userCardsContainer.innerHTML = `<p>Erro ao carregar usuários</p>`
        })              
}

//Função para adicionar um novo usuário
function addUser(userData){
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
        fetchAndRenderUsers();
    })
    .catch(error => console.error("Erro ao adicionar usuário", error)) ;   
}

//FUNÇÃO PARA EDITAR USUÁRIO EXISTENTE
function editUser(userId, userData){
    fetch(`${API_URL}/${userId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
    .then(response => response.json())
    .then(() => {
        editModal.style.display = 'none';
        fetchAndRenderUsers();
    })
    .catch(error => console.error("Erro ao editar o usuário", error));
}

//Funçao para criar conta - registar administardor
function handleAdminRegister(email,password){
    adminAuthsStatus.textContent = "Registrando...";
    adminAuthsStatus.style = "blue";

    fetch('http://localhost:3005/api/register-admin', {
        method: 'POST',
        headers: { 'Content-Type': 'applicantin/json'},
        body: JSON.stringify({email,password})
    })
    .then(response => response.json())
    .then(data => {
        if(data.mensagem && data.mensagem.includes("sucesso")){
            adminAuthsStatus.style.color = "green";
            adminAuthsStatus.textContent = "Conta criada com sucesso";
            setTimeout(() =>{
                registerModal.style.display= 'none';
                document.getElementById('regUsername').value ='';
                document.getElementById('regPassword').value ='';
            }, 2000)
        }else{
            adminAuthsStatus.style.color= 'red';
            adminAuthsStatus.textContent = data.mensagem;
        }
    })
    .catch(() => {
        adminAuthsStatus.style.color = "red";
        adminAuthsStatus.style.color = "Erro de rede ou servidor";
    });
}

//Função para login
function handleAdminlogin(email,password){
    fetch('http://localhost:3005/api/login-admin', {
        method: 'POST',
        headers: {'Cotent-Type' : 'application/json'},
        body: JSON.stringify({email, password})
    })
    .then(response => response.json())
    .then(data => {
        if(data.token){
            authToken = data.token;
            adminAuthsStatus.style.color = 'green';
            adminAuthsStatus.textContent = 'Login realizado com sucesso! Token obtido'
            loginModal.style.display = 'none';
        } else{
            authToken = '';
            adminAuthsStatus.style.color = 'red';
            adminAuthsStatus.textContent = data.mensagem;
        }
    })
    .catch(() => {
        adminAuthsStatus.style.color = 'red';
        adminAuthsStatus.textContent = "Erro de rede ou servidor";
    })
}

function deleteUser(userId) {
    if(!authToken){
        adminAuthsStatus.style.color ='orange';
        adminAuthsStatus.textContent = "ERRO: Faça o login para deletar"
        return
    }
    fetch(`${API_URL}/${userId}`,{
        method: 'DELETE',
        headers: {
            'Authorization' : `Bearer ${authToken}`
        }
    })
    .then( response => {
        if(response.status === 401) {
            adminAuthsStatus.style.color = 'red';
            adminAuthsStatus.textContent = 'Não Autorizado! Token Inválido';
            return response.json().then(err => Promise.reject(err));
        }
        return response.json();
    })
    .then(() => { 
    fetchAndRenderUsers()
    })
    .catch(error => console.error('Erro ao excluir usuário:', error.mensagem))
}

function renderUsers(users) {
    userCardsContainer.innerHTML = "";

    if(users.length === 0) {
        userCardsContainer.innerHTML = `<p>Nenhum usuário cadastrado</p>`
        return;
    }

    users.forEach(user => {
        const userCard = document.createElement('div');
        userCard.className = 'user-card';

        userCard.innerHTML = `
            <div class="user-info">
                <p><strong>ID: </strong>${user._id.slice(0,7)}</p>
                <p><strong>Nome: </strong>${user.nome}</p>
                <p><strong>Idade: </strong>${user.idade}</p>
            </div>
            <div class="card-buttons">
                <button class="btn-edit">Editar</button>
                <button class="btn-delete">Excluir</button>
            </div>
        `;

        const editBtn = userCard.querySelector('.btn-edit');
        const deleteBtn = userCard.querySelector('.btn-delete');

        // store the full id on the buttons so we don't send a truncated id to the API
        editBtn.dataset.userid = user._id;
        deleteBtn.dataset.userid = user._id;

        editBtn.addEventListener('click', () => {
            // use the full id when editing
            editIdInput.value = editBtn.dataset.userid;
            editNameInput.value = user.nome;
            editAgeInput.value = user.idade;
            editModal.style.display = 'flex';
        })

        deleteBtn.addEventListener('click', () => {
            const shortId = deleteBtn.dataset.userid.slice(0,7);
            if(confirm(`Tem certeza que deseja excluir o usuário ${shortId}`)){
                // send the full id to the API
                deleteUser(deleteBtn.dataset.userid)
            }
        })
        userCardsContainer.appendChild(userCard);

    })

}

//Função botão Listar  Usuários
btnListUsers.addEventListener('click', fetchAndRenderUsers);

addUserForm.addEventListener('submit', (e) => {
    e.preventDefault();//Impede que o submit recarregue a página

    const newUserName = document.getElementById('addName').value
    const newUserAge = parseInt(document.getElementById('addAge').value);

    addUser({nome: newUserName, idade: newUserAge})
})

editUserForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const userId = editIdInput.value;
    const newName = editNameInput.value;
    const newAge = parseInt(editAgeInput.value);

    editUser(userId, {nome: newName, idade: newAge});
})

btnCancelEdit.addEventListener('click', () => {
    editModal.style.display = 'none'
})

window.addEventListener('click', (e) => {
    if(e.target === editModal) {
        editModal.style.display = 'none'
    }
})

fetchAndRenderUsers();