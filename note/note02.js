/*
介绍mina框架：

MINA是在微信中开发小程序的框架
MINA的目标是尽可能简单高效地让开发者可以在微信中开发具有原生
APP体验的服务

MINA提供了自己的视图层描述语言WXML与WXSS，以及JS逻辑层框架
，并在视图层与逻辑层件间提供了数据传输与事件系统，可以让开发者聚焦于数据与逻辑上

MINA的核心是一个响应的数据绑定系统。
整个系统分为两块视图层和逻辑层

MINA可以让数据与视图同步变的非常简单，当做数据修改的时候，只需要在逻辑层修改数据，
视图层就会做出相应的更新。

实际上是MVVM模式

app.json 文件用来对微信小程序进行全局配置，决定页面文件的路径，
窗口表现，设置网络超时时间，设置多tab

小程序内的资源不得大于2M

一般移动端还原设计稿按照宽度自适应，高度按照设计稿的一半


如让小程序能够解析普通的html代码？
使用wxParse组件

在官网上下载以后，解压并将wxParse目录放置于项目根目录
在我们要用到的页面内的js里面引入wxParse下面的js：
//在使用的js中引入WxParse模块
var WxParse = require('../../wxParse/wxParse.js');

//在使用的Wxss中引入WxParse.css,可以在app.wxss
@import "/wxParse/wxParse.wxss";

模板wn=xml引入下面的代码，注意路径：

var article = '<div>我是HTML代码</div>';
/**
* WxParse.wxParse(bindName , type, data, target,imagePadding)
* 1.bindName绑定的数据名(必填)
* 2.type可以为html或者md(必填)
* 3.data为传入的具体数据(必填)
* 4.target为Page对象,一般为this(必填)
* 5.imagePadding为当图片自适应是左右的单一padding(默认为0,可选)

var that = this;
WxParse.wxParse('article', 'html', article, that, 5);

// 引入模板
<import src="你的路径/wxParse/wxParse.wxml"/>
//这里data中article为bindName
<template is="wxParse" data="{{wxParseData:article.nodes}}"/>

*/