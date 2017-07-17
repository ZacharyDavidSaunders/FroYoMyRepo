function displayFroYo(langs, repoName, repoOwner){
  var canvasDiv = document.getElementById("canvasDiv");
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext("2d");

  if(canvasDiv.style.display == "none"){
    canvasDiv.style.display = "inline";
    loadCanvas(canvas, context, langs, repoName, repoOwner);
  }else{
    clearCanvas(context);
    loadCanvas(canvas, context, langs, repoName, repoOwner);
  }
}

function froYoMyRepo(){
  var input = processInput();
  var langs;
  var alert = document.getElementById("alert");
  if(input.length != 2){
    //Invalid input
  }else{
    console.log("input = " +input);
    getLangsFromGitHub(input[0],input[1], function(langArray){
      langs = langArray;
      console.log("langs = " +langs);
      if(langs.length > 0){
          console.log("Displaying FroYo......");
          //displayFroYo(langs, input[1], input[0]);
      }else{
        alert.style.display = "inline";
      }
    });
  }
}

function processInput(){
  var inputMethod1RadioButton = document.getElementById("inputMethod1");
  //var inputMethod2RadioButton = document.getElementById("inputMethod2");
  //var urlInput = document.getElementById("repoUrl");
  var repoOwnerInput = document.getElementById("repoOwner");
  var repoNameInput = document.getElementById("repoName");
  var input = [];

  if(inputMethod1RadioButton.checked){
  }else{
    if(repoOwnerInput.value != "" && repoNameInput.value != ""){
      input.push(repoOwnerInput.value.trim());
      input.push(repoNameInput.value.trim());
    }
  }
  return input;
}

function getLangsFromGitHub(ownerName, repo, callback){
  var gitHubApiEndpointUrl = "https://api.github.com";
  var xhttp = new XMLHttpRequest();
  var langs = [];
  // https://api.github.com/repos/ZacharyDavidSaunders/bubo/languages
  xhttp.open("GET", (gitHubApiEndpointUrl+"/repos/"+ownerName+"/"+repo+"/languages"), true);
  console.log(gitHubApiEndpointUrl+"/repos/"+ownerName+"/"+repo+"/languages");
  xhttp.send();

  xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(xhttp.responseText);
            langs = Object.keys(response);
            console.log("langs: "+langs);
        }else {
            //Something went wrong.
        }
      callback(langs);
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

function loadCanvas(canvas, context, langs,  repoName, repoOwner){
  var middleWidth = canvas.width / 2;
  var cone = new Image();
  cone.src = "../imgs/froYoImages/cone.png";

  cone.onload = function () {
    context.drawImage(cone, middleWidth-60, 350, cone.width/8, cone.height/8);
  }
}

function clearCanvas(context){
  context.clearRect(0, 0, canvas.width, canvas.height);
}
