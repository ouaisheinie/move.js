function getStyle(obj, attr) {
  if (obj.currentStyle) { //ie下
    return obj.currentStyle[attr];
  } else {//ff 和 chrome 下
    return getComputedStyle(obj, false)[attr];
  }
}
function startMove(obj,json,fn) {
  let flag = true//判断是否停止执行定时器的标准
  clearInterval(obj.timer);
  obj.timer = setInterval(function () {
    for(let attr in json){
      //取当前值
      let icur = 0;
      if (attr == "opacity") {
        icur = Math.round(parseFloat(getStyle(obj, attr)) * 100);
      } else {
        icur = parseInt(getStyle(obj, attr));
      }
      //算速度
      let speed = (json[attr] - icur) / 8;
      speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
      //停止检测
      if (icur != json[attr]) { //还没有执行完  还没到目标值
        flag = false;
      }
      if (attr == "opacity") {
        obj.style.filter = "alphl(opacity:" + (icur + speed) + ")";
        obj.style.opacity = (icur + speed) / 100;
      } else {
        obj.style[attr] = icur + speed + 'px';
      }
    }
    if(flag){
      clearInterval(obj.timer);
      if(fn){
        fn();
      }
    }
  }, 30);
}
