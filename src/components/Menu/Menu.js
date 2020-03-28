import routes from '../../constants/routes';
import classes from './Menu.css';

class Menu {
    constructor() {
        //
    }

    render() {
        let list = '';

        routes.forEach(item => {
            list += `
                <li>
                    <a class="${classes.link}" href="${item.url}">⚡️ ${item.title}</a>
                </li>
            `;
        })

        return `
            <ul class="${classes.wrapper}">
                ${list}
            </ul>
        `
    }
}

export default Menu;
