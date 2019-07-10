Feature: Register feature for TestMeApp
Scenario: valid register scenario

Given URL of TestMeApp "http://10.232.237.143:443/TestMeApp/RegisterUser.htm"
When  user enters "selenium" as userName
And user enters "abc" as FirstName
And user enter "asd" as LastName
And user enters "abs123" as password
And user enters "abs123" as confirmPassword
And user click "Female" as gender
And user enters "abc@gmail.com" as email
And user enters "9999999999" as mobileNumber
And user enters "07/29/2000" as dob
And user enters "ashfghghghghghghghgh" as address
And user selects "What is your Nick Name?" as securityQuestion
And user enters "asdfffd" as nickName
Then user clicks on register button

#Examples:
#|userName|FirstName|LastName|password|confirmPassword|
#|mercury |abc      |asd     |abs123  |abs123         


