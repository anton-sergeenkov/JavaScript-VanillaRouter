export const loggingUrles = (history, url) => {
   if (history.length < 10) {
        history.push(url) 
    } else {
        history.length = 0;
        history.push(url)
        console.clear();
    }
    console.log(history)
}