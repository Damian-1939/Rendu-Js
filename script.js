fetch('your/api/endpoint')
  .then(response => {
    if (!response.ok) {
      throw new Error('');
    }
    return response.json();
  })
  .then(data => {
    // Utilisez les données ici
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
    console.error('There was a problem with your fetch operation:', error);
  });


  document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Get form values
    let name = document.getElementById("name").value;
    let email = document.getElementById("emmail").value;
    let message = document.getElementById("message").value;
  
    // Simple validation
    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
      alert("Please fill in all fields");
      return false;
    }
  

    console.log("Names: " + name);
    console.log("Email: " + email);
    console.log("Message: " + message);
  
  
    document.getElementById("name").value = '';
    document.getElementById("email").value = '';
    document.getElementById("message").value = '';
  
 
    alert(");
  });