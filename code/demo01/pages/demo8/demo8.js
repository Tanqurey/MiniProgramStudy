Page({
  data: {
    nodes: [{
      name: 'div',
      attrs: {
        class: 'div_class',
        style: 'line-height: 60px; color: red;'
      },
      children: [{
        type: 'text',
        text: 'Hello&nbsp;World!'
      }]
    }],
    articles:'<h1>这是富文本解析的HTML代码</h1>'
  },
  tap() {
    console.log('tap')
  }
})