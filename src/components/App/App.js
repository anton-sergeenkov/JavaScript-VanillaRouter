import PageMenu from '../PageMenu';
import PageItems from '../PageItems';
import PageAbout from '../PageAbout';

import classes from './App.css';

class App {
    constructor() {
        this.pageMenu = new PageMenu();
        this.pageItems = new PageItems();
        this.pageAbout = new PageAbout();
    }

    // 
    // this.pageItems.render()
    // this.pageAbout.render()

    render() {
        return `
            <div class="${classes.wrapper}">
                ${this.pageMenu.render()}
            </div>
        `;
    }
}

export default App;
