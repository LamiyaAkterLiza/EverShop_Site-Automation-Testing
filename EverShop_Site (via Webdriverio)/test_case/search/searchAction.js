const searchObject = require("./searchObject.js");
const ProductName= "Nike react infinity run flyknit";

class searchAction{
    async clickSearchIcon(){
        await searchObject.EnterSearchIcon.click();
    }
    async enterProductName(){
        await searchObject.EnterSearchText.setValue(ProductName);
    }
    async Clickproduct(){
        await searchObject.ClickProducts.click();
    }
}

module.exports = new searchAction();
// // This code defines a class called `searchAction` that is currently empty. It imports the `searchObject` class from another file and exports an instance of the `searchAction` class.