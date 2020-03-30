import {Menu} from "./Menu";
import {Items} from "./Items";
import {About} from "./About";
import {addRoute} from "./router";
import {router} from "./router";

export function addRoutes()
{
    addRoute('/', Menu);
    addRoute('/items', Items);
    addRoute('/about', About);
    router();
}