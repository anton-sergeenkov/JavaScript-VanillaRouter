import BackNavigation from '../BackNavigation';

class Page404 {
    constructor() {
        this.backNavigation = new BackNavigation();
    }
    render() {
        return `<h2>${this.backNavigation.render()} Страница не найдена!</h2>`
    }
}

export default Page404;
