const contactForm = document.querySelector('#contact-form');

// Ce code ne s'exécute QUE si l'élément 'contact-form' est trouvé
if (contactForm) {
  
  // 1. CIBLER (les éléments internes au formulaire)
  const messageInput = document.querySelector('#message-input');
  const emailInput = document.querySelector('#email-input');
  const messageElement = document.querySelector('#form-message');

  // 2. ÉCOUTER l'événement "submit"
  contactForm.addEventListener('submit', (event) => {
    
    // 3. MANIPULER (d'abord, empêcher le rechargement)
    event.preventDefault(); // TRÈS IMPORTANT !
    
    // Récupérer les valeurs des champs
    const email = emailInput.value;
    const message = messageInput.value;

    // Logique de validation
    if (email.includes('@') && message.length >= 10) {
      // Succès
      messageElement.textContent = "Merci ! Votre message a bien été envoyé.";
      messageElement.style.color = "green";
      
      // Vider les champs
      emailInput.value = "";
      messageInput.value = "";
    
    } else {
      // Échec
      messageElement.textContent = "Erreur : email invalide ou message trop court (10 caractères min).";
      messageElement.style.color = "red";
    }
  });
}