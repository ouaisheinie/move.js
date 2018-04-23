window.onload = function(){
  var oDiv = document.getElementById("div1");
  oDiv.onmouseover = function () {//鼠标移入
    startMove(0);
  }
  oDiv.onmouseout = function () {
    startMove(-200);
  }
  let timer = null;
  function startMove(iTarget) {
    clearInterval(timer);
    timer = setInterval(() => {
      let speed = (iTarget - oDiv.offsetLeft) / 10;
      //缓冲运动要给速度取整
      speed = speed > 0 ? Math.ceil(speed):Math.floor(speed);
      if (oDiv.offsetLeft == iTarget) {
        clearInterval(timer);
      } else {
        oDiv.style.left = oDiv.offsetLeft + speed + "px";
      }
    }, 30);
  }
}