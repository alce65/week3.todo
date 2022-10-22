import { ISerie } from '../models/serie.js';
import { Component } from './component.js';

export class SerieCard extends Component {
    template!: string;
    constructor(public selector: string, public serie: ISerie) {
        super();
        this.manageComponent();
        this.serie = {
            id: 1,
            name: 'The Sopranos',
            creator: 'David Chase',
            year: 1999,
            poster: 'https://m.media-amazon.com/images/M/MV5BZGJjYzhjYTYtMDBjYy00OWU1LTg5OTYtNmYwOTZmZjE3ZDdhXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg',
            watched: true,
            score: 5,
            emmies: 21,
        };
    }

    manageComponent() {
        this.template = this.createTemplate();
        this.render(this.selector, this.template);
    }

    createTemplate() {
        const template = `
            <li class="serie">
                <img
                    class="serie__poster"
                    src="${this.serie.poster}"
                    alt="Cartel de la serie ${this.serie.name}"
                />
                <h4 class="serie__title">${this.serie.name}</h4>
                <p class="serie__info">${this.serie.creator} (${this.serie.year})</p>
                <ul class="score">
                    <li class="score__star">
                        <i class="icon--score fas fa-star" title="1/5"></i>
                    </li>
                    <li class="score__star">
                        <i class="icon--score fas fa-star" title="2/5"></i>
                    </li>
                    <li class="score__star">
                        <i class="icon--score fas fa-star" title="3/5"></i>
                    </li>
                    <li class="score__star">
                        <i class="icon--score fas fa-star" title="4/5"></i>
                    </li>
                    <li class="score__star">
                        <i class="icon--score fas fa-star" title="5/5"></i>
                    </li>
                </ul>
                <i class="fas fa-times-circle icon--delete"></i>
            cls</li>
        `;
        return template;
    }
}
