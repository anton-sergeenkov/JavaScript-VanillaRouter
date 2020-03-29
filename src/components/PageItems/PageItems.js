import classes from './PageItems.css';

class PageItems {
    constructor() {
        this.items = [
            { name: 'item1', quantity: 1, price: 20 },
            { name: 'item2', quantity: 5, price: 5 },
            { name: 'item3', quantity: 3, price: 30 }
        ];
    }

    render() {
        return `
            <h2>Товары</h2>
        `
    }
}

export default PageItems;
