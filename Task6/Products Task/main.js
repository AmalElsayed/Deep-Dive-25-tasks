fetch("https://fakestoreapi.com/products")
      .then(response => response.json())
      .then(data => { 
        let container = document.getElementById("productsContainer");

        data.forEach(product => {
          let card = document.createElement("div");
          card.classList.add("card");

          let img = document.createElement("img");
          img.src = product.image;
          img.alt = product.title;

          let title = document.createElement("h3");
          title.textContent = product.title;

          let category = document.createElement("p");
          category.textContent = product.category;

          let price = document.createElement("p");
          price.textContent = "$" + product.price;

          let rating = document.createElement("p");
          if (product.rating && product.rating.rate) {
            rating.textContent = "Rating: " + product.rating.rate;
          } else {
            rating.textContent = "No rating";
          }

          let button = document.createElement("button");
          button.textContent = "Show Details";
          button.addEventListener("click", () => {
            alert(product.description);
          });

          card.appendChild(img);
          card.appendChild(title);
          card.appendChild(category);
          card.appendChild(price);
          card.appendChild(rating);
          card.appendChild(button);

          container.appendChild(card);
        });
      })
      .catch(error => console.log("Error:", error));