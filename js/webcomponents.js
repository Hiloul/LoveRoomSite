class MyNav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="#home">Accueil <span class="sr-only">(current)</span></a>
              </li>
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
      <my-modal></my-modal>
    `;
  }
}
class MyFooter extends HTMLElement {
  connectedCallback() {
      this.innerHTML = `
      <div class="container">
          <footer class="py-3 mt-4 mb-2">
              <a href="/" class="mb-3 me-2 mb-md-0 text-decoration-none lh-1 footerLogo">
                  <img src="/static/assets/picto_rose.png" alt="logo chatbot footer" width="30" height="24" class="rounded">
              </a>
              <span class="mb-3 mb-md-0">©2023 LoveRoom13 - Tous droits réservés.</span>               
              <ul class="mb-3 mb-md-0">
                  <li><a class=" href="#"><i class="fa-brands fa-snapchat"></i></a></li>
                  <li><a class=" href="#"><i class="fa-brands fa-whatsapp"></i></a></li>
              </ul>
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
      <img class="d-block w-100" src="../assets/Chatbot.png" alt="First slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="../assets/SoMe.png" alt="Second slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="../assets/Motus.png" alt="Third slide">
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
customElements.define('my-nav', MyNav);
customElements.define('my-carousel', MyCarousel);
customElements.define('my-footer', MyFooter);