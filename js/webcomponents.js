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
                <a class="nav-link" href="#features">Préstations</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#pricing">Tarifs</a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" href="#">Disabled</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <my-modal></my-modal>
    `;
  }
}

// C'est cette ligne qui fait la magie. Elle indique au navigateur comment utiliser <my-nav> comme un élément réel.
customElements.define('my-nav', MyNav);

// Si vous avez également un composant 'my-modal', assurez-vous de le définir de la même manière.
// Par exemple:
// customElements.define('my-modal', MyModal);
