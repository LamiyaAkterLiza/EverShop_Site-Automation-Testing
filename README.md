# 🛍️ Evershop E2E Testing  

## 📌 Project Overview  
-->This project tests the **Search** functionality of the **Evershop** e-commerce platform. The client requested a **dynamic search feature** that allows users to find products using **keywords** or **specific text**.  

-->Also Demonstrates **(Pre-view cart, add product to cart, post_view cart, remove from cart)** via **API Testing (Manual & Automation)** .

## 🔎 Scenario  
- A user searches for a product using different keywords.  
- The system should provide **relevant results** with **dynamic suggestions**.  
- The user adds a **size, color, qnty Product** to the cart and verifies it.  
- The cart should display the **correct selected product**.  
- Testing is performed via **Automation Testing**.

## ✅ Tasks Performed  
### **Automation Testing Via Selenium Webdriver**  
- **Requirement analysis** for the search feature.  
- Created and executed **test cases** for the search, add product to cart feature.
- Cart management **(size, color, qnty)**.
- Conducted **Automation Testing** using **Selenium library**. 

### **Automation Testing Via Webdriverio**  
- Developed **automated test scripts** using **(node.js)**.  
- Implemented **test cases** for search, add product to cart functionality.  
- Validated **dynamic search suggestions** and **filtered results**.  
- Performed **cross-browser testing** (Chrome).
- Conducted **Automation Testing** using **Mocha framework**.  
- Integrated tests with **allure** for reporting.  
- Captured screenshots for **failed test cases**.  
- Generated an **automation test report**.  

## 🚀 How to Run Tests  
**Automation Testing Via Webdriverio**
1. For Run test cases use the command --> **npm run wdio**
3. If run generates an Allure report for result analysis, then use the command --> **npm run getReport**
 
