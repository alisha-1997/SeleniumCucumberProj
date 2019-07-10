Feature: Case 3
Scenario: searching a particular product

Given the url of TestMeApp "http://10.232.237.143:443/TestMeApp/login.htm"
When user enter "Lalitha" as username
And user enter "Password123" as password
And user clicks on login button
And user searches for "headphone" in search field
And user clicks on findDetails
And user clicks on addToCart
And user clicks on cart
And user clicks on checkout
And user clicks on PrceedToPay
And user selects bank
And user clicks on continue
And user gives "123457" the userName
And user gives "Pass@457" as the Password
And user clicks on Login
And user enters "Trans@457" transactionPassword
Then user clicks on PayNow
