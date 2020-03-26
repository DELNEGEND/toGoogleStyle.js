# toGoogleStyle.js

## Thêm script vào phần `<head></head>`
```html
<script src="https://cdn.jsdelivr.net/gh/delnegend/toGoogleStyle.min.js@2.0/toGoogleStyle.min.js"></script>
```

## Import phông trong thư mục GoogleSans vào website ([hướng dẫn](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face))


## Gán 1 class bất kỳ vào element chứa text cần convert thành GoogleStyle, ví dụ

```html
<div class=".googleStyle">Google</div>
<span class=".toGoogleStyle">Lorem Ipsum...</span>
```

## Chạy hàm này
```javascript
toGoogleStyle.init('<tên class>','<cỡ chữ>','<kiểu chữ>')
```
- `<tên class>` (string, bắt buộc): class vừa đặt ở bước trên (không có dấu chấm của jQuery)
- `<cỡ chữ>` (integer, không bắt buộc): mặc định 40
- `<kiểu chữ>` (string, không bắt buộc): mặc định 'bold', các tuỳ chọn khác: 'regular', 'italic', 'bolditalic'

*Ví dụ*
```Javascript
toGoogleStyle.init('googleStyle')
toGoogleStyle.init('toGoogleStyle',96)
toGoogleStyle.init('googleStyle',69,'bolditalic')
```