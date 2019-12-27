/*
组件模板提供了slot节点，用于承载组件使用时提供的子节点

1、父组件为子组件传值

2、父组件调用子组件的方法
 调用子组件时定义一个id
 获取子组件：this.selectComponent(id) 获取
 .fn() 调用子组件的方法

 3、子组件调用父组件的方法
   与vue相似
   this.triggerEvent('event',数据，参数)
   父组件监听
*/