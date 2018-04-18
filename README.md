# 智慧树网课刷刷乐

**请勿用于任何商业用途**

## 特性

- 自动播放下个视频
- 自动调整清晰度
- 自动静音
- 自动调整视频播放速度至1.5倍（经测试，1.5倍是极限可正常刷课速度）
- 自动 **关闭题目弹窗** （不会对成绩有影响）

## 使用步骤

- 下载Chrome浏览器（如果有360、火狐等应该不用下载）
  - [官网（有时无法连接）](https://www.google.cn/chrome/browser/desktop/index.html)
  - [百度（推荐普通下载）](http://rj.baidu.com/soft/detail/14744.html?ald)
- 使用 **Chrome浏览器** 打开智慧树网课播放页
- 按下 Ctrl+Shift+I 打开开发者工具（F12应该也可以，如下图）
  - ![开发者面板](./images/d1.png)
- 复制 ** `zhihuishu.txt` 文件中的代码（推荐）** 或下方代码
- 在 **开发者工具** 中点击下方的 **console** 选项卡
  - ![console](./images/console.png)
- 在最后一行 `>` 处粘贴代码
- 出现 `成功运行自动刷网课智慧树版` 字样即成功

**请务必将代码复制完整**

```
console.log("成功运行自动刷网课智慧树版");
var _it = null;
start();
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
    if($("div.bigPlayButton").attr("style") != "display: none;" && $(".popboxes_close.tmui_txt_hidd").length === 0 ){
      $("#nextBtn").click();
    }
    // 结束判断
    if($("div.next_lesson_bg.tm_next_lesson").attr("style") == "display: none;"){
      closeQ(); // 仅自动关闭题库
    }
  },5000);
}
function closeQ(){
  clearInterval(_it);
  setInterval(function(){
    $(".popboxes_close.tmui_txt_hidd").click();
  },1000);
}```
