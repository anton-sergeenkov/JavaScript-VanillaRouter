import App from './components/App';

const app = new App();
const root = document.getElementById('root');

root.innerHTML = app.render();
