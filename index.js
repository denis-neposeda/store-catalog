function render() {
    const productsStore = localStorageUtil.getProducts();

    headerPage.render(productsStore.length);
    productPade.render();
};

spinnerPage.render();

let CATALOG = [];



fetch('server/catalog.json')  
// fetch('https://myjsons.com/v/6cd6735',  {
//     mode: 'no-cors'
// })
    .then(res => res.json())
    .then(body => {
        CATALOG = body;
        setTimeout(() => {
        spinnerPage.handleClear();
        render();
        }, 1000)
        
    })  
    .catch(error => {
        spinnerPage.handleClear();
        errorPage.render();
    });