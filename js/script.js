
 var cone = new Image(); //The cone image
 var logo =  new Image();//The logo image (little pink icon)
 var scoopsImages = [];  //The generated scoop images

function preloadData(){
	cone.src = "./imgs/froYoImages/cone.png";
	logo.src = "./imgs/favicon.ico";

	//A list of all the scoop image sources
	var possibleScoopSrcs = ["./imgs/froYoImages/blueScoop.png","./imgs/froYoImages/greenScoop.png",
													"./imgs/froYoImages/brownScoop.png","./imgs/froYoImages/purpleScoop.png",
													"./imgs/froYoImages/yellowScoop.png","./imgs/froYoImages/redScoop.png",
													"./imgs/froYoImages/whiteScoop.png", "./imgs/froYoImages/pinkScoop.png",
													"./imgs/froYoImages/creamScoop.png"];

	for(var i=0; i < possibleScoopSrcs.length; i++){
		var image = new Image();
		image.src = possibleScoopSrcs[i];
		scoopsImages.push(image);
	}
}


function displayFroYo(langs, repoName, repoOwner){
	var canvasDiv = document.getElementById("canvasDiv");
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");
	canvasDiv.style.display = "inline";
	clearCanvas(canvas);
	loadCanvas(canvas, context, langs, repoName, repoOwner);
}

function froYoMyRepo(){
	hideError();
	var input = processInput();

	if(input){
			console.log("input = " +input);
			getLangsFromGitHub(input[0],input[1], function(langArray){
					if(typeof (langArray) === "object") {
							var langs = langArray;
							console.log("langs = " + langs);
							if(langs.length > 4){
								displayError(1);
							}else{
								displayFroYo(langs, input[1], input[0]);
								displayCanvasButton();
							}
					}
				});
	}
}

function processInput(){
	var inputMethod1RadioButton = document.getElementById("inputMethod1");
	var urlInput = document.getElementById("repoUrl");
	var repoOwnerInput = document.getElementById("repoOwner");
	var repoNameInput = document.getElementById("repoName");

	if(inputMethod1RadioButton.checked){
		//Parse URL and locate owner and repo name
		if(urlInput.value)
		{
				var input = [];
				var url = urlInput.value;;

				//If the url ends with a "/", remove it
				if(url.slice(-1) === "/"){
						url = url.slice(0, -1);
				}

				//Reverse string.
				url = url.split("").reverse().join("");

				//Find the first /. Everything before that is the repo.
				var repo = "";
				for(var i = 0; url.length > i && url[i] != "/"; i++){
						repo = repo.concat(url[i]);
				}

				//Reverse the repo name.
				repo = repo.split("").reverse().join("");

				//Find the second "/". Everything between the first and the second "/" is the repoOwner.
				var repoOwner = "";
				for(var i = repo.length+1; url.length > i && url[i] != "/"; i++){
						repoOwner = repoOwner.concat(url[i]);
				}

				//Reverse the repoOwner.
				repoOwner = repoOwner.split("").reverse().join("");

				//Assign the data to the input array.
				input.push(repoOwner);
				input.push(repo);
		}else{
				displayError(4);
		}
	}else{
		if(repoOwnerInput.value && repoNameInput.value){
			var input = [];
			input.push(repoOwnerInput.value.trim());
			input.push(repoNameInput.value.trim());
		}else{
			displayError(2);
		}
	}
	return input;
}

function getLangsFromGitHub(ownerName, repo, callback){
	var gitHubApiEndpointUrl = "https://api.github.com"; //The baseline git API endpoint, excluding all subdirectories.
	var xhttp = new XMLHttpRequest();

	xhttp.open("GET", (gitHubApiEndpointUrl+"/repos/"+ownerName+"/"+repo+"/languages"), true); // https://api.github.com/repos/ZacharyDavidSaunders/bubo/languages
	console.log("API request = " + gitHubApiEndpointUrl+"/repos/"+ownerName+"/"+repo+"/languages");
	xhttp.send();

	xhttp.onreadystatechange = function() {
				if (this.readyState == 4 && this.status == 200) {
						var response = JSON.parse(xhttp.responseText);
						var langs = Object.keys(response);
						callback(langs);
				}else if(this.readyState == 4){
					console.log("readyState: " + this.readyState);
					console.log("status: " + this.status);
					displayError(3);
				}
	};
}

