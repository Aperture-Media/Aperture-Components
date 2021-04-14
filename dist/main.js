(()=>{var n={789:()=>{const n=document.createElement("template");n.innerHTML="\n\n  <style>\n\n  :host {\n    opacity: 0;\n  }\n\n  :host(#logo) {\n    opacity: 1;\n  }\n  \n  a {\n    color: var(--clr-accent);\n    text-decoration: none;\n    transition: color 200ms ease;\n    margin-top: .5rem;\n    margin-left: .5rem;\n    transition: \n      opacity 150ms ease-in-out,\n      color 150ms ease\n      ;\n  }\n\n  a:hover {\n    color: var(--clr-secondary);\n  }\n\n  @media screen and (min-width: 800px) {\n    :host {\n      opacity: 1;\n    }\n  }\n\n  </style>\n\n";class e extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(n.content.cloneNode(!0))}connectedCallback(){if(this.setAttribute("role","listitem"),this.setAttribute("slot","list-item"),this.hasAttribute("logo")&&(this.setAttribute("slot","logo"),this.setAttribute("id","logo")),this.hasAttribute("link")){const n=document.createElement("a");n.setAttribute("href",this.getAttribute("link")),n.innerHTML=this.innerHTML,this.shadowRoot.appendChild(n)}}}customElements.define("am-nav-item",e)},623:()=>{const n=document.createElement("template");n.innerHTML='\n\n  <style>\n    \n    :host {\n      --clr-primary: var(--am-primary, #222);\n      --clr-secondary: var(--am-secondary, #fff);\n      --clr-accent: var(--am-accent, #bbb);\n      display: flex;\n      position: relative;\n      flex-direction: column;\n      min-height: 3rem;\n      background-color: var(--clr-primary);\n    }\n\n    /* Hamburger Toggle */\n\n    #hamburger {\n      display: none;\n    }\n\n    #hamburger-label {\n      position: absolute;\n      right: 1rem;\n      top: 0;\n      cursor: pointer;\n      height: 3rem;\n      width: 3rem;\n    }\n\n    #hamburger-label span {\n      position: absolute;\n      top: 1.3rem;\n      height: .3rem;\n      width: 3rem;\n      background-color: var(--clr-accent);\n      border-radius: 5px;\n      transition:\n        transform 250ms ease-in-out,\n        background-color 200ms ease-in-out\n        ;\n    }\n\n    #hamburger-label span::before,\n    #hamburger-label span::after {\n      content: \'\';\n      position: absolute;\n      height: .3rem;\n      width: 3rem;\n      background-color: var(--clr-accent);\n      border-radius: 5px;\n      transition:\n        transform 250ms ease-in-out,\n        background-color 200ms ease-in-out\n        ;\n    }\n\n    #hamburger-label span::before {\n      transform: translateY(10px);\n    }\n\n    #hamburger-label span::after {\n      transform: translateY(-10px);\n    }\n\n    #hamburger:checked ~ #hamburger-label span {\n      transform: translateX(-100%);\n      background-color: transparent;\n    }\n\n    #hamburger:checked ~ #hamburger-label span::before {\n      transform: rotate(45deg) translate(100%, -3rem);\n      right: 1rem;\n    }\n\n    #hamburger:checked ~ #hamburger-label span::after {\n      transform: rotate(-45deg) translate(100%, 3rem);\n      right: 1rem;\n    }\n\n    #hamburger-label:hover span,\n    #hamburger-label:hover span::before,\n    #hamburger-label:hover span::after {\n      background-color: var(--clr-secondary);\n    }\n\n    /* Dropdown Menu */\n\n    #dropdown {\n      display: flex;\n      position: absolute;\n      top: 100%;\n      width: 100%;\n      flex-direction: column;\n      justify-content: space-between;\n      list-style: none;\n      margin: 0;\n      padding: .5rem 0;\n      background-color: var(--clr-primary);\n      transform: scaleY(0);\n      height: 6rem;\n      transform-origin: top;\n      transition: transform 500ms ease-in-out;\n    }\n\n    #hamburger:checked ~ #dropdown {\n      transform: scaleY(1);\n    }\n\n    /* Nav Links */\n\n    #logo-container {\n      flex-basis: 50%;\n      margin-top: .5rem;\n    }\n\n    ::slotted(#logo) {\n      color: var(--clr-accent);\n      text-decoration: none;\n      transition: color 200ms ease;\n      font-size: 1.3em;\n      margin-bottom: .5rem;\n      opacity: 1;\n    }\n\n    ::slotted(#logo):hover {\n      color: var(--clr-secondary);\n    }\n\n    #hamburger:checked ~ #dropdown ::slotted(am-nav-item) {\n      opacity: 1;\n      transition: opacity 150ms ease-in-out;\n    }\n\n    /* Bigger Screens */\n\n    @media screen and (min-width: 800px) {\n      :host {\n        flex-direction: row;\n        align-items: center;\n        justify-content: space-around;\n      }\n      \n      #dropdown {\n        position: relative;\n        flex-direction: row;\n        align-items: center;\n        justify-content: space-around;\n        height: auto;\n        transform: scaleY(1);\n        flex-basis: 50%;\n      }\n      \n      #hamburger, #hamburger-label {\n        display: none;\n      }\n\n      #logo-container {\n        margin-top: 0;\n      }\n    }\n\n  </style>\n\n  <span id="logo-container">\n    <slot name="logo" />\n  </span>\n\n  <input type="checkbox" id="hamburger">\n\n  <label for="hamburger" id="hamburger-label">\n    <span></span>\n  </label>\n\n  <ul id="dropdown">\n    <slot name="list-item" />\n  </ul>\n\n';class e extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(n.content.cloneNode(!0))}connectedCallback(){this.setAttribute("role","navigation"),console.log(this.shadowRoot.querySelector("#dropdown slot").innerHTML)}}customElements.define("am-navbar",e)}},e={};function r(t){var o=e[t];if(void 0!==o)return o.exports;var a=e[t]={exports:{}};return n[t](a,a.exports,r),a.exports}(()=>{"use strict";r(623),r(789)})()})();