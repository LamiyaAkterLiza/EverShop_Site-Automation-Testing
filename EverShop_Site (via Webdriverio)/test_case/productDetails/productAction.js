const productObject= require("./productObject.js");
const Size = [ 'M', 'L' ];
const Color = ['Black', 'Green','pink','purple'];
const qty = [1, 2, 3, 4, 5];


class productAction{
    async EnterProductSize(Size){
        await productObject.ProductSizes.setValue(Size);
    }
    async EnterProductColor(Color){
        await productObject.ProductColors.setValue(Color);
    }
    async EnterProductQuantity(qty) {
        await productObject.ProductQuantity.clearValue(); // clear old value
        await productObject.ProductQuantity.addValue(qty); // add new value
    }
    async ClickAddToCart(){
        await productObject.EnterAddToCart.click();
    }
}
module.exports = new productAction();
