window.onload = function(){
  let aLi = document.getElementsByTagName('li');
  for(let i = 0;i<aLi.length;i++){
    //给每个Li添加了一个timer属性  给一个空
    aLi[i].timer = null;
    aLi[i].onmouseover = function(){
      startMove(this,400);
    }
    aLi[i].onmouseout = function(){
      startMove(this,200);
    }
  }

//如果滑动比较快 定时器会清除所有li上的定时器
//只要是多物体运动  所有的东西都不能公用  必须是在私有作用域内
  function startMove(obj,iTarget){
    clearInterval(obj.timer);
    obj.timer = setInterval(function(){
      let speed = (iTarget - obj.offsetWidth)/8;
      speed = speed > 0?Math.ceil(speed):Math.floor(speed);
      if(obj.offsetWidth == iTarget){
        clearInterval(obj.timer);
      }else{
        obj.style.width = obj.offsetWidth + speed + 'px';
      }
    },30);
  }
}