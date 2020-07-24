# toGoogleStyle.js

[English version](README-en.md)

## Thêm 2 dòng này vào phần `<head></head>`
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/DELNEGEND/fonts@latest/GoogleSans.min.css">
<script src="https://cdn.jsdelivr.net/gh/delnegend/toGoogleStyle.min.js@latest/toGoogleStyle.min.js"></script>
```

## Gán 1 class bất kỳ vào element chứa text cần convert thành GoogleStyle, ví dụ

```html
<div class=".googleStyle">Google</div>
<span class=".toGoogleStyle">Lorem Ipsum...</span>
```

## Chạy hàm này ở đâu đó thì tuỳ
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