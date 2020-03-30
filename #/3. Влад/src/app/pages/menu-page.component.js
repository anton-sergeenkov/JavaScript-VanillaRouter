import { WFMComponent } from "../../framework";

class MenuPageComponent extends WFMComponent {
    constructor(config) {
        super(config)
    }
}

export const menuPageComponent = new MenuPageComponent({
    selector: 'app-menu-page',
    template: `
            <nav class="teal teal lighten-1">
            <div class="nav-wrapper" style="margin-left: 20px">
            <a href="#" class="brand-logo superTitleS">VanillaSPA</a>
            <ul class="right hide-on-med-and-down">
                <li><a href="#items">Items</a></li>
                <li><a href="#about">About</a></li>
            </ul>
            </div>
        </nav>`
})