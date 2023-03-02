# Чтобы запустить скрипт надо дать ему доступ на выполнение
# chmod +x deploy.sh

cd ~/react-redux-example
npm run build:prod

rm -rf ~/../var/www/react-redux-example/html
mv ~/react-redux-example/build/ ~/../var/www/react-redux/example/html
