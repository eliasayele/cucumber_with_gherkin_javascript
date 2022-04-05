Feature: Hear shout
Scenario: Listener is within range
Given Lucy located 15 meters from the sean and Lucy has the ear
When Sean shout "free beales at Sean's"
Then Lucy hears Sean's message


Feature:  Login to the system
Scenario Outline: user will successfully login
Given I am on Login screen
And <email> and <password> are filled with valid value
When I click on “Login_Button”
Then I successfully login into the app: <result>


Feature: Logout
Scenario: User will successfully logout
Given I am on profile screen
When I click on "Logout_Button"
Then I successfully logout from the app 
And I will be navigated to the <login_screen>

Feature: Search flight

Scenario: User will search flight successfully
Given  I am on home page 
And <departure date> and <return date> 
When I click "Search Flight"
Then I will see search result



Feature: Tracking flight booking


    Scenario: User will see the list of bookings
    Given The user have book flights before 
    And the user is open the app
    When user click "My_Bookings_Button"
    Then The user will see the list of bookings 
