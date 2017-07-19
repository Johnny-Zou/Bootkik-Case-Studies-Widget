//This javascript file slides between different questions

var questionArray = [
	["<div id=\"caseQuestionText\"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></div><div id=\"answerContainer\"><p><textarea></textarea></p></div>"],
	["<div id=\"caseQuestionText\"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></div><div id=\"answerContainer\"><p><textarea></textarea></p></div>"],
	["<div id=\"caseQuestionText\"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></div><div id=\"answerContainer\"><p><textarea></textarea></p></div>"],
	["<div id=\"caseQuestionText\"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></div><div id=\"answerContainer\"><p><textarea></textarea></p></div>"],
	["<div id=\"caseQuestionText\"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></div><div id=\"answerContainer\"><p><textarea></textarea></p></div>"],
]


var maxQuestion = questionArray.length;


$(document).ready(function(){

	var container = $("#changingQuestionResponseInner");
	var currentQuestionPageIndex = 0;

	var keyPressedCaseStudyQuestion = false;

	$(document).on("keydown",function(e){ 

		if(keyPressedCaseStudyQuestion == false){
			switch(e.which){
				case 37:
					//left
					slideCaseQuestionLeft();
					break;				
				case 39:
					//right
					slideCaseQuestionRight();
					break;
			}
		}
	});

	function slideCaseQuestionLeft(){
		if(currentQuestionPageIndex != 0){
			keyPressedCaseStudyQuestion = true;
			scrollQuestionCaseStudy(currentQuestionPageIndex,currentQuestionPageIndex-1);
			transitionQuestionProgress(currentQuestionPageIndex, currentQuestionPageIndex-1);
			currentQuestionPageIndex = currentQuestionPageIndex - 1;
		}
	}

	function slideCaseQuestionRight(){
		if(currentQuestionPageIndex != maxQuestion -1){
			keyPressedCaseStudyQuestion = true;
			scrollQuestionCaseStudy(currentQuestionPageIndex,currentQuestionPageIndex+1);
			transitionQuestionProgress(currentQuestionPageIndex, currentQuestionPageIndex+1);
			currentQuestionPageIndex = currentQuestionPageIndex + 1;
		}
	}

	//scroll the content case study left or right
	function scrollQuestionCaseStudy(current,next){
		$(".changingQuestionResponseInner").remove();
		var slideInDirectionCaseStudyQuestion;
		var slideOutDirectionCaseStudyQuestion;

		if(next > current){
			//This means that the next page is under current page
			slideOutDirectionCaseStudyQuestion = "slideLeftOutCaseQuestion";
			slideInDirectionCaseStudyQuestion = "slideLeftInCaseQuestion";
		}
		else if(next < current){
			//this means that the next page is above current page
			slideOutDirectionCaseStudyQuestion = "slideRightOutCaseQuestion";
			slideInDirectionCaseStudyQuestion = "slideRightInCaseQuestion";
		}
		var slideInQuestion = "<div id=\"changingQuestionResponseInner\" class=\"changingQuestionResponseInner " + slideInDirectionCaseStudyQuestion + "\">" + questionArray[next] + "</div>";
		var slideOutQuestion = "<div id=\"changingQuestionResponseInner\" class=\"changingQuestionResponseInner " + slideOutDirectionCaseStudyQuestion + "\">" + questionArray[current] + "</div>";
		
		$("#changingQuestionResponseOuter").append(slideInQuestion);
		$("#changingQuestionResponseOuter").append(slideOutQuestion);
		setTimeout(function(){
			keyPressedCaseStudyQuestion = false;
		},250);
	}

	//set the circle
	function transitionQuestionProgress(current,next){
		$("#question"+ String(current + 1) +" .outer").removeClass("active").addClass("hidden");
		$("#question"+ String(next + 1) +" .outer").removeClass("hidden").addClass("active");
	}

});