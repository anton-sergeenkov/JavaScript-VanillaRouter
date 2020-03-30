import { WFMComponent } from "../framework";
import './style.scss'

class AppComponent extends WFMComponent {
    constructor(config) {
        super(config)
    }
}

export const appComponent = new AppComponent({
    selector: 'app-root',
    template: `
        <router-outlet>
        </router-outlet>   
    `
})