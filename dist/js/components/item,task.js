import { Component } from './component.js';
export class ItemTask extends Component {
    constructor(selector, item, handleDelete) {
        super();
        this.selector = selector;
        this.item = item;
        this.handleDelete = handleDelete;
        this.manageComponent();
    }
    manageComponent() {
        this.template = this.createTemplate();
        this.render(this.selector, this.template);
        setTimeout(() => {
            document.querySelector(`#i${this.item.id}`).addEventListener('click', () => {
                this.handleDelete(this.item.id);
            });
        }, 100);
    }
    createTemplate() {
        return `
        <li> ${this.item.id} - ${this.item.title} 
            <span id="i${this.item.id}" data-id="${this.item.id}">🗑️</span>
            </li>`;
    }
}
