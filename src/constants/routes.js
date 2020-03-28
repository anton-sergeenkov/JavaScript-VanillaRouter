import PageIndex from '../components/PageIndex';
import PageMenu from '../components/PageMenu';
import PageItems from '../components/PageItems';
import PageAbout from '../components/PageAbout';

const pageIndex = new PageIndex();
const pageMenu = new PageMenu();
const pageItems = new PageItems();
const pageAbout = new PageAbout();

const routes = [
    { title: 'Главная', url: '#',      component: pageIndex.render() },
    { title: 'Меню',    url: '#menu',  component: pageMenu.render() },
    { title: 'Товары',  url: '#items', component: pageItems.render() },
    { title: 'О нас',   url: '#about', component: pageAbout.render() }
];

export default routes;
