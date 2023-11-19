function validarFormulario() {

  var nome = document.getElementById("nome").value;
  var email = document.getElementById("email").value;
  var telefone = document.getElementById("telefone").value;
  var endereco = document.getElementById("endereco").value;
  var dataNascimento = document.getElementById("data_nascimento").value;

  if (nome === '' || email === '' || telefone === '' || endereco === '' || dataNascimento === '') {
      alert("Por favor, preencha todos os campos.");
      return false;
  }

  window.location.href = "Login.html";
  return true; 

}