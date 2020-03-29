import App from './components/App';
import { NODE_ROOT } from './constants/nodes';

const app = new App();

NODE_ROOT.innerHTML = app.render();
