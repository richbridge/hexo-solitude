// --- 其他配置 (根据需要调整) ---
var sparkLite_postSelector = "#post > article"; // 文章内容容器的选择器，例如 #article-container, .post-content
var sparkLite_wordLimit = 1000;             // 提交给 API 的最大字数限制
var sparkLite_typingAnimate = true;         // 是否启用打字机效果


// 那年今日
(function() {
    async function fetchHistoryData() {
        const myDate = new Date();
        const myMonth = myDate.getMonth() + 1;
        const getDate = myDate.getDate();
        const getMonth = myMonth < 10 ? "0" + myMonth : "" + myMonth;
        const getDay = getDate < 10 ? "0" + getDate : "" + getDate;
        const getMonthDate = "S" + getMonth + getDay;
        const history_data_url = `https://fastly.jsdelivr.net/gh/Zfour/Butterfly-card-history@2.08/baiduhistory/json/${getMonth}.json`;

        const response = await fetch(history_data_url);
        const data = await response.json();
        return data[getMonthDate];
    }

    function append(parent, text) {
        const temp = document.createElement('div');
        temp.innerHTML = text;
        const frag = document.createDocumentFragment();
        while (temp.firstChild) {
            frag.appendChild(temp.firstChild);
        }
        parent.appendChild(frag);
    }

    function card_history() {
        if (document.getElementById('history-container')) {
            fetchHistoryData().then(data => {
                const html_item = data.map(item => `
        <div class="swiper-slide history_slide">
            <span class="history_slide_time">A.D.${item.year}</span>
            <span class="history_slide_link">${item.title}</span>
        </div>
        `).join('');
                const history_container_wrapper = document.getElementById('history_container_wrapper');
                append(history_container_wrapper, html_item);
                const swiper_history = new Swiper('.history_swiper-container', {
                    passiveListeners: true,
                    spaceBetween: 30,
                    effect: 'coverflow',
                    coverflowEffect: {
                        rotate: 30,
                        slideShadows: false,
                    },
                    loop: true,
                    direction: 'vertical',
                    autoplay: {
                        disableOnInteraction: true,
                        delay: 5000
                    },
                    mousewheel: false,
                });
                const history_container = document.getElementById('history-container');
                history_container.onmouseenter = function () {
                    swiper_history.autoplay.stop();
                };
                history_container.onmouseleave = function () {
                    swiper_history.autoplay.start();
                }
            });
        }
    }

    card_history();

    document.addEventListener('pjax:complete', card_history);
})();