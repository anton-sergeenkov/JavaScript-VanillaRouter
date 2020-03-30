import { WFMComponent } from "../../framework";

class NotFound extends WFMComponent {
    constructor(config) {
        super(config)
    }
}

export const notFound = new NotFound({
    selector: 'app-not-found',
    template: `
        <div style="display: flex; justify-content: center; align-items: center">
            <div>
                <h2 class="red">Страница не найдена</h2>
                <a href="#menu">Перейти на главную</a>
            </div>
        </div>
    `
})