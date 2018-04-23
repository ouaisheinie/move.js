window.onload = function(){
  var oDiv = document.getElementById("div1");
  oDiv.onmouseover = function(){//鼠标移入
    startMove(0);
  }
  oDiv.onmouseout = function(){
    startMove(-200);
  }
  let timer = null;
  function startMove(iTarget){
    clearInterval(timer);
    timer = setInterval(()=>{
      let speed = 0;
      if(oDiv.offsetLeft > iTarget){
        speed = -10;
      }else{
        speed = 10;
      }
      if (oDiv.offsetLeft == iTarget){
        clearInterval(timer);
      }else{
        oDiv.style.left = oDiv.offsetLeft + speed + "px";
      }
    },30);
  }
}