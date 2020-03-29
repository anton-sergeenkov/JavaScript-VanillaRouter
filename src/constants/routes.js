import PageIndex from '../components/PageIndex';
import PageItems from '../components/PageItems';
import PageAbout from '../components/PageAbout';

const routes = [
    {
        title: 'Главная',
        url: '#',
        getComponent() {
            const pageIndex = new PageIndex();
            return pageIndex.render();
        }
    },
    {
        title: 'Товары',
        url: '#items',
        getComponent() {
            const pageItems = new PageItems();
            return pageItems.render();
        }
    },
    {
        title: 'О нас',
        url: '#about',
        getComponent() {
            const pageAbout = new PageAbout();
            return pageAbout.render();
        }
    },
];

export default routes;
