Feature: demo Feature
@tag1
Scenario: saun and Lucia are within the range
Given saun is 20 meters away from lucia
When saun shouts "Free Coffee"
Then Lucia listens to the message  
@tag2
Scenario: saun and Lucia are not within the range
Given saun is 1000 meters away from lucia
When saun shouts "Free Coffee"
Then Lucia cannot listen to the message                               