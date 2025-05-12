class searchObject{
    get EnterSearchIcon(){
        return $ (".search-icon");
    }
    get EnterSearchText(){
        return $ ("//input[@placeholder='Search']");
    }
    get ClickProducts(){
        return $ ("//div[@class='product-thumbnail-listing']");
    } 
}

module.exports = new searchObject();
// This code defines a class called `searchObject` that contains two properties: `EnterSearchIcon` and `EnterSearchText`.
// These properties are used to locate elements on a web page using the WebdriverIO framework.
