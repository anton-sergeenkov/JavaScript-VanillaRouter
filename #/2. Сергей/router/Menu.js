export class Menu {
    constructor(element) {
        this.element = element;
    }

    render() {
        return this.element.innerHTML = `<a class="route" href="#/items">Items</a>
                                         <a class="route" href="#/about">About</a>`
    }
}