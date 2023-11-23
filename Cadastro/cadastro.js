document.getElementById('cadastroForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita o envio do formulário
  
  // Obtém os valores do formulário
  var nome = document.getElementById('nome').value;
  var email = document.getElementById('email').value;
  var telefone = document.getElementById('telefone').value;
  var endereco = document.getElementById('endereco').value;
  var dataNascimento = document.getElementById('data_nascimento').value;
  
  
  var usuarioAutenticado = true;
  
  if (usuarioAutenticado) {
  
    localStorage.setItem('nome', nome);
    localStorage.setItem('email', email);
    localStorage.setItem('telefone', telefone);
    localStorage.setItem('endereco', endereco);
    localStorage.setItem('dataNascimento', dataNascimento);
    
    
    window.location.href = '/Login/Login.html';
  }
});
