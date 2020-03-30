import { WFMModule } from "../framework";
import { appComponent } from "./app.component"
import { notFound } from "./common/not-found.component"
import { appRoutes } from "./app.routes"

class AppModule extends WFMModule {
    constructor(config) {
        super(config)
    }
}

export const appModule = new AppModule({
    components: [
    ],
    bootstrap: appComponent,
    routes: appRoutes,
    notFound: notFound
});