import {By, Builder, Browser, Key} from "selenium-webdriver";
import {expect} from "chai";

const ProductName = "Nike air zoom pegasus 35"; //product name
const ProductSize = [ 'M', 'L' ]
const ProductColor = ['Red', 'Blue', 'Black', 'Green']


function getRandomNumber(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
  }

async function ProjectRun() {
    let driver = await new Builder().forBrowser(Browser.CHROME).build();
    await driver.manage().window().maximize();
    await driver.get("https://demo.evershop.io/"); //to enter the browser from this link
    await driver.findElement(By.className('search-icon')).click(); //click the search button

    const SearchXpath = "//input[@placeholder='Search']"; //Xpath the search element from website
    await driver.findElement(By.xpath(SearchXpath)).sendKeys(ProductName); //search product name
    await driver.findElement(By.xpath(SearchXpath)).sendKeys(Key.ENTER); //click enter button

//get random product
    const getProduct = `(//span[contains(text(),'Nike air zoom pegasus 35')]) [${getRandomNumber(2,3)}]`; //Xpath the product name from website
    await driver.findElement(By.xpath(getProduct)).click(); 

//get random product size
    let size = ProductSize[getRandomNumber(0,1)]; //get random size from the array
    const getSize = `//a[contains(text(), '${size}') and @href='#']`;
    await driver.findElement(By.xpath(getSize)).click();
    await driver.sleep(1000);

//get random color 
    let color = ProductColor[getRandomNumber(0,3)]; //get random color from the array
    const getColor = `//a[contains(text(), '${color}') and @href='#']`;
    await driver.findElement(By.xpath(getColor)).click();
  
    const actualValue = await driver.findElement(By.xpath(getProduct)).getText(); //get the product name
    expect(ProductName).to.eql(actualValue); //compare the product name
    //click the product name
    await driver.sleep(5000);
    await driver.quit();
}
ProjectRun();
