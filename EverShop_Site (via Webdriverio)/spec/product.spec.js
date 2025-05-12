const productAction = require("../test/productDetails/productAction.js");
const Size = "M";
const Color = "Green";
const Product_qty = "5";
describe("Product Details", () => {
    it("Add product to cart", async()=>{
        await productAction.EnterProductSize(Size); // Click on the product size option
        await productAction.EnterProductColor(Color); // Click on the product color option
        await productAction.EnterProductQuantity(Product_qty); // Enter the desired product quantity
        await productAction.ClickAddToCart(); // Click the "Add to Cart" button
        await browser.pause(5000); // Pause for 3 seconds to allow the product to be added to the cart
    });
});