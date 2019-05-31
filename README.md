# Hướng dẫn cài đặt
## Cài đặt server request 3rd API
B0:
```javascript
cd fetch
```
B1:
```javascript
npm install
```
B2:
```javascript
npm start
```

## Để chạy file gửi request đến server
B0:
```javascript
cd fetch
```
B1:
Sửa đường dẫn trong hàm axios.get...
</br>
B2:
```javascript
node get_request.js
```

## Config instance tự chạy service
B0: Truy cập vào instance thông qua ssh. Sau đó
```javascript
npm install -g pm2
```
B1: Tạo file app.json với nội dung sau
```javascript
{
    "apps": [{
        "name": "fetch",
        "cwd": "demo/networkmanagementtest/fetch",
        "script": "./bin/www",
        "instances": 2,
        "exec_mode": "cluster",
        "watch": true,
        "ignore_watch": [
            "node_module"
        ],
        "env": {
            "NODE_ENV": "production",
            "PORT": "8081"
        }
    }]
}
```
Trong đó cwd là current working directory (thư mục gốc), script là đường dẫn tới file khởi tạo server, ignore_watch cho phép không tự khởi động nếu thư mục được chú thích thay đổi, env biến môi trường.
</br>
B2: Để khởi tạo các app ta dùng lệch cmd sau:
```javascript
pm2 start
```
Để tạo file startup, ta dùng lệnh
```javascript
pm2 startup
```
Trước khi làm việc đó, ta chạy câu lệnh:
```javascript
chmod +x /etc/rc.d/rc.local
```
```javascript
echo /etc/rc.d/rc.local
```
và copy câu lệnh 'sudo..' được tạo từ lệnh pm2 startup phía trên vào dưới file rc.local
</br>
Save file.
