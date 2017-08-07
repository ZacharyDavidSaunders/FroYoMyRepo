function displayFroYo(langs, repoName, repoOwner){
  var canvasDiv = document.getElementById("canvasDiv");
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext("2d");
  canvasDiv.style.display = "inline";
  clearCanvas(context, canvas);
  loadCanvas(canvas, context, langs, repoName);
}

function froYoMyRepo(){
  var input = processInput();

  if(input){
      console.log("input = " +input);
      getLangsFromGitHub(input[0],input[1], function(langArray){
          if(typeof (langArray) ==="object") {
              var langs = langArray;
              console.log("langs = " + langs);
              displayFroYo(langs, input[1], input[0]);
          }
      });
  }else{
  }
}

function processInput(){
  var inputMethod1RadioButton = document.getElementById("inputMethod1");
  //var inputMethod2RadioButton = document.getElementById("inputMethod2");
  //var urlInput = document.getElementById("repoUrl");
  var repoOwnerInput = document.getElementById("repoOwner");
  var repoNameInput = document.getElementById("repoName");

  if(inputMethod1RadioButton.checked){
    //Parse URL and locate owner and repo name
  }else{
    if(repoOwnerInput.value && repoNameInput.value){
      var input = [];
      input.push(repoOwnerInput.value.trim());
      input.push(repoNameInput.value.trim());
    }else{
    }
  }
  return input;
}

function getLangsFromGitHub(ownerName, repo, callback){
  var gitHubApiEndpointUrl = "https://api.github.com";
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
            console.log("readyState: " +this.readyState);
            console.log("status: " +this.status);
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

function loadCanvas(canvas, context, langs, repoName){
  var middleWidth = canvas.width / 2;
  var cone = new Image();
  var logo = new Image();
  var randomNumber;
  var scoops = [];
  var possibleScoopSrcs = ["../imgs/froYoImages/blueScoop.png","../imgs/froYoImages/greenScoop.png","../imgs/froYoImages/brownScoop.png","../imgs/froYoImages/purpleScoop.png","../imgs/froYoImages/yellowScoop.png","../imgs/froYoImages/redScoop.png"];

  context.font = "bold 25pt Verdana";
  context.textAlign= "center";
  context.lineWidth = 1.8;
  context.strokeStyle = 'white';
  context.fillStyle = "black";
  cone.src = "../imgs/froYoImages/cone.png";
  logo.src = "../imgs/favicon.ico";
  for(var i = 0; i < langs.length; i++){
      randomNumber = Math.floor(Math.random() * possibleScoopSrcs.length);
      scoops.push(new Image());
      scoops[i].src = possibleScoopSrcs[randomNumber];
  }

  console.log("Scoops length = "+scoops.length);
  var scoopOffset = cone.height/8;
  var langLabelOffset = scoopOffset*1.5;
  context.drawImage(cone, middleWidth-60, 350, cone.width/8, cone.height/8);
  context.fillText(repoName, cone.width/6 + 5, cone.height/4);
  context.strokeText(repoName, cone.width/6 + 5, cone.height/4);
  context.font = "bold 20pt Verdana";
  for(var i =0; i < scoops.length; i++) {
      context.drawImage(scoops[i], 100, scoopOffset, scoops[i].width/8, scoops[i].height/8);
      context.fillText(langs[i], 180, langLabelOffset);
      context.strokeText(langs[i], 180, langLabelOffset);
      scoopOffset-= 80;
      langLabelOffset-=80;
  }
  context.drawImage(logo, middleWidth+115, 520, logo.width/4, logo.height/4);
}

function clearCanvas(context, canvas){
  canvas.width = canvas.width; //By redefining a property, the canvas is reset.
}
