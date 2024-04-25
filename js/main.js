// Função para verificar preenchimento de formulário
function validarFormulario() {
    var usuario = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;

    if (usuario == "" || senha == "") {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return false;
    }
    return true;
}


// Função para recuperar senha de usuário
function recuperarSenha() {
    var email = prompt("Por favor, insira o seu email para recuperação de senha:");
    // Aqui você pode implementar a lógica para enviar um email de recuperação de senha
    if (email) {
        alert("Um email de recuperação foi enviado para " + email);
    }
}