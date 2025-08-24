const apiUrl = "https://test-api-v1-vert.vercel.app/v1/blogs";
const blogContainer = document.getElementById("blogContainer");

async function fetchBlogs() {
  try {
    const res = await fetch(apiUrl);
    const blogs = await res.json();

    blogs.forEach(blog => {
      const card = document.createElement("div");
      card.classList.add("blog-card");
      card.innerHTML = `
        <img src="${blog.image}" alt="${blog.title}" class="blog-image">
        <div class="blog-content">
          <div class="blog-title">${blog.title}</div>
          <div class="author">
            <img src="${blog.authorImage}" alt="${blog.author}">
            <span>${blog.author}</span>
          </div>
          <div class="blog-description">${blog.description}</div>
          <div class="blog-footer">
            <a href="#">Read more</a>
            <span><i class="fa-solid fa-eye"></i> ${blog.viewers}</span>
          </div>
        </div>
      `;
      blogContainer.appendChild(card);
    });
  } catch (err) {
    console.error("Error fetching blogs:", err);
  }
}


function goBlogsLeft() {
  blogContainer.scrollBy({ left: -window.innerWidth * 0.5, behavior: 'smooth' });
}

function goBlogsRight() {
  blogContainer.scrollBy({ left: window.innerWidth * 0.5, behavior: 'smooth' });
}

fetchBlogs();


const articlesContainer = document.getElementById("articlesContainer");

async function getArticles() {
  try {
    const res = await fetch("https://test-api-v1-vert.vercel.app/v1/articles");
    const articles = await res.json();

    articles.forEach(article => {
      const card = document.createElement("div");
      card.className = "article-card";
      
      const img = document.createElement("img");
      img.src = article.image;

      const topInfo = document.createElement("div");
      topInfo.className = "top-info";
      topInfo.innerHTML = `
          <span class="category">${article.category}</span>
          <span class="duration">${article.duration || "3 Month"}</span>
      `;

      const title = document.createElement("h3");
      title.textContent = article.title.length > 40 
          ? article.title.slice(0, 40) + "..."
          : article.title;

      const desc = document.createElement("p");
      desc.textContent = article.description.length > 80 
          ? article.description.slice(0, 80) + "..."
          : article.description;

      const bottom = document.createElement("div");
      bottom.className = "card-bottom";
      bottom.innerHTML = `
          <div class="author">
              <img src="${article.authorImage || 'https://i.pravatar.cc/40'}" alt="author">
              <span>${article.author || "Lina"}</span>
          </div>
          <div class="price">
              <span class="old-price">$120</span>
              <span class="new-price">$${article.price}</span>
          </div>
      `;

      card.appendChild(img);
      card.appendChild(topInfo);
      card.appendChild(title);
      card.appendChild(desc);
      card.appendChild(bottom);

      articlesContainer.appendChild(card);
    });
  } catch (err) {
    console.error("Error fetching articles:", err);
  }
}

function goArticlesLeft() {
  articlesContainer.scrollBy({ left: -400, behavior: 'smooth' });
}

function goArticlesRight() {
  articlesContainer.scrollBy({ left: 400, behavior: 'smooth' });
}

getArticles();
