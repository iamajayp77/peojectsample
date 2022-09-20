@FunctionalTest
Feature: useing of tags in cucumber

@SmokeTest
Scenario: s1
Given this is s1

@SmokeTest
Scenario: s2
Given this is s2

@SanityTest
Scenario: s3
Given this is s3

@SanityTest
@SmokeTest
Scenario: s4
Given this is s4

Scenario: s5
Given this is s5

Scenario: s6
Given this is s6