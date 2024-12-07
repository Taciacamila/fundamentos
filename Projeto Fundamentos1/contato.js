document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio do formulário padrão
  
    // Captura dos dados do formulário
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
  
    // Exibindo os dados no console
    console.log("Nome: " + name);
    console.log("E-mail: " + email);
    console.log("Mensagem: " + message);
  
    // Limpa o formulário depois de enviar
    document.getElementById("contactForm").reset();
});
