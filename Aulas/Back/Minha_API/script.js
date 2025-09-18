//URl do servidor 
//
const API_URL = 'http://localhost:3001/usuarios';

//ELementos container 
const userCardsContainer = document.getElementById('user-cards-container');
const addUserform = document.getElementById('addUserForme');
const btnListUsers = document.getElementById('btnListUsers');

//Elementos do Modal
const editmodal = document.getElementById('editModal')
const editUserForm = document.getElementById('editUserForm')
const cancelEdit = document.getElementById('btnCancelEdit')
const editIdInput = document.getElementById('editId')
const editNameInput = document.getElementById('editName')
const editAgeInput = document.getElementById('editAge')