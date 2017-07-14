function displayFroYo(){
  var canvasDiv = document.getElementById("canvasDiv");
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext("2d");
  var inputMethod1RadioButton = document.getElementById("inputMethod1");
  var inputMethod2RadioButton = document.getElementById("inputMethod2");
  var urlInput = document.getElementById("repoUrl");
  var repoOwnerInput = document.getElementById("repoOwner");
  var repoNameInput = document.getElementById("repoName");
  var repoName = "";
  var repoOwner = "";
  var langArray = [];

  if(inputMethod1RadioButton.checked){
  }else{
    if(repoOwnerInput.value != "" && repoNameInput.value != ""){
      getLangsFromGitHub(repoOwnerInput.value, repoNameInput.value);
    }
  }

  if(canvasDiv.style.display == "none"){
    canvasDiv.style.display = "inline";
    loadCanvas(canvas, context);
  }else{
    clearCanvas(context);
    loadCanvas(canvas, context);
  }
}

function getLangsFromGitHub(ownerName, repo){
  var gitHubApiEndpointUrl = "https://api.github.com";

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       console.log(xhttp.responseText);
    }else{
      //Something went wrong.
    }
  };
  https://api.github.com/repos/ZacharyDavidSaunders/bubo/languages
  xhttp.open("GET", (gitHubApiEndpointUrl+"/repos/"+ownerName+"/"+repo+"/languages"), true);
  console.log(gitHubApiEndpointUrl+"/repos/"+ownerName+"/"+repo+"/languages");
  xhttp.send();
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

function loadCanvas(canvas, context){
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
