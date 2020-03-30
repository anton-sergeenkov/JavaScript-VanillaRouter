import { WFMComponent } from "../../framework";

class ItemsPageComponent extends WFMComponent {
    constructor(config) {
        super(config)
    }
}

const itemsElements = {
    items: {
        1: {name: 'item1', quantity: 1, price: 20},
        2: {name: 'item2', quantity: 5, price:  5},
        3: {name: 'item3', quantity: 3, price: 30},
    },
    total: 3
}

const items = Object.keys(itemsElements.items).map(item => {

    const { name, quantity, price } = itemsElements.items[item];

    return ` 
            <div style={width: 400px}>
            <div class="col s6 offset-s3" style="margin-top: 40px">
                <div class="card blue-grey darken-1">
                    <div class="card-content white-text">
                    <span class="card-title">${name}</span>
                    <p>${quantity}</p>
                    </div>
                    <div class="card-action">
                    <a href="#">${price}</a>
                    </div>
                </div>
            </div>
            </div>`       
}).join('')


export const itemsPageComponent = new ItemsPageComponent({
    selector: 'app-items-page',
    template: `
        <div style="padding: 20px;">
        <div style="display: flex; align-items: center;" >
            <a href="#menu"><-- BackLink</a>
            <h1 style="margin-left: 30px">Items</h1>
        </div>
        <div>Total items: ${itemsElements.total}</div>
        <div>${items}</div>
        </div>`
})