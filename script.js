const descriptionContainer = document.querySelector(".cards");

fetch("https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/patisserie.json")
  .then(response => response.json())
  .then(data => {
    const cardDiv = document.createElement("div");
    const descriptionParagraph = document.createElement("p");
    descriptionParagraph.textContent = data.entreprise.produits[0].description;
    const productImage = document.createElement("img");
    productImage.src = "https://mapatisserie.fr/wp-content/uploads/2021/09/eclair-chocolat-P1080408-03-scaled.jpeg";
    
    cardDiv.classList.add("card");
    cardDiv.appendChild(productImage);
    cardDiv.appendChild(descriptionParagraph);
    descriptionContainer.appendChild(cardDiv);
  });

const formElement = document.querySelector("form");
const firstNameInput = document.querySelector("#firstname");
const lastNameInput = document.querySelector("#lastname");
const commentInput = document.querySelector("#com");
const submitButton = document.querySelector("#button");

formElement.addEventListener("submit", (event) => {
  event.preventDefault();
  
  console.log(lastNameInput.value);
  console.log(firstNameInput.value);
  console.log(commentInput.value);
  
  const messageDiv = document.createElement("div");
  const heading = document.createElement("h1");
  heading.textContent = "Hello";
  
  messageDiv.appendChild(heading);
});