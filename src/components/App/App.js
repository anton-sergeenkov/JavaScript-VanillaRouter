import Menu from '../Menu';

import routes from '../../constants/routes';
import classes from './App.css';

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
        const a = component[0].component;

        console.log(a);

        // console.log(b.render());
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
