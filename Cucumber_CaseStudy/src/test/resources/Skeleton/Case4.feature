Feature: Case4
Scenario Outline: user moves to cart without adding any item in it

Given url for for TestMeApp "http://10.232.237.143:443/TestMeApp/login.htm"
When user enters username field "<username>"
And user enters password field "<password>"
And user clicks login button
And user clicks serach field to search "<item>"
And user clicks Find Details
Then TestMeApp doesnt display the cart icon

Examples:
|username|password   |item     |
|Lalitha |password123|HeadPhone|