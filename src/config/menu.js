const menus =  [
      {
        key: 1,
        name: '首页',
        className: 'home',
        url:"/home/index"
      },
      {
        key: 2,
        name: '发布',
        className: 'publish',
        url:"/home/publish"
      },
      {
        key: 3,
        name: '管理',
        className: 'manage',
        child: [
          {
            name: '手发文章管理',
            key: 301,
            url:"/home/manage/article_handle"
          },
          {
            name: '同步文章管理',
            key: 302,
            url:"/home/manage/article_sync"
          },
          {
            name: '视频管理',
            key: 303,
            url:"/home/manage/video"
          },
          {
            name: '评论管理',
            key: 304,
            url:"/home/manage/comment"
          }
        ]
      },
      {
        key: 4,
        name: '数据统计',
        className: 'stat',
        child: [
          {
            name: '账号统计',
            key: 401,
            url:"/home/stat/account"
          },
          {
            name: '文章统计',
            key: 402,
            url:"/home/stat/article"
          },
          {
            name: '视频统计',
            key: 403,
            url:"/home/stat/video"
          }
        ]
      },
      {
        key: 5,
        name: '消息中心',
        className: 'message',
        url:"/home/message"
      },
      {
        key: 6,
        name: '账号管理',
        className: 'account',
        child: [
          {
            name: '账号信息',
            key: 601,
            url:"/home/account/info"
          },
          {
            name: '同步设置',
            key: 602,
            url:"/home/account/sync_set"
          },
          {
            name: '账号特权',
            key: 603,
            url:"/home/account/privilege"
          }
        ]
      },
      {
        key: 7,
        name: '使用帮助',
        className: 'stat',
        url:'/home/help'
      },
      {
        key: 8,
        name: '问题反馈',
        className: 'feedback',
        url:'/home/feedback'
      }
    ];
  
export default menus;