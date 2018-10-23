// +----------------------------------------------------------------------
// | Constructed by Jokin [ Think & Do & To Be Better ]
// +----------------------------------------------------------------------
// | Copyright (c) 2016-2018 Jokin All rights reserved.
// +----------------------------------------------------------------------
// | Author: Jokin <Jokin@twocola.com>
// +----------------------------------------------------------------------
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
    start();
  }
}
function start(){
  _it = setInterval(function(){
    console.log("【提示】刷课程序运行中");
    // 关闭弹题
    closeQuestion()
    // 判断清晰度调整为高清
    if(!$(".line1bq").hasClass("active")){
      $(".line1bq").click();
      console.log("【提示】刷课程序已将清晰度调整为“标清”");
    }
    // 自动静音
    if(!$(".volumeBox").hasClass("volumeNone")){
      $(".volumeIcon").click();
      console.log("【提示】刷课程序已将视频静音");
    }
    // 1.5倍速
    $(".speedTab15").click();
    // 下一节课
    if(ablePlayerX("mediaplayer").getDuration() === ablePlayerX("mediaplayer").getPosition()){
      setTimeout(function(){ $("#nextBtn").click(); }, 1000); // 延迟跳转
    }
  },5000);
}
function closeQ(){
  setInterval(function(){
    $(".popboxes_close.tmui_txt_hidd").click();
  },500);
}
