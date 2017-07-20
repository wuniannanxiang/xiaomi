var oUl = document.getElementById('right');
    //设置计时器。每隔4S换一次图片
    setInterval(changeImg,3000);
    //target为目标位置
    var target = -1226;
    //changeImg实现图片的切换
    function changeImg() {

        //每次切换图片前清除计时器。
        clearInterval(oUl.timer);

        //设置内部计时器，实现突破切换动画效果
        oUl.timer = setInterval(function () {
            //图片位置的设置，每次运动10像素
            //图片位置的设置，速度由大到小
            oUl.style.left = oUl.offsetLeft + Math.floor((target-oUl.offsetLeft)/20) + 'px';
            //判断是否到达目标位置
            if(oUl.offsetLeft == target){
                clearInterval(oUl.timer);
                //目标位置更新
                target -= 1226;
                //判断图片是否显示为第四张图片
                if(oUl.offsetLeft == -3678){
                    //瞬间回到起点，left设置为0
                    oUl.style.left = '0px';
                    //目标位置更新为初始值
                    target = -1226;
                }
            }
        },20);
    }
    

//
// var oBox=document.getElementById("#ul");
//      var oUl=document.getElementById("ull1");
//      var aLi=oUl.children;//var aLi=document.getElementsByTagName("li")[0];
//      oUl.innerHTML+=oUl.innerHTML;
//
//      oUl.style.width=aLi[0].offsetWidth*aLi.length+'px';
////        左右按钮
//      var oLeft=document.getElementById("left");
//      var n=0;//默认参数
//      var timer=null;//定时器名字
//      oLeft.onclick=function(){
//          clearInterval(timer);
//          timer=setInterval(function () {
//              n-=10;
//              if(n<-oUl.offsetWidth/2){
//                  n=0;
//              }
//              oUl.style.left=n+'px'
//          },30)
//      }
//      var oRight=document.getElementById("right");
//      var n=0;//默认参数
//      var timer=null;//定时器名字
//      oRight.onclick=function(){
//          clearInterval(timer)
//          timer=setInterval(function () {
//
//              n+=10;
//              if(n>0){
//                  n=-oUl.offsetWidth/2;
//              }
//              oUl.style.left=n+'px'
//          },30)
//      }