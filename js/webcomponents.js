class MyNav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header>
      <nav class="navbar navbar-expand-lg">
      <a class="navbar-brand" href="index.html">
        <img src="./assets/heartkey.png" alt="LoveRoom13 Logo" width="30" height="30">
        LoveRoom13
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#pricing">Tarifs</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
    
      </header>
    `;
  }
}
class MyFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="container">
          <footer class="py-3 mt-4 mb-2">
              <a href="/" class="mb-3 me-2 mb-md-0 text-decoration-none lh-1 footerLogo">
                  <img src="./assets/heartkey.png" alt="logo footer" width="30" height="24" class="rounded">
              </a>
              <span class="mb-3 mb-md-0">©2023 LoveRoom13 - Tous droits réservés.</span>               
              
          </footer>
      </div>
      `;
  }
}
class MyCarousel extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100 h-50" src="./assets/jacuzzi.jpg" alt="First slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100 h-50" src="./assets/loft.jpg" alt="Second slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100 h-50" src="./assets/room.jpg" alt="Third slide">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
`;
  }
}

// C'est cette ligne qui fait la magie. Elle indique au navigateur comment utiliser <my-nav> comme un élément réel.
customElements.define("my-nav", MyNav);
customElements.define("my-carousel", MyCarousel);
customElements.define("my-footer", MyFooter);

// Scroll to top
const btn = document.getElementById("backToTop");
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
}

btn.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
