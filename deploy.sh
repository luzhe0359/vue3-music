# 发生任何错误时终止
set -e

# 构建
npm run build

# 进入输出产物文件夹
cd dist

# 解决github-page刷新 404
cp index.html 404.html

# 如果你要部署到自定义域名
echo 'm.zugelu.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果你要部署在 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果你要部署在 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:luzhe0359/vue3-music.git master:gh-pages

cd -