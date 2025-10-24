const form = document.querySelector('form');
const ok = document.querySelector('button')
const myForm = document.getElementById('myForm');
const nameInput = document.getElementById('nom');
const firstName = document.getElementById('prenom');
const emailInput = document.getElementById('email');
const pass = document.getElementById('password');
const confirmPass = document.getElementById('confirmPassword');
const errorContainer = document.createElement('div');

ok.addEventListener('click', function(event){
  let errors = [];
  
  if (nameInput.value.trim() === '') {
    errors.push('Veuillez saisir votre nom.');
  } else if (nameInput.value.trim().length < 3) {
    errors.push('La taille de votre nom est trop petite.');
  }

  if (firstName.value.trim() === '') {
    errors.push('Veuillez saisir votre prénom.');
  } else if (firstName.value.trim().length < 3) {
    errors.push('La taille de votre prénom est trop petite.');
  }

  if (emailInput.value.trim() === '') {
    errors.push('Veuillez saisir votre mail.');
  } else if (!isValidEmail(emailInput.value)) {
    errors.push('Veuillez saisir une adresse email valide..');
  }

  if (pass.value.trim() === ''){
    errors.push('Veuillez saisir votre mot de passe.');
  } else if (!isValidMdp(pass.value)){
    errors.push("Le mot de passe doit contenir au moins une lettre majuscule, une lettre minuscule, un chiffre et un caractère spécial")
  }
    
  if ((pass.value.length < 8) || (pass.value.length > 50)) {
    errors.push("Votre mot de passe est trop court");
  }
 
  if (pass.value !== confirmPass.value) {
    errors.push('Les mots de passe ne correspondent pas.');
  }

    event.preventDefault();    
    displayErrors(errors);
  
});

function isValidMdp(email) {
  const reg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
  return reg.test(email);
}

function isValidEmail(email) {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(email);
}

function displayErrors(errors) {
  errorContainer.classList.add('error');
  errorContainer.innerHTML = '';
  errors.forEach(function(error) {
    
    const errorMessage = document.createElement('p');
    errorMessage.textContent = error;
    errorContainer.append(errorMessage);
    
  });
  form.appendChild(errorContainer);
}