function useInputMethod2(){
	var input1Items = document.getElementsByClassName('inputMethod1');
	var input2Items = document.getElementsByClassName('inputMethod2');

	for(var i=0; i<input1Items.length; i++) {
		input1Items[i].style.display = 'none';
	}

	for(var i=0; i<input2Items.length; i++) {
		input2Items[i].style.display = 'inline';
	}
}

function useInputMethod1(){
	var input1Items = document.getElementsByClassName('inputMethod1');
	var input2Items = document.getElementsByClassName('inputMethod2');

	for(var i=0; i<input2Items.length; i++) {
		input2Items[i].style.display = 'none';
	}

	for(var i=0; i<input1Items.length; i++) {
		input1Items[i].style.display = 'inline';
	}
}

function loadCanvas(canvas, context, langs, repoName, repoOwner){
	var middleWidth = canvas.width / 2;   //This is a baseline for the middle of the canvas.
	var scoops = [];
	var randomNumber; //A random seed used to pick the scoop images.
	context.font = "bold 25pt Verdana";
	context.textAlign= "center";
	context.lineWidth = 1.8;
	context.strokeStyle = 'white';
	context.fillStyle = "black";

	for(var i = 0; i < langs.length; i++){
			randomNumber = Math.floor(Math.random() * Math.floor(scoopsImages.length));
			scoops.push(scoopsImages[randomNumber]);
	}
	console.log("Scoops length = "+scoops.length);

	context.drawImage(cone, middleWidth-60, 350, cone.width/8, cone.height/8);
	context.fillText(repoName, cone.width/6 + 5, cone.height/4);
	context.strokeText(repoName, cone.width/6 + 5, cone.height/4);
	context.font = "bold 15pt Verdana";
	context.fillText("by "+repoOwner, cone.width/6 + 5, cone.height/4 + 25);

	for(var i=0; i < scoops.length; i++){
			var scoopOffset = cone.height/8;
			var langLabelOffset = scoopOffset*1.5;
			context.font = "bold 20pt Verdana";
			for(var i=0; i < scoops.length; i++) {
				context.drawImage(scoops[i], 100, scoopOffset, scoops[i].width/8, scoops[i].height/8);
				context.fillText(langs[i], 180, langLabelOffset);
				context.strokeText(langs[i], 180, langLabelOffset);
				scoopOffset-= 80;
				langLabelOffset-=80;
			}
	}
	context.drawImage(logo, middleWidth+115, 520, logo.width/4, logo.height/4);
}

function clearCanvas(canvas){
	canvas.width = canvas.width; //By redefining a property, all the properties of the canvas is reset.
}

function displayError(errorCode){
	var errorMessage = document.getElementById("errorDiv");
	var errorP = document.getElementById('errorP');
		switch (errorCode) {
			case 1:
				errorP.innerHTML = "<strong>Whoops!</strong><br> Your repo has more than 4 languages! If we were to create a FroYo for this repo, it would be too tall and it would topple over."+
				"<br> Is this a metaphor? ... Possibly... I'm just a chunk of javascript, what do I know?";
				break;
			case 2:
				errorP.innerHTML = "<strong>Whoops!</strong><br> You must enter both a repo owner and repo name!";
				break;
			case 3:
				errorP.innerHTML = ("<strong>Whoops!</strong><br> We were unable to retrieve data about the repo you entered. Please check your spelling and ensure that the repo is public. "+
				"After checking that, if you are still running into problems, please see the FAQ on the <a href=\"about.html\">About</a> page.");
				break;
			case 4:
				errorP.innerHTML = "<strong>Whoops!</strong><br> You must enter a GitHub URL!";
				break;
			default:
				break;
		}
		errorMessage.style.display = "block";
}

function hideError(){
		var errorMessage = document.getElementById("errorDiv");
		errorMessage.style.display = "none";
}

function displayCanvasButton(){
		var canvasButtons = document.getElementById("canvasButtons");
		canvasButtons.style.display = "block";
}

function saveCanvasImage(){
		var saveLink = document.getElementById("saveLink");
		var canvas = document.getElementById("canvas");

		saveLink.href = canvas.toDataURL();
		saveLink.download = "froYoMyRepo.png";
}
