exports.CartPage = class CartPage {
    constructor(page) {
        this.page = page;
        this.noOfProducts = '//*[@id="tbodyid"]/tr/td[2]';
    }

    async checkProductInCart(productName){
        const productsInCart =  await this.page.$$(this.noOfProducts);
        for(let product of productsInCart) {
            if(productName === await product.textContent()) {
                return true;
                break;
            }
        }
    }
}