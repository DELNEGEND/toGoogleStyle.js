# toGoogleStyle.js

## Thêm script vào phần `<head></head>`
### toGoogleStyleCDN
```html
<script src="https://cdn.jsdelivr.net/gh/delnegend/toGoogleStyle.js@1.0/toGoogleStyle.min.js" integrity="sha384-CsojGvi0BrX/Os+I75n6Tb3/ZgcazqptVr+FZjWCoxTPSXAC8ztx4/X8h4sbVvMW" crossorigin="anonymous"></script>
```

## Import phông bold trong thư mục GoogleSans vào website ([hướng dẫn](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face))


## Gán 1 class bất kỳ vào element chứa text cần convert thành GoogleStyle, ví dụ**

```html
<div class=".googleStyle">Google</div>
<span class=".toGoogleStyle">Lorem Ipsum...</span>
```

## Chạy hàm này
```javascript
toGoogleStyle('<tên class>','<cỡ chữ>'')
```
- Tên class (string, bắt buộc): class vừa đặt ở bước trên
- Cỡ chữ (integer, không bắt buộc): mặc định là 40

*Ví dụ*
```Javascript
toGoogleStyle('googleStyle')
toGoogleStyle('toGoogleStyle',96)
```

### Trên này là guild cơ bản nhất, còn muốn chuyên sâu hơn như chỉnh kiểu chữ in nghiêng + đậm... bạn có thể edit file toGoogleStyle.js và tự host.