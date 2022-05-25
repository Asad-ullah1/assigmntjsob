
 function bgColors() {
   var container = document.getElementById("container");
   var bgColorName = prompt("Enter Background Color");
   container.style.backgroundColor = bgColorName;
 }
 function imgHandle(condition) {
    var img = document.getElementById("img");
    console.log(condition);
    if (condition == "show") {
      img.style.display = "block";
    } else if (condition == "hide") {
      img.style.display = "none";
    } else if (condition == "small") {
      img.style.width = "300px";
      img.style.height = "300px";
    } else if (condition == "large") {
      img.style.width = "400px";
      img.style.height = "400px";
    } else {
      return;
    }
  }
  


function tColorchange(){
  var first =document.getElementById("first");
  var second =document.getElementById("second");
  var textColor =prompt("enter text coor");
  first.style.color = textColor;
  second.style.color = textColor;
}


function imgChange(img) {
     var carImg = document.getElementById("carImg");
      console.log(img);
    
   if (img == "off") {
       carImg.src = "on.png";
     } else {
       carImg.src = "off.png";
     }
   }
  
 function foo() {
   var main = document.getElementById("main");
   console.log(main);
   main.className += " main1";
 }



 var allPara = document.getElementsByTagName("p");
  console.log(allPara);
  console.log((allPara[0].style.backgroundColor = "red"));
  console.log((allPara[1].style.backgroundColor = "red"));
  console.log((allPara[2].style.backgroundColor = "red"));
  console.log((allPara[3].style.backgroundColor = "red"));
  for (var i = 0; i < allPara.length; i++) {
      allPara[i].style.background = "blue";
  var parent = document.getElementById("parent");
  console.log(parent)
   var childs = parent.getElementsByTagName("p");
  console.log(childs[0].style.color = "red");
  }
