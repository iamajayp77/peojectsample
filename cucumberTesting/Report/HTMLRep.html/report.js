$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/feature/DataTable.feature");
formatter.feature({
  "name": "Test cases for login functionally using data table",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Login into application using data table",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefination.StepDefination.user_is_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter credentials using DataTable",
  "rows": [
    {}
  ],
  "keyword": "When "
});
formatter.match({
  "location": "stepDefination.StepDefination.user_enter_credentials_using_DataTable(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination.StepDefination.click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should land on home page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefination.StepDefination.user_should_land_on_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/java/feature/TagDemo.feature");
formatter.feature({
  "name": "useing of tags in cucumber",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@FunctionalTest"
    }
  ]
});
formatter.scenario({
  "name": "s1",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@FunctionalTest"
    },
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "this is s1",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefination.TagsDemo.this_is_s1()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "s2",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@FunctionalTest"
    },
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "this is s2",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefination.TagsDemo.this_is_s2()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "s3",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@FunctionalTest"
    },
    {
      "name": "@SanityTest"
    }
  ]
});
formatter.step({
  "name": "this is s3",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefination.TagsDemo.this_is_s3()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "s4",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@FunctionalTest"
    },
    {
      "name": "@SanityTest"
    },
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "this is s4",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefination.TagsDemo.this_is_s4()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "s5",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@FunctionalTest"
    }
  ]
});
formatter.step({
  "name": "this is s5",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefination.TagsDemo.this_is_s5()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "s6",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@FunctionalTest"
    }
  ]
});
formatter.step({
  "name": "this is s6",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefination.TagsDemo.this_is_s6()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/java/feature/sign.feature");
formatter.feature({
  "name": "Test cases for login functionally",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Login into application",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.step({
  "name": "user enter \u003cusername\u003e and \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "name": "user should land on home page",
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
        "password"
      ]
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce"
      ]
    },
    {
      "cells": [
        "pannu",
        "ajju"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Login into application",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefination.StepDefination.user_is_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter standard_user and secret_sauce",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefination.StepDefination.user_enter_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination.StepDefination.click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should land on home page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefination.StepDefination.user_should_land_on_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login into application",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefination.StepDefination.user_is_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter pannu and ajju",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefination.StepDefination.user_enter_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination.StepDefination.click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should land on home page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefination.StepDefination.user_should_land_on_home_page()"
});
formatter.result({
  "status": "passed"
});
});