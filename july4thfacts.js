'use strict';

var Alexa = require('alexa-sdk');
var APP_ID = undefined;

var SKILL_NAME = 'fourth of July Facts';
var GET_FACT_MESSAGE = "Here is your July fourth fact: ";
var HELP_MESSAGE = 'You can say tell me a fourth of july fact, or, you can say stop...';
var HELP_REPROMPT = 'What can I help you with?';
var STOP_MESSAGE = 'Goodbye!';

var data = [
  'Thomas Jefferson drafted the Declaration of Independence on a "laptop," which was a writing desk that could fit on one\'s lap.',
  'John Adams and Thomas Jefferson both died on July fourth 1826.',
  'Only two men signed the Declaration of Independence on July 4th 1776 -- John Hancock and Charles Thompson.',
  'July 4 also marks a day of liberation in both the Philippines and Rwanda.',
  'Americans began observing the Fourth of July as early as 1777, when the first-ever major celebration in Philadelphia included a parade, a thirteen-shot cannon salute and fireworks',
  'Calvin Coolidge, the country\'s 30th president, was born on Independence Day.',
  'July Fourth is the "biggest hot dog holiday of the year," according to TIME magazine, with Americans reportedly consuming about 155 million of them on Independence Day alone.',
  'In a letter to his daughter Sarah Bache in 1784, Benjamin Franklin wrote that he was displeased that the bald eagle had been chosen as the symbol for the nation.',
  'Due to concerns about cracking the iconic instrument, the Liberty Bell has not been rung since 1846.',
  'Thomas Jefferson changed the wording of the Declaration of Independence from "the pursuit of property" to "the pursuit of happiness"',
  'The Liberty Bell had nothing to do with July 4th. It was not called the "Liberty Bell" until the 1830s and that is also when it got its famous crack.',
  'The printed version of the Declaration was called the Dunlap Broadside 200 were made but only 27 are accounted for.',
  'The Declaration of Independence was signed by 56 men from 13 colonies.',
  'The average age of the Signers of the Declaration of Independence was 45.',
  'Congress made Independence Day an official unpaid holiday for federal employees in 1870. In 1938, Congress changed Independence Day to a paid federal holiday.',
  'One out of eight signers of the Declaration of Independence were educated at Harvard seven total',
  'The stars on the original American flag were in a circle so all the Colonies would appear equal.',
  'The White House held its first 4th July party in 1801.',
  'Fireworks are part of the tradition of celebrating this national holiday. The U.S. imported $227.3 million worth of fireworks from China in 2012.',
  'China Is The Largest Exporter Of American Flags In The World',
  'Every air base in the U.S. fires a Salute to the Union at noon on the 4th',
  'The largest fireworks display in the Macy\'s show in New York City',
  'Two of the US national symbols were made abroad Statue of Liberty from France and the Liberty Bell from England.',
  'Edward Rutledge was the youngest signer of the Declaration of Independence at the age of 26 while Benjamin Franklin, 70 years old as the oldest.',
  'one third of all hot dogs consumed come from iowa.',
  'Walt Disney World may just love fireworks the most. The resort consumes the largest amount of fireworks in the U.S. per year, thanks to nightly fireworks displays over the Magic Kingdom.',
  'A rocket can reach speeds of 150 miles per hour, however the shell can reach as high as 200 meters.'
];

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetNewFactIntent');
    },
    'GetNewFactIntent': function () {
        var factArr = data;
        var factIndex = Math.floor(Math.random() * factArr.length);
        var randomFact = factArr[factIndex];
        var speechOutput = GET_FACT_MESSAGE + randomFact;
        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = HELP_MESSAGE;
        var reprompt = HELP_REPROMPT;
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    }
};



{
  "intents": [
    {
      "intent": "GetNewFactIntent"
    },
    {
      "intent": "AMAZON.HelpIntent"
    },
    {
      "intent": "AMAZON.StopIntent"
    },
    {
      "intent": "AMAZON.CancelIntent"
    }
  ]
}
/*
GetNewFactIntent tell me a fourth of july fact
GetNewFactIntent give me a fourth of july fact
GetNewFactIntent I want a fourth of july fact

Alexa, open give me a fourth of july fact.
give me a fourth of july fact
i want a fourth of july fact
*/
