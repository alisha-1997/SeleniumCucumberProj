$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/skeleton/demo.feature");
formatter.feature({
  "name": "demo Feature",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "saun and Lucia are not within the range",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "saun is 1000 meters away from lucia",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.saun_is_meters_away_from_lucia(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "saun shouts \"Free Coffee\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.saun_shouts(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Lucia cannot listen to the message",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.lucia_listens_to_the_message()"
});
formatter.result({
  "status": "passed"
});
});