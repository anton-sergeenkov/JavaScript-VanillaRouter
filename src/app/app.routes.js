import { itemsPageComponent } from "./pages/items-page.component";
import { menuPageComponent } from "./pages/menu-page.component";
import { aboutPageComponent } from "./pages/about-page-component";

export const appRoutes = [
    { path: 'menu', component: menuPageComponent },
    { path: 'items', component: itemsPageComponent },
    { path: 'about', component: aboutPageComponent }
]