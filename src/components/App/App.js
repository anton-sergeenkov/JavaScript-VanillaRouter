import PageMenu from '../PageMenu';
import PageItems from '../PageItems';
import PageAbout from '../PageAbout';

class App {
    constructor() {
        this.pageMenu = new PageMenu();
        this.pageItems = new PageItems();
        this.pageAbout = new PageAbout();
    }
    
    render() {
        return `
        <h1>App</h1>
        ${this.pageMenu.render()}
        ${this.pageItems.render()}
        ${this.pageAbout.render()}
    `;
    }
}

export default App;
