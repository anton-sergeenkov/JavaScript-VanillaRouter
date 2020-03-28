import Menu from '../Menu';

import PageIndex from '../PageIndex';
import PageMenu from '../PageMenu';
import PageItems from '../PageItems';
import PageAbout from '../PageAbout';

import routes from '../../constants/routes';
import classes from './App.css';

const pageIndex = new PageIndex();
const pageMenu = new PageMenu();
const pageItems = new PageItems();
const pageAbout = new PageAbout();

console.log(pageIndex.render());
console.log(pageMenu.render());
console.log(pageItems.render());
console.log(pageAbout.render());

class App {
    constructor() {
        this.menu = new Menu();

		window.addEventListener('load', () => this.routeChange());
		window.addEventListener('hashchange', () => this.routeChange());
    }

	routeChange() {
        const hash = window.location.hash;
        const url = hash ? hash : '#';

        const component = routes.filter(item => item.url === url);
        console.log(component[0].component);
    }

    render() {
        return `
            <div class="${classes.wrapper}">
                ${this.menu.render()}
            </div>
        `;
    }
}

export default App;
