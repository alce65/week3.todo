import { Task } from '../models/task';

export class TaskApi {
    url: string;
    constructor() {
        this.url = 'http://localhost:3000/tasks';
    }

    // read/get
    getTask(): Promise<Array<Task>> {
        return fetch(this.url).then((response) => response.json());
    }
}
