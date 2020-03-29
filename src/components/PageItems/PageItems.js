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
        let html = '';
        
        this.items.forEach(({ name, quantity, price }) => {
            html += `
                <div class="${classes.item}">
                    <h3>${name}</h3>
                    <p>🍪 <strong>Количество:</strong> ${quantity}</p>
                    <p>🍪 <strong>Цена:</strong> ${price}</p>
                </div>
            `
        })

        return `
            <h2>Товары</h2>
            <div class="${classes.wrapper}">${html}</div>
        `
    }
}

export default PageItems;
