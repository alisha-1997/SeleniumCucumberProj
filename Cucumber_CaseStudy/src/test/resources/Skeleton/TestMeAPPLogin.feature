Feature: Login feature for TestMeAPP
Scenario Outline: Valid Login scenaio

Given url of TestMeApp "http://10.232.237.143:443/TestMeApp/login.htm"
When user gives "<userName>" as username
And user gives "<password>" as password
Then user clicks on logIn button

Examples:
|userName|password|
|selenium|abs123  |



