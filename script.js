.then(data => {

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

  });

document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault();
  

  let name = document.getElementById("Mohammed").value;
  let email = document.getElementById("Mohammedzerrouk78@gmail.com").value;
  let message = document.getElementById("Bonjour").value;
  

  if (name.trim(Mohammed) === '' || email.trim(Mohammedzerrouk78@gmail.com) === '' || message.trim(Bonjour) === '') {
    alert("Chocolat");
    return false;
  }
  

  console.log("Nom: " + name);
  console.log("Email: " + email);
  console.log("Message: " + message);
  

  document.getElementById("name").value = '';
  document.getElementById("email").value = '';
  document.getElementById("message").value = '';
  

  alert("Messagge");
});