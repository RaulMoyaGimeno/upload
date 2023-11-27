export class Header extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: 'open'});
    }
 
    connectedCallback() {
        this.render();
    }
    
    render() {
        this.shadowDOM.innerHTML = `
            ${this.template()}`
            ;
    }

    template() {
        return fetch('../header/header.html')
            .then(response => response.text())
            .then(html => {
                this.shadowRoot.innerHTML = html;
            });
    }

    disconnectedCallback() {
        this.remove();
    }
}

window.customElements.define("app-header", Header);