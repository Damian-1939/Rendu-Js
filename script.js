const data = {
    "nomCommercial": "Palais du Chocolat",
    "phraseAccroche": "Le chocolat qui éveille vos papilles",
    "texteBouton": "Devis gratuit",
    "listeBenefficesClients": [
      "Des chocolats artisanaux de qualité supérieure, réalisés à partir d'ingrédients sélectionnés avec soin",
      "Des saveurs uniques et originales, pour des sensations gustatives incomparables",
      "Une attention particulière portée à la présentation des chocolats, pour des cadeaux gourmands inoubliables",
      "Un service personnalisé et attentionné, pour répondre à toutes vos demandes et envies"
    ],
    "realisations": [
      {
        "nom": "Praliné croustillant",
        "description": "Une ganache fondante au praliné, agrémentée d'éclats de noisettes croustillants. Un véritable délice pour les amateurs de chocolat et de fruits secs."
      },
      {
        "nom": "Truffe au champagne",
        "description": "Une ganache onctueuse et légèrement pétillante, enrobée de chocolat noir. Une saveur subtile et délicate, idéale pour les fêtes et les célébrations."
      },
      
    ],
    "temoignages": [
      {
        "prenom": "Sophie",
        "typePrestation": "Coffret cadeau personnalisé",
        "commentaire": "Le coffret de chocolats que j'ai offert était magnifique et délicieux. Les saveurs étaient variées et originales, et la présentation était très soignée. Un grand merci au Palais du Chocolat pour ce cadeau parfait.",
        "note": 5
      },
      {
        "prenom": "Antoine",
        "typePrestation": "Mariage",
        "commentaire": "Les chocolats du Palais du Chocolat ont été un véritable succès lors de notre mariage. Tout le monde a adoré les saveurs raffinées et les présentations élégantes. Un grand bravo à toute l'équipe.",
        "note": 5
      },
      {
        "prenom": "Nicolas",
        "typePrestation": "Achat en boutique",
        "commentaire": "J'ai acheté une tablette de chocolat noir au Palais du Chocolat et je n'ai pas été déçu. Le chocolat était intense et puissant, avec des notes subtiles de fruits secs. Un vrai régal pour les papilles.",
        "note": 4
      },
      
    ]
  };
  
 
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
  
  document.getElementById('devisBtn').addEventListener('click', () => {
    alert('Demande de devis gratuit envoyée!');
  
  });



  document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting
  
    // Get form values
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
  
    // Simple validation
    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
      alert("Please fill in all fields");
      return false;
    }
  
    // Here you can do something with the form data, like sending it to a server
    // For demonstration purposes, let's just log the data to the console
    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Message: " + message);
  
    // Clear form fields
    document.getElementById("name").value = '';
    document.getElementById("email").value = '';
    document.getElementById("message").value = '';
  
    // Display a success message
    alert("Message sent successfully!");
  });