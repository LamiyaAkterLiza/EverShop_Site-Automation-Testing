const searchAction = require("../test/search/searchAction.js");
const ProductName= "Nike react infinity run flyknit";

describe("Evershop Search Functionality",()=>{     // This is array functionality
    it("Successfully search for a valid product",async()=>{
        await searchAction.clickSearchIcon();
        await searchAction.enterProductName(ProductName);
        await browser.pause(5000); // Enter the product name in the search input
        await browser.keys("Enter"); // Press the Enter key to initiate the search
        await searchAction.Clickproduct(); // Click on the first product in the search results
        await browser.pause(5000); // Pause for 5 seconds to allow the product details page to load
    });
}); // End of the test case