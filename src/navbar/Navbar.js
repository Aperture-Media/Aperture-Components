const template = document.createElement('template');
template.innerHTML = /*html*/`

  <style>
    
    :host {
      --clr-primary: var(--am-primary, #222);
      --clr-secondary: var(--am-secondary, #fff);
      --clr-accent: var(--am-accent, #bbb);
      display: flex;
      position: relative;
      flex-direction: column;
      min-height: 3rem;
      background-color: var(--clr-primary);
    }

    /* Hamburger Toggle */

    #hamburger {
      display: none;
    }

    #hamburger-label {
      position: absolute;
      right: 1rem;
      top: 0;
      cursor: pointer;
      height: 3rem;
      width: 3rem;
    }

    #hamburger-label span {
      position: absolute;
      top: 1.3rem;
      height: .3rem;
      width: 3rem;
      background-color: var(--clr-accent);
      border-radius: 5px;
      transition:
        transform 250ms ease-in-out,
        background-color 200ms ease-in-out
        ;
    }

    #hamburger-label span::before,
    #hamburger-label span::after {
      content: '';
      position: absolute;
      height: .3rem;
      width: 3rem;
      background-color: var(--clr-accent);
      border-radius: 5px;
      transition:
        transform 250ms ease-in-out,
        background-color 200ms ease-in-out
        ;
    }

    #hamburger-label span::before {
      transform: translateY(10px);
    }

    #hamburger-label span::after {
      transform: translateY(-10px);
    }

    #hamburger:checked ~ #hamburger-label span {
      transform: translateX(-100%);
      background-color: transparent;
    }

    #hamburger:checked ~ #hamburger-label span::before {
      transform: rotate(45deg) translate(100%, -3rem);
      right: 1rem;
    }

    #hamburger:checked ~ #hamburger-label span::after {
      transform: rotate(-45deg) translate(100%, 3rem);
      right: 1rem;
    }

    #hamburger-label:hover span,
    #hamburger-label:hover span::before,
    #hamburger-label:hover span::after {
      background-color: var(--clr-secondary);
    }

    /* Dropdown Menu */

    #dropdown {
      display: flex;
      position: absolute;
      top: 100%;
      width: 100%;
      flex-direction: column;
      justify-content: space-between;
      list-style: none;
      margin: 0;
      padding: .5rem 0;
      background-color: var(--clr-primary);
      transform: scaleY(0);
      height: 6rem;
      transform-origin: top;
      transition: transform 500ms ease-in-out;
    }

    #hamburger:checked ~ #dropdown {
      transform: scaleY(1);
    }

    /* Nav Links */

    #logo-container {
      flex-basis: 50%;
      margin-top: .5rem;
    }

    ::slotted(#logo) {
      color: var(--clr-accent);
      text-decoration: none;
      transition: color 200ms ease;
      font-size: 1.3em;
      margin-bottom: .5rem;
      opacity: 1;
    }

    ::slotted(#logo):hover {
      color: var(--clr-secondary);
    }

    #hamburger:checked ~ #dropdown ::slotted(am-nav-item) {
      opacity: 1;
      transition: opacity 150ms ease-in-out;
    }

    /* Bigger Screens */

    @media screen and (min-width: 800px) {
      :host {
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
      }
      
      #dropdown {
        position: relative;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        height: auto;
        transform: scaleY(1);
        flex-basis: 50%;
      }
      
      #hamburger, #hamburger-label {
        display: none;
      }

      #logo-container {
        margin-top: 0;
      }
    }

  </style>

  <span id="logo-container">
    <slot name="logo" />
  </span>

  <input type="checkbox" id="hamburger">

  <label for="hamburger" id="hamburger-label">
    <span></span>
  </label>

  <ul id="dropdown">
    <slot name="list-item" />
  </ul>

`;

class Navbar extends HTMLElement {

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    this.setAttribute('role', 'navigation');
    console.log(this.shadowRoot.querySelector('#dropdown slot').innerHTML);
  }

}

customElements.define('am-navbar', Navbar);