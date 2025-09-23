#! /bin/bash

echo -e "-------------------- 开始部署 --------------------"

git submodule update --remote --merge source/_posts
git submodule update --remote --merge themes/AstraBay
git submodule update --remote --merge themes/solitude

echo -e "------------------- 子模块更新完成 -------------------"

hexo bangumi -u

for i in {1..3}; do echo -e "\n" ; done

echo -e "------------------- hexo番号页完成 -------------------"

time=$(date "+%Y%m%d%H%M%S")

hexo clean
git add .
git commit -m "$time"
git push -u origin main

echo -e "------------------- 上传完成 -------------------"

exec /bin/bash
