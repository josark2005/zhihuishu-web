```
console.log("成功运行自动刷网课智慧树版");
var _it = null;
start();
closeQuestion();
function closeQuestion(){
  clearInterval(_it);
  var t = $(".popboxes_close.tmui_txt_hidd");
  if( t.length != 0 ){
    t.click();
  }
  if( $(".popboxes_close.tmui_txt_hidd").length != 0 ){
    closeQuestion();
  }else{
    interval();
  }
}
function start(){
  ablePlayerX("mediaplayer").play();
  // 修复
  var len = ablePlayerX("mediaplayer").getDuration();
  var now = ablePlayerX("mediaplayer").getPosition();
  console.log("视频总长度："+len);
  console.log("视频现进度："+now);
  // 清空进度条
  ablePlayerX("mediaplayer").seek(0);
  console.log("【提示】刷课程序运行中");
  // 下一节课
  console.log("【提示】"+(len+5)+"秒后自动下一节");
  setTimeout(function(){ $("#nextBtn").click();start(); }, (len+5)*1000); // 延迟跳转
}

function interval() {
  _it = setInterval(function(){
    // 关闭弹题
    closeQuestion()
    // 自动静音
    if(!$(".volumeBox").hasClass("volumeNone")){
      $(".volumeIcon").click();
      console.log("【提示】刷课程序已将视频静音");
    }
  },5000);
}
function closeQ(){
  setInterval(function(){
    $(".popboxes_close.tmui_txt_hidd").click();
  },500);
}
```