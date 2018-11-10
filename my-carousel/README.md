## 轮播图

* 写个轮播图练练手
* 参考了这篇http://qiutc.me/post/使用-React-实现一个轮播组件.html

## 流程

1. 基于需求的开发
   * items数组，决定了需要轮播的内容，其每个元素都是一个对象, 有src和alt
   属性
   * speed 是图片切换时候的速度，number类型 单位是秒
   * autoPlay 是否自动轮播
   * delay 自动轮播时每张图片停留的时间 number类型
   * pause 自动轮播时，鼠标停在图片上时，是否暂停轮播
   * dots 配置轮播时是否需要下面的小点
   * arrows 配置是否需要轮播的前后箭头