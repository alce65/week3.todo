import { Footer } from './components/footer.js';
import { Header } from './components/header.js';
import { Main } from './components/main.js';
import { TASKS } from './models/data.js';

console.log('Loaded index');
console.log(TASKS);

new Header('body');
new Main('body');
new Footer('body');
