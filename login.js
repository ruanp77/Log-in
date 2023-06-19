//CODIGO DE VALIDAÇÃO DE FORMULÁRIO DE LOGIN
function Verificar(){
    let email = document.getElementById('loginEmail').value
    let senha = document.getElementById('loginSenha').value
    console.log(email);
    console.log(senha);

    if(!email || !senha){
        alert("Campos de prenchimentos obrigatório. Favor preencher")
    }
}