import classes from './PageMenu.css';

class PageMenu {
    constructor() {
        this.menuList = [
            { title: 'Главная', url: '#' },
            { title: 'Меню',    url: '#menu' },
            { title: 'Товары',  url: '#items' },
            { title: 'О нас',   url: '#about' }
        ]
    }

    render() {
        let list = '';

        this.menuList.forEach(item => {
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

export default PageMenu;
