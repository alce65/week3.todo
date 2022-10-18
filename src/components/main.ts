import { Component } from './component.js';

export class Main extends Component {
    template: string;
    constructor(public selector: string) {
        super();
        this.template = this.createTemplate();
        this.renderAdd(this.selector, this.template);
    }
    createTemplate() {
        return `
            <main>
                <section>
                    <h2>Tareas</h2>
                </section>
            </main>
        `;
    }
}
