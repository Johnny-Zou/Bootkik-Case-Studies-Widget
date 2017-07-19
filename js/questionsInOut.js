//This file controls the in out sliding feature on clicking the question mark

$(document).ready(function(){
	var questionMark = $('#sideBarQuestionIcon');

	var expanded = false;

	questionMark.on("click", function(){
		if(expanded == true){
			console.log("contracting");
			$('#caseText').removeClass("caseTextExpandAnimation").addClass("caseTextContractAnimation");
			$('#caseQuestions').removeClass("caseQuestionContractAnimation").addClass("caseQuestionExpandAnimation");
			expanded = false;
		}
		else if(expanded == false){
			console.log("expanding");
			$('#caseText').removeClass("caseTextContractAnimation").addClass("caseTextExpandAnimation");
			$('#caseQuestions').removeClass("caseQuestionExpandAnimation").addClass("caseQuestionContractAnimation");
			expanded = true;
		}
		
	});
});