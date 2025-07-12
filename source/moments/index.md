---
title: 朋友圈
date: 2020-01-01 00:00:00
cover: https://jsd.cdn.zzko.cn/gh/richbridge/picx-images-hosting@master/logo/bg.avif
type: moments
comments: false
---

<div id="app"></div>
<script>
    let UserConfig = {
        private_api_url: 'https://friends.252262.xyz/',   // 填写你的友圈api（自定义域名）
        page_turning_number: 15,
        error_img: 'https://sdn.geekzu.org/avatar/57d8260dfb55501c37dde588e7c3852c',
        sort_rule: 'created'
    }
</script>
<script type="text/javascript" src="/static/js/app.min.js"></script>
<script type="text/javascript" src="/static/js/bundle.js"></script>

<style>
  #cf-container {
    background: transparent !important;
  }
  .cf-article .cf-article-title:hover {
    color: #f4f4f4 !important;
  }
  .cf-img-avatar {
    opacity: .4 !important;
  }
  .cf-article-author:hover {
    background: var(--theme-color) !important;
  }
  #cf-more:hover {
    background: var(--theme-color) !important;
  }
  .cf-overshow p a:hover {
    color: #f4f4f4 !important;
  }
  .cf-article {
    transition: transform linear 0.3s;
  }
  .cf-article:hover {
    transform: scale(1.05);
    box-shadow: 0 5px 10px 8px #07111b29;
  }
  .cf-article {
    border-radius: 15px !important;
    border: 1px solid #a5a5a5ee !important;
  }
  ::selection {
  background: var(--theme-color) !important;
  color: #f4f4f4 !important;
  }
</style>