const template = document.createElement('template');
template.innerHTML = /*html*/`

  <style>

  :host {
    opacity: 0;
  }

  :host(#logo) {
    opacity: 1;
  }
  
  a {
    color: var(--clr-accent);
    text-decoration: none;
    transition: color 200ms ease;
    margin-top: .5rem;
    margin-left: .5rem;
    transition: 
      opacity 150ms ease-in-out,
      color 150ms ease
      ;
  }

  a:hover {
    color: var(--clr-secondary);
  }

  @media screen and (min-width: 800px) {
    :host {
      opacity: 1;
    }
  }

  </style>

`;

class NavItem extends HTMLElement {

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    this.setAttribute('role', 'listitem');
    this.setAttribute('slot', 'list-item');

    if (this.hasAttribute('logo')) {
      this.setAttribute('slot', 'logo');
      this.setAttribute('id', 'logo');
    }

    if (this.hasAttribute('link')) {
      const link = document.createElement('a');
      link.setAttribute('href', this.getAttribute('link'));
      link.innerHTML = this.innerHTML;
      this.shadowRoot.appendChild(link);
    }
  }

}

customElements.define('am-nav-item', NavItem);