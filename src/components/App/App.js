import Menu from '../Menu';
import Page404 from '../Page404';

import { NODE_PAGES } from '../../constants/nodes';
import routes from '../../constants/routes';
import classes from './App.css';

class App {
    constructor() {
        this.menu = new Menu();
        this.page404 = new Page404();

		window.addEventListener('load', () => this.routeChange());
		window.addEventListener('hashchange', () => this.routeChange());
    }

	routeChange() {
        const hash = window.location.hash;
        const url = hash ? hash : '#';
        const component = routes.filter(item => item.url === url);
        const html = component[0] ? component[0].getComponent() : this.page404.render();

        NODE_PAGES.innerHTML = html;
    }

    render() {
        return this.menu.render();
    }
}

export default App;
