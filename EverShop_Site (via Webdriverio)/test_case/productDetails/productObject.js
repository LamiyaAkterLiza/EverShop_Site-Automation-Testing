// This is the page object file for the product page of the e-commerce website.
function getRandomNumber(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
  }

  
class productObject {
    get ProductSizes() {
        const size = ProductSize[getRandomNumber(0, 1)]; // get random size from the array
        return $(`//a[contains(text(),${size}) and @href='#']`);
    }
    get ProductColors() {
        const color = ProductColor[getRandomNumber(0, 3)]; // get random size from the array
        return $(`//a[contains(text(),${color}) and @href='#']`);
    }
    get ProductQuantity() {
        const value = ProductQuantity[getRandomNumber(0, 4)]; // get random size from the array
        return $(`//input[@type='text' and @name='qty' and @value= ${value}]`);
    }
    get EnterAddToCart() {
        return $("//button[@type='button' and @class='button primary outline']");
    }
}
module.exports = new productObject();



