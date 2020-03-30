import { router } from "../index";
import { loggingUrles } from "../index";

export class Module {
    constructor(config) {
        this.components = config.components
        this.bootstrapComponent = config.bootstrap
        this.routes = config.routes
        this.historyHashes = []
        this.notFound = config.notFound
    }

    start() {
        this.initComponents()
        this.routes && this.initRoutes()
    }

    initComponents() {
        this.bootstrapComponent.render();
        this.components.forEach(this.renderComponent.bind(this))
    }

    initRoutes() {
        window.addEventListener('hashchange', this.renderRoute.bind(this)) 
        this.renderRoute();
    }

    renderRoute() {
        let url = router.getUrl();
        let route = this.routes.find(route => route.path === url)
        
        if (window.location.hash === '') {
            window.location.hash = '#menu';
        }
        
        document.querySelector('router-outlet').innerHTML = route 
        ? `<${route.component.selector}></${route.component.selector}>`
        : `<${this.notFound.selector}></${this.notFound.selector}>`
        route ? this.renderComponent(route.component) : this.renderComponent(this.notFound)
        loggingUrles(this.historyHashes, url);

    }

    renderComponent(component) {
        component.render()
    }
}