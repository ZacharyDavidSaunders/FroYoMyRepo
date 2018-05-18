
var version = "v1.1";

function populateHeader(){
  var body = document.body;
  var headerLinks = ["Home","index.html","About","about.html","Source Code","https://github.com/ZacharyDavidSaunders/FroYoMyRepo"];
  var headerDiv = document.createElement('div');
  var logoAtag = document.createElement('a');
  var logoImg = document.createElement('img');
  var headerList = document.createElement('ul');

  for(var i=0; i < headerLinks.length; i+=2){
    var headerLi = document.createElement('li');
    var headerA = document.createElement('a');
    headerA.href = headerLinks[i+1];
    headerA.innerHTML = headerLinks[i];
    if(headerLinks[i+1] === headerLinks.length){headerA.target= "_blank";}
    headerLi.appendChild(headerA);
    headerList.appendChild(headerLi);
  }

  logoAtag.appendChild(logoImg);
  logoAtag.setAttribute("class","navbar-brand navbarItems");

  headerDiv.appendChild(logoAtag)
  headerDiv.appendChild(headerList);

  headerDiv.setAttribute("class","container navbar navbar-inverse");

  logoAtag.href=".";
  logoAtag.setAttribute("class","navbar-brand navbarItems");

  logoImg.src = "./imgs/logo-white.png"
  logoImg.setAttribute("alt","FroYoMyRepo");
  logoImg.setAttribute("height","60");
  logoImg.setAttribute("width","200");
  logoImg.setAttribute("class","brand");

  headerList.setAttribute("class","nav nav-pills navbar-nav navbar-right navbarItems");

  headerDiv.setAttribute("class","container navbar navbar-inverse");

  body.insertBefore(headerDiv, body.firstChild);
}

function populateFooter(){
  var body = document.body;
  var footerDiv = document.createElement('div');
  var footerHr = document.createElement('hr');
  var footerP = document.createElement('p');

  footerDiv.appendChild(footerHr);
  footerDiv.appendChild(footerP);

  footerDiv.setAttribute("class","col-md-12 row");
  footerP.setAttribute("class","text-center");
  footerP.innerHTML = "&copy; Zachary Saunders 2018. All Rights Reserved. Version: " + version;

  body.appendChild(footerDiv);
}
