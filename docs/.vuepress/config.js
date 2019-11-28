module.exports = {
  title: 'Fish Docs',
  description: '分享，学习，进步',
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  markdown: {
    lineNumbers: true,
  },
  // home: true,
  theme: 'reco',
  themeConfig: {
    // 博客配置
    // type: 'blog',
    logo: '/star.png',
    blogConfig: {
      category: {
        location: 1,     // 在导航栏菜单中所占的位置，默认2
        text: 'Category' // 默认文案 “分类”
      },
      tag: {
        location: 2,     // 在导航栏菜单中所占的位置，默认3
        text: 'Tag'      // 默认文案 “标签”
      }
    },
    nav: [
      { text: 'TimeLine', link: '/timeLine/', icon: 'reco-date' }
    ],
    // 设置登录密码
    // keyPage: {
    //   keys: ['123456'],
    //   color: '#42b983', // 登录页动画球的颜色
    //   lineColor: '#42b983' // 登录页动画线的颜色
    // },
    author: 'YouNoFish',
    themePicker: false, // 主题色修改
    sidebar: 'auto',
  }
}