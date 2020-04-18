class Router {
	constructor() {
		this.router = [
			{path:'',      name:'indexPage', text:'Главная'},
			{path:'menu',  name:'menuPage',  text:'Меню'},
			{path:'items', name:'itemsPage', text:'Товары'},
			{path:'about', name:'aboutPage', text:'О нас'}
		];
		this.viewPage = document.querySelector('#view-page');
		this.viewMenu = document.querySelector('#view-menu');
		window.addEventListener('load', e => this.routeChange(e));
		window.addEventListener('hashchange', e => this.routeChange(e));
		this.menuHeader();
		this.btnBack = this.buttonBack();
	}
	routeChange(e) {
		const uri = window.location.hash.substring(1);
		this.routeCheck(uri);
	}
	routeCheck(uri) {
		for (let value in this.router) {
			if (uri == this.router[value].path) {
				this[this.router[value].name]();
			}
		}
	}
	buttonBack() {
		return '<button class="btn-back" onclick="window.history.back()">Назад</button>';
	}
	menuHeader() {
		var html = '';
		for (let value in this.router) {
			html += `<li><a href="#${this.router[value].path}">${this.router[value].text}</a></li>`;
		}
		this.viewMenu.innerHTML = `<ul>${html}</ul>`;
	}
	indexPage() {
		new IndexPage('', this.viewPage, this.btnBack);
	}
	menuPage() {
		var items = [
			{path:'items', text:'Товары'},
			{path:'about', text:'О нас'}
		];
		new MenuPage(items, this.viewPage, this.btnBack);
	}
	itemsPage() {
		var items = [
			{name:"Первый предмет", quantity:1, price:20},
			{name:"Второй предмет", quantity:5, price:5},
			{name:"Третий предмет", quantity:3, price:30}
		]; 
		new ItemsPage(items, this.viewPage, this.btnBack);
	}
	aboutPage() {
		new AboutPage('About static text', this.viewPage, this.btnBack);
	}
}

new Router();

class IndexPage {
	constructor(content, viewPage, btnBack) {
		this.viewPage = viewPage;
		this.content = content;
		this.btnBack = btnBack;
		this.updateView();
	}
	updateView() {
		this.viewPage.innerHTML = this.btnBack+this.content;
	}
}

class AboutPage {
	constructor(content, viewPage, btnBack) {
		this.viewPage = viewPage;
		this.content = content;
		this.btnBack = btnBack;
		this.updateView();
	}
	updateView() {
		this.viewPage.innerHTML = this.btnBack+this.content;
	}
}

class ItemsPage {
	constructor(content, viewPage, btnBack) {
		this.viewPage = viewPage;
		this.content = content;
		this.btnBack = btnBack;
		this.updateView();
	}
	updateView() {
		var html = '';
		for (let value in this.content) {
			html += `
				<div class="items-element">
					<p>${this.content[value].name}</p>
					<p>Количество: ${this.content[value].quantity}</p>
					<p>Цена: ${this.content[value].price}</p>
				</div>`;
		}
		this.viewPage.innerHTML = this.btnBack+`<div class="items-container">${html}</div>`;
	}
}

class MenuPage {
	constructor(content, viewPage, btnBack) {
		this.viewPage = viewPage;
		this.content = content;
		this.btnBack = btnBack;
		this.updateView();
	}
	updateView() {
		var html = '';
		for (let value in this.content) {
			html += `<a class="section-menu" href="#${this.content[value].path}">${this.content[value].text}</a>`;
		}
		this.viewPage.innerHTML = this.btnBack+html;
	}
}
