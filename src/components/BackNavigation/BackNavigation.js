import classes from './BackNavigation.css';
import icon from './img/back.svg';

class BackNavigation {
    handleBackHistory() {
        console.log(1);
        window.history.back();
	}
    render() {
        return `
            <img
                onclick="window.history.back()"
                class="${classes.icon}"
                src="${icon}"
                alt="Назад"
                title="Назад"
            />
        `
    }
}

export default BackNavigation;
