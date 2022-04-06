const { Given, When, Then, Before } = require('@cucumber/cucumber')
const { assertThat, is } = require('hamjest')

const { Person, Network } = require('../../src/shouty')

Before(function() {
    this.network = new Network()
    this.people = {}
})

Given('a person named {word}', function(name) {
    this.people[name] = new Person(this.network)
})
When('{person} shout {string}', function(person, string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});
Then('{person} hears {person}\'s message', function(person, person2) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});
When('Sean shouts {string}', function(message) {
    this.people['Sean'].shout(message)
    this.messageFromSean = message
})

Then('Lucy should hear Sean\'s message', function() {
    assertThat(this.people['Lucy'].messagesHeard(), is([this.messageFromSean]))
})

Given('{person} is {int} from {person}', function(person, int, person2) {
    // Given('{person} is {float} from {person}', function (person, float, person2) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

When('{person} shout {string}', function(person, string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});