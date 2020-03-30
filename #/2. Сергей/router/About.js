import {backButton} from "./shared/backButton";

export class About {
    constructor(element) {
        this.element = element
    }

    render() {
        return this.element.innerHTML = 
			`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate est hic natus omnis quasi qui unde? ${backButton}`;
    }
}