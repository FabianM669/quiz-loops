/*Fabian*/

var prompt = require('prompt-sync').prompt;

console.log("Hello, what's your name?");

var name = prompt();

if(name) {
	console.log('Hi ' + name + ', lucky you, its quiz time!');
};

var questions = [
	
	{
		question:"What's the default display value of a DIV element?",
		answer:'block'
	},
	{
		question:"True or false, CSS stands for Cascading Super Squirrels?",
		answer:'false'
	},
	{
		question:"In a computer language, a group of words, numbers, and operators that performs a specific task is a?",
		answer:'statement'	
	},
	{
		question:"The rules for valid format and combinations of instructions is called a computer language, this is also sometimes referred to as its?",
		answer:'syntax'
	},
	{
		question:"What does WWW stand for?",
		answer:'world wide web'
	},
	{
		question:"HTML is composed of small units called?",
		answer:'tags'
	},
	{
		question:"With CSS, you are able to make styles apply to only certain elements by grouping properties within ?",
		answer:'selectors'
	},
	{
		question:"This CSS property allows us to change the default way the box model affects elements.",
		answer:'box-sizing'
	},
	{
		question:"The default value of the position property is?",
		answer:'static'
	},
	{
		question:"These positioned elements are positioned relative to the browser window?",
		answer:'fixed'
	},
	{
		question:"'Print', 'screen', and 'all' are all common types of?",
		answer:'media querys'
	},
	{
		question:"Most programming languages (like javascript) are separated into things called?",
		answer:'expressions'
	},
	{
		question:"json is a way to format?",
		answer:'data'
	},
	{
		question:"Traditionally at the end of a statement in javascript you need to put a?",
		answer:'semicolon'
	}
	];

var i = 0;
var input;

while (i < questions.length) {
	console.log("Question " + ": " + questions[i].question);
	input = prompt();
	if(input===questions[i].answer){
		console.log("correct");
	}
	else{
		console.log("sorry, the correct answer was " + questions[i].answer);
	}
	i++;
}

