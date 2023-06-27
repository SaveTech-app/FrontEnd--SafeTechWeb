Feature: Registered technician makes report on appointment

  As a registered technician I want to make the appointment report to save that information

  Scenario: Technician performs appointment report

    Given the technician is in your profile view
    And select create report
    Then the view shows a form with your technical information
    When the technician enters the collected information
    And save the information
    Then the view will show a preview before saving
