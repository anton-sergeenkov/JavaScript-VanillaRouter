import {addRoutes} from "./routes";

const routes = {};
const lastHistoryArray = [];
let element = null;
let lastHistoryElement = null;


export function addRoute(patch, page) {
    routes[patch] = {page: page};
}

function uiHash(hash, isNow) {
    isNow = isNow ? 'are' : 'were';
    switch (hash) {
        case '': return `You ${isNow} in the menu`;
        case '#/items': return `You ${isNow} in the page with items`;
        case '#/about': return `You ${isNow} in the our about page`;
        default: return 'Unexisting location'
    }
}

export function router() {
    const url = location.hash.slice(1) || '/';
    let currentRoute = routes[url];
    let currentHash = null;

    element = element || document.querySelector('#view');
    currentHash = currentHash || document.getElementById('currentHash');
    lastHistoryElement = lastHistoryElement || document.getElementById('lastHistory');

    currentHash.innerHTML = uiHash(location.hash, true) + ' now';

    if (element && currentRoute.page) {
        const page = new currentRoute.page(element);
        page.render();

        if (lastHistoryArray.length === 10) {
            lastHistoryArray.shift()
        }

        lastHistoryArray.push(uiHash(location.hash, false));
        lastHistoryElement.innerHTML = lastHistoryArray.map(arg => '<h5>' + arg + '</h5>').join('');
    }
}

window.addEventListener('hashchange', router);
window.addEventListener('load', addRoutes);

