---
title: 留言板
date: 2020-01-01 00:00:00
type: message
---

<div class="poem-wrap">
  <div class="poem-border poem-left"></div>
  <div class="poem-border poem-right"></div>
  <h1>热评</h1>  //这里你可以根据不同句子类型来修改，比如每日一句诗词
  <p id="poem">loading...</p>
  <p id="info">loading...</p>
</div>


<script>
  function updateComment() {
    fetch("https://api.qjqq.cn/api/Yi?c=j")     //句子类型可以更换
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(data => {

        const poemElement = document.getElementById('poem');
        const infoElement = document.getElementById('info');
        poemElement.innerHTML = data.hitokoto;
        if (data.from_who !== null) {
          infoElement.innerHTML = data.from_who + " · " + "《 " + data.from + " 》";
        } else {
          infoElement.innerHTML = " “ " + data.from + " ” ";
        }
      })
      .catch(error => {

        const poemElement = document.getElementById('poem');
        const infoElement = document.getElementById('info');
        poemElement.innerHTML = "获取出错啦";
        infoElement.innerHTML = "";
        console.error('Fetch error:', error);
      });
  }

  updateComment();

  window.addEventListener('load', updateComment);
</script>