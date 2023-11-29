document.getElementById('myForm').addEventListener('submit', function(e) {
    e.preventDefault(); 
    const nom = document.getElementById('nom').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    console.log('Nom:', nom);
    console.log('E-mail:', email);
    console.log('Message:', message);

  });