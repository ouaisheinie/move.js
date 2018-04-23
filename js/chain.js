window.onload = function(){
  let Li = document.getElementById("li3");
  Li.onmouseover = function(){
    startMove(Li,'width',400,function(){
      startMove(Li,'height',200,function(){
        startMove(Li,"opacity",100);
      });
    });
  }
  Li.onmouseout = function(){
    startMove(Li,"opacity",30,function(){
      startMove(Li,'height',100,function(){
        startMove(Li,"width",100);
      })
    });
  }
}