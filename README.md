# automationwithcypress
Automation project to test http://www.practiceselenium.com with Cypress. 

# Testcase
It use blackbox testing technique. Means that I as tester doesn't know what really happening in backend. We just test the web with give certain input with various scenarios and check the result. 

Beside that, this automation project will focus on Checkout flow area. There are 2 type of the test case: positive and negative test with end-to-end scenario. 

Link to testcase: https://docs.google.com/document/d/15C7u6Mg2vcpIK7LYRPB_4Kzqz3uMzGs89z92pNm2aqg/edit?usp=sharing

# Bug Report

1. Title: Checkout with invalid email doesn’t return any error
2. Browser: Tested in Chrome
3. Summary: Checkout with invalid form of email doesn’t return error. 
4. Steps to reproduce:
    1. Open home
    2. Click Menu. Assert ‘Menu’ title in top of page
    3. Click Checkout button Green Tea
    4. Fill Customer Info
        E-mail: irfan@com
        Name: Irfan Hidayatullah
        Address: Malang
    5. Fill Payment
        Card Type: Visa
        Cart Number: 123
        Cardholder Name: Irfan
        Verification Code: 124
    6. Click Place Order
    Or just run cypress/integration/tests/checkout_with_invalid_email.js
5. Expected Result: Checkout with invalid email should return error
6. Actual Result: Checkout with invalid doesn’t return any error + redirect to menu page

# Step to run this automation:
    1. go to automationwithcypress folder
    2. npm install. It will create node_modules folder
    3. npm run open. It will open test runner in Cypress

