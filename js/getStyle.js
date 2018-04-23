window.onload = function () {
    let li1 = document.querySelector("#li1");
    let li2 = document.querySelector("#li2");
    li1.onmouseover = function(){
      startMove(this,"opacity",100);
    };
    li1.onmouseout = function(){
      startMove(this,"opacity",30);
    };
/*     li2.onmouseover = function(){
      startMove(this,"height",400);
    }
    li2.onmouseout = function(){
      startMove(this,"height",100);
    } */

  //如果滑动比较快 定时器会清除所有li上的定时器
  //只要是多物体运动  所有的东西都不能公用  必须是在私有作用域内

  // 第二阶段是操作透明度
  let alpha = 30;
  function startMove(obj,attr,iTarget) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
      let icur = 0;
      if(attr == "opacity"){
        icur = Math.round(parseFloat(getStyle(obj,attr)) * 100);
      }else{
        icur = parseInt(getStyle(obj, attr));
      }
      let speed = (iTarget - icur) / 8;
      speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
      if (icur == iTarget) {
        clearInterval(obj.timer);
      } else {
        if(attr == "opacity"){
          obj.style.filter = "alph1(opacity =" + (icur + speed)+")";
          obj.style.opacity = (icur + speed)/100;
        }else{
          obj.style[attr] = icur + speed + 'px';
        }
      }
    }, 30);
  }

  function getStyle(obj,attr){
    if(obj.currentStyle){ //ie下
      return obj.currentStyle[attr];
    }else{//ff 和 chrome 下
      return getComputedStyle(obj,false)[attr];
    }
  }
}

