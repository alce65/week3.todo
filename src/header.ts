import { Component } from './component.js';

export class Header extends Component {
    template: string;
    constructor(public selector: string) {
        super();
        this.template = `
         <header>
            <h1>TODO List</h1>
        </header>
        `;
        this.render(this.selector, this.template);
    }
}
