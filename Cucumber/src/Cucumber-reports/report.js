$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/skeleton/Login.feature");
formatter.feature({
  "name": "Login feature for demo webshop",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "vaid login scenario",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "url of demowebshop \"http://demowebshop.tricentis.com/login\"",
  "keyword": "Given "
});
formatter.step({
  "name": "user enters \"\u003cusername\u003e\" as username",
  "keyword": "When "
});
formatter.step({
  "name": "user enters \"\u003cpassword\u003e\" as password",
  "keyword": "And "
});
formatter.step({
  "name": "user is in webshop as \"\u003ctype\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "type"
      ]
    },
    {
      "cells": [
        "askmail@email.com",
        "abc123",
        "admin"
      ]
    },
    {
      "cells": [
        "askmail@ymail.com",
        "abc123",
        "guest"
      ]
    },
    {
      "cells": [
        "askmail@gmail.com",
        "abc123",
        "vendor"
      ]
    }
  ]
});
formatter.scenario({
  "name": "vaid login scenario",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "url of demowebshop \"http://demowebshop.tricentis.com/login\"",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinition.url_of_demowebshop(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"askmail@email.com\" as username",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefinition.user_enters_as_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"abc123\" as password",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.user_enters_as_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is in webshop as \"admin\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_in_webshop(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"link text\",\"selector\":\"Log Out\"}\n  (Session info: chrome\u003d75.0.3770.100)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027BDC4-D-5RHXQG2\u0027, ip: \u002710.250.89.16\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_102\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 75.0.3770.100, chrome: {chromedriverVersion: 75.0.3770.90 (a6dcaf7e3ec6f..., userDataDir: C:\\Users\\A07208~1.26\\AppDat...}, goog:chromeOptions: {debuggerAddress: localhost:55314}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 2c3f98bb63b47dc398d02bdded1fd9be\n*** Element info: {Using\u003dlink text, value\u003dLog Out}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByLinkText(RemoteWebDriver.java:380)\r\n\tat org.openqa.selenium.By$ByLinkText.findElement(By.java:220)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat skeleton.LoginStepDefinition.user_is_in_webshop(LoginStepDefinition.java:49)\r\n\tat ✽.user is in webshop as \"admin\"(file:src/test/resources/skeleton/Login.feature:7)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "vaid login scenario",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "url of demowebshop \"http://demowebshop.tricentis.com/login\"",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinition.url_of_demowebshop(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"askmail@ymail.com\" as username",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefinition.user_enters_as_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"abc123\" as password",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.user_enters_as_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is in webshop as \"guest\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_in_webshop(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"link text\",\"selector\":\"Log Out\"}\n  (Session info: chrome\u003d75.0.3770.100)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027BDC4-D-5RHXQG2\u0027, ip: \u002710.250.89.16\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_102\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 75.0.3770.100, chrome: {chromedriverVersion: 75.0.3770.90 (a6dcaf7e3ec6f..., userDataDir: C:\\Users\\A07208~1.26\\AppDat...}, goog:chromeOptions: {debuggerAddress: localhost:55383}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: a39d8aeefbc63ac587583d10cdac5913\n*** Element info: {Using\u003dlink text, value\u003dLog Out}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByLinkText(RemoteWebDriver.java:380)\r\n\tat org.openqa.selenium.By$ByLinkText.findElement(By.java:220)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat skeleton.LoginStepDefinition.user_is_in_webshop(LoginStepDefinition.java:49)\r\n\tat ✽.user is in webshop as \"guest\"(file:src/test/resources/skeleton/Login.feature:7)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "vaid login scenario",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "url of demowebshop \"http://demowebshop.tricentis.com/login\"",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinition.url_of_demowebshop(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"askmail@gmail.com\" as username",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefinition.user_enters_as_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"abc123\" as password",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.user_enters_as_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is in webshop as \"vendor\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_in_webshop(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"link text\",\"selector\":\"Log Out\"}\n  (Session info: chrome\u003d75.0.3770.100)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027BDC4-D-5RHXQG2\u0027, ip: \u002710.250.89.16\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_102\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 75.0.3770.100, chrome: {chromedriverVersion: 75.0.3770.90 (a6dcaf7e3ec6f..., userDataDir: C:\\Users\\A07208~1.26\\AppDat...}, goog:chromeOptions: {debuggerAddress: localhost:55462}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 5b8940dde96d49e313fedcb67642527e\n*** Element info: {Using\u003dlink text, value\u003dLog Out}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByLinkText(RemoteWebDriver.java:380)\r\n\tat org.openqa.selenium.By$ByLinkText.findElement(By.java:220)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat skeleton.LoginStepDefinition.user_is_in_webshop(LoginStepDefinition.java:49)\r\n\tat ✽.user is in webshop as \"vendor\"(file:src/test/resources/skeleton/Login.feature:7)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Data Table Example",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Admin of the test e app enters",
  "rows": [
    {
      "cells": [
        "electronics",
        "head phones",
        "1"
      ]
    },
    {
      "cells": [
        "apparels",
        "sweat shirt",
        "2"
      ]
    },
    {
      "cells": [
        "electronics",
        "USB",
        "2"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.uri("file:src/test/resources/skeleton/demo.feature");
formatter.feature({
  "name": "demo Feature",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "saun and Lucia are within the range",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "saun is 20 meters away from lucia",
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
  "name": "Lucia listens to the message",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.lucia_listens_to_the_message()"
});
formatter.result({
  "status": "passed"
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