import { Component } from './component.js';
export class Header extends Component {
    constructor(selector) {
        super();
        this.selector = selector;
        this.template = `
         <header>
            <h1>TODO List</h1>
        </header>
        `;
        this.render(this.selector, this.template);
    }
}
