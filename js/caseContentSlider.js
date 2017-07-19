//This javascript file controles 
var content = "  ";

var contentArray = [
	["Jaya was walking up the driveway to Andre's new home. She was very excited; as they had both just graduated from high school and were thinking about buying a small company together that they had been working at for the last couple of years. \"Good afternoon Mrs. DeAngelo\" Jaya said to Andre's mother as she was getting into her car. \"I love your new house.\""],
	["\"Thanks Jaya, I think we are going to be happy here. It will take a while to pay off, but we plan on being here for the long haul,\" replied Mrs DeAngelo. \"Andre is upstairs in his room. You can go talk to him there.\" Jaya went up the stairs and greeted Andre. The two of them sat down and began discussing the opportunity that was before them."],
	["They had both worked part time after schools and in the summers for a neighbour up the street who had a small company cleaning eaves troughs. The company was called \"Clean & Quick Troughs\" owned by Nathan Grant. Nathan was a friend of Andre's family and was looking to get out of the business. He offered to sell it to Andre and Jaya if they wanted to take over for $15,000, the value of the equipment and vehicle."],
	["\"I think we could do it, but the question is how do we know what this business is even worth?\" Andre asked. \"We don't know the first thing about running a business. Where would we start?\" Just then Briana came running into the room carrying a sign that said \"Briana's Lemonade\" in bright crayon colours. Briana was Andre's baby sister and she was going to be selling lemonade today."],
	["\"Do you want to help me sell lemonade?\" she asked her brother. Mom gave me $5 and I had $2. We took the money and bought the mixing stuff and the cups and a jug and I'm ready to go with my sign and my table.\" \"Aren't you the lucky one. When I sold lemonade when I was your age, mom didn't give me any money to start, and I had to use my own $5. My sign said Andre's Lemonade,\" Andre teased."],
	["\"Well mom says I have to pay her back the $5 at the end of the day. I'm going to make lots of money,\" she said as she left. Jaya was thinking after Briana left. \"Do we have enough to do this? I have $4500 saved up from work, how about you?"],
	["\"I have $5,000 saved, but between the two of us, we might be able to borrow some money off our parents if we can show them we know what we are talking about. They have a lot of investments in real estate and stocks so they should be good guides. How do you think we should start organizing ourselves before we talk to them?\" replied Andre a little overwhelmed and frustrated."],
] //This array contains all the content per page, in the Django version of this, it should be an array of all the words in each page

var maxPage = contentArray.length; //this counts the total amount of pages in the case content

$(document).ready(function(){
	var firstPage = "<div id=\"caseContentInnerSlideIn\" class=\"centerHorizontal caseContentInner\"><p>" + contentArray[0] + "</p></div>";
	$("#caseContentOuter").append(firstPage);
	setActiveFirstDot();


	var currentPageIndex = 0;
	var caseContentScrollUpArrow = $("#upArrowContainer");
	var caseContentScrollDownArrow = $("#downArrowContainer");
	
	setOpacityArrows(0);
	//This event listener listens for when the down arrow is clicked
	caseContentScrollDownArrow.on("click",function(){
		slideContentDownArrow();
	});
	//This event listener listens for when the up arrow is clicked
	caseContentScrollUpArrow.on("click",function(){
		slideContentUpArrow();
	});

	//This event listener listens for when the arrow keys are pressed
	var keyPressedCaseStudyText = false; 
	$(document).on("keydown",function(e){
		if(keyPressedCaseStudyText == false){
			switch(e.which){
				case 38:
					//up
					slideContentUpArrow();
					break;
				case 40:
					//down
					slideContentDownArrow();
					break;	
			}
		}
	})

	//This function happens when down is pressed
	function slideContentDownArrow(){
		if(currentPageIndex != maxPage -1){
			keyPressedCaseStudyText = true;
			scrollContentCaseStudy(currentPageIndex,currentPageIndex+1);
			transitionProgress(currentPageIndex, currentPageIndex+1);
			currentPageIndex = currentPageIndex + 1;
			setOpacityArrows(currentPageIndex);
		}
	}

	//This function happens when up is pressed
	function slideContentUpArrow(){
		if(currentPageIndex != 0){
			keyPressedCaseStudyText = true;
			scrollContentCaseStudy(currentPageIndex,currentPageIndex-1);
			transitionProgress(currentPageIndex, currentPageIndex-1);
			currentPageIndex = currentPageIndex - 1;
			setOpacityArrows(currentPageIndex);
		}
	}

	//This function allows the user change to a different page
	function scrollContentCaseStudy(pageIndex, nextPage){
		$(".caseContentInner").remove();
		var slideInDirection;
		var slideOutDirection;

		if(nextPage > pageIndex){
			//This means that the next page is under current page
			slideOutDirection = "slideOutUpCaseStudyText";
			slideInDirection = "slideInUpCaseStudyText";
		}
		else if(nextPage < pageIndex){
			//this means that the next page is above current page
			slideOutDirection = "slideOutDownCaseStudyText";
			slideInDirection = "slideInDownCaseStudyText";
		}

		var slideInContent = "<div id=\"caseContentInnerSlideIn\" class=\"centerHorizontal caseContentInner "+ slideInDirection +"\"><p>" + contentArray[nextPage] + "</p></div>";
		var slideOutContent = "<div id=\"caseContentInnerSlideIn\" class=\"centerHorizontal caseContentInner "+ slideOutDirection +"\"><p>" + contentArray[pageIndex] + "</p></div>";;
		$("#caseContentOuter").append(slideInContent);
		$("#caseContentOuter").append(slideOutContent);
		setTimeout(function(){
			keyPressedCaseStudyText = false;
		},250);
	}

	//This function creates the progress Icons dynamically based on how many pages there are
	function setActiveFirstDot(){
		$("#slideCirclePage1 .active").removeClass("hideSlideCircle").addClass("showSlideCircle");
		$("#slideCirclePage1 .unactive").removeClass("showSlideCircle").addClass("hideSlideCircle");
	}

	//This function transitions the progress icons based off of which page is next and which page was just displayed
	function transitionProgress(current, nextPage){
		var nextPageStringIndex = String(nextPage + 1);
		var currentPageStringIndex = String(current + 1);
		$("#slideCirclePage"+ nextPageStringIndex +" .active").removeClass("hideSlideCircle").addClass("showSlideCircle");
		$("#slideCirclePage"+ nextPageStringIndex +" .unactive").removeClass("showSlideCircle").addClass("hideSlideCircle");

		$("#slideCirclePage"+ currentPageStringIndex +" .active").addClass("hideSlideCircle").removeClass("showSlideCircle");
		$("#slideCirclePage"+ currentPageStringIndex +" .unactive").addClass("showSlideCircle").removeClass("hideSlideCircle");
	}
	function setOpacityArrows(nextPage){
		console.log("nextPage: " + nextPage);
		if(nextPage == 0){
			//set the opacity of the up arrow to 0.1
			caseContentScrollUpArrow.css("opacity", "0.2");
		}
		else if(nextPage == maxPage - 1){
			//set the opacity of the final arrow to 0.1
			caseContentScrollDownArrow.css("opacity", "0.2");
		}
		else{
			caseContentScrollUpArrow.css("opacity", "1");
			caseContentScrollDownArrow.css("opacity", "1");
		}
	}
});

