window.onload = function(){
  var oLi = document.getElementById("li4");
  oLi.onmouseover = function(){
    startMove(oLi,{width:400,height:200,opacity:100});
  }
  oLi.onmouseout = function(){
    startMove(oLi,{width:100,height:100,opacity:30});
  }
}