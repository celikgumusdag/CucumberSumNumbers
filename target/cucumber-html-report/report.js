$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Sum.feature");
formatter.feature({
  "line": 3,
  "name": "Sum the given numbers with cucumber tool",
  "description": "",
  "id": "sum-the-given-numbers-with-cucumber-tool",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@SumFeature"
    }
  ]
});
formatter.scenario({
  "line": 5,
  "name": "The sum of a list of numbers should be calculated",
  "description": "",
  "id": "sum-the-given-numbers-with-cucumber-tool;the-sum-of-a-list-of-numbers-should-be-calculated",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "a list of numbers",
  "rows": [
    {
      "cells": [
        "17"
      ],
      "line": 7
    },
    {
      "cells": [
        "42"
      ],
      "line": 8
    },
    {
      "cells": [
        "4711"
      ],
      "line": 9
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I summarize them",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "should I get 4770",
  "keyword": "Then "
});
formatter.match({
  "location": "SumController.aListOfNumbers(Integer\u003e)"
});
formatter.result({
  "duration": 358097731,
  "status": "passed"
});
formatter.match({
  "location": "SumController.iSummarizeThem()"
});
formatter.result({
  "duration": 167908,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4770",
      "offset": 13
    }
  ],
  "location": "SumController.shouldIGet(int)"
});
formatter.result({
  "duration": 19794741,
  "status": "passed"
});
});