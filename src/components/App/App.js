import Menu from '../Menu';

import { NODE_PAGES } from '../../constants/nodes';
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
        const html = component[0].getComponent();

        NODE_PAGES.innerHTML = html;
    }

    render() {
        return this.menu.render();
    }
}

export default App;
