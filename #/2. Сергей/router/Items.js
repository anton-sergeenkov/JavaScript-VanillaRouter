import {backButton} from './shared/backButton'

export class Items {
    constructor(element) {
        this.element = element;
        this.mockList = `
            {
                "items": {
                "1": {"name":"item1","quantity":"1","price":"20"},
                "2": {"name":"item2","quantity":"5","price":"5"},
                "3": {"name":"item3","quantity":"3","price":"30"}
            },
                "total": 3
            }`;
    }

    render() {
        let result = [];
        let mockList = JSON.parse(this.mockList);
        for (let item in mockList.items) {
            let str = `<div class="item" id="item_${item}">`;
            for (let characteristic in mockList.items[item]) {
                str += `<h3>${characteristic.toUpperCase()}: ${mockList.items[item][characteristic]}</h3>`
            }
            str += '</div> <hr>';
            result.push(str);
            str = '';
        }
        return this.element.innerHTML = `<div id="itemsPage">${result.join('')}</div>${backButton} `
    }
}
