!/bin/sh -e

echo "Building Production"

cd /usr/share/nginx/my-portfolio
git reset --hard
git pull origin master
npm install
ng build --prod --aot

rm -rf www
mv dist/my-portfolio www

echo "Build Production Successfully"
