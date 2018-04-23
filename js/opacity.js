window.onload = function(){
  let oDiv = document.getElementsByTagName("div");
  for(let i = 0;i<oDiv.length;i++){
    oDiv[i].timer = null; 
    oDiv[i].alpha = 30;   //多物体运动  alpha 和 timer 不能公用
    oDiv[i].onmouseover = function () {
      startMove(this,100);
    }
    oDiv[i].onmouseout = function () {
      startMove(this,30);
    }
  }
  function startMove(obj,iTarget){
    clearInterval(obj.timer);
    obj.timer = setInterval(()=>{
      let speed = 0;
      if(obj.alpha > iTarget){
        speed = -10;
      }else{
        speed = 10;
      }
      if(obj.alpha == iTarget){
        clearInterval(obj.timer);
      }else{
        obj.alpha+=speed;
        obj.style.filter = "alpha(opacity =" + obj.alpha +")";  // ie
        obj.style.opacity = obj.alpha/100;  //火狐或者chrome
      }
    },30);
  }
}