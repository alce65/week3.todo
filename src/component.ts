export abstract class Component {
    //public selector: string,
    //public template: string

    render(selector: string, template: string) {
        const element = document.querySelector(selector);
        if (element === null) return false;
        element.innerHTML = template;
        return true;
    }

    renderOuter(selector: string, template: string) {
        const element = document.querySelector(selector);
        if (element === null) return false;
        element.outerHTML = template;
        return true;
    }
}
