fetch
  .then(response => {
    if (!response.ok) {
      throw new Error('Erreur réseau');
    }
    return response.json();
  })
  .then(data => {
    // Utilisation des données ici
    document.getElementById('nomCommercial').textContent = data.nomCommercial;
    document.getElementById('phraseAccroche').textContent = data.phraseAccroche;

    const beneficesList = document.getElementById('beneficesList');
    data.listeBenefficesClients.forEach(benefice => {
      const li = document.createElement('li');
      li.textContent = benefice;
      beneficesList.appendChild(li);
    });

    const realisationsList = document.getElementById('realisationsList');
    data.realisations.forEach(realisation => {
      const li = document.createElement('li');
      li.innerHTML = `<strong>${realisation.nom}</strong>: ${realisation.description}`;
      realisationsList.appendChild(li);
    });

    const temoignagesList = document.getElementById('temoignagesList');
    data.temoignages.forEach(temoignage => {
      const li = document.createElement('li');
      li.innerHTML = `<strong>${temoignage.prenom}</strong> (${temoignage.typePrestation}) - Note: ${temoignage.note}<br>${temoignage.commentaire}`;
      temoignagesList.appendChild(li);
    });
  })
  .catch(error => {
    console.error('Problème avec l\'opération fetch:', error);
    // Gérer les erreurs ici, par exemple afficher un message d'erreur à l'utilisateur
  });

document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Empêcher la soumission du formulaire
  
  // Récupérer les valeurs du formulaire
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;
  
  // Validation simple
  if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
    alert("Veuillez remplir tous les champs");
    return false;
  }
  
  // Ici, vous pouvez traiter les données du formulaire, par exemple les envoyer à un serveur
  // À des fins de démonstration, nous allons simplement enregistrer les données dans la console
  console.log("Nom: " + name);
  console.log("Email: " + email);
  console.log("Message: " + message);
  
  // Effacer les champs du formulaire
  document.getElementById("name").value = '';
  document.getElementById("email").value = '';
  document.getElementById("message").value = '';
  
  // Afficher un message de succès
  alert("Message envoyé avec succès !");
});