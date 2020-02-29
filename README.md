# toGoogleStyle.js

## Link 2 script vào phần `<head></head>`
### jQuery
```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js" integrity="sha384-vk5WoKIaW/vJyUAd9n/wmopsmNhiy+L2Z+SBxGYnUkunIxVxAv/UtMOhba/xskxh" crossorigin="anonymous"></script>
```
### toGoogleStyleCDN
```html
<script src="https://cdn.jsdelivr.net/gh/delnegend/toGoogleStyle.js@1.0/toGoogleStyle.min.js" integrity="sha384-CsojGvi0BrX/Os+I75n6Tb3/ZgcazqptVr+FZjWCoxTPSXAC8ztx4/X8h4sbVvMW" crossorigin="anonymous"></script>
```

## Tải phông chữ này xuống và sao chép vào thư mục gốc
A. Bắt buộc<br>
• [GoogleSans-Bold](https://github.com/DELNEGEND/toGoogleStyle.js/blob/master/GoogleSans-Bold.otf "Ấn vào để download")

B. Tuỳ chọn<br>
• [GoogleSans-Regular](https://github.com/DELNEGEND/toGoogleStyle.js/blob/master/GoogleSans-Regular.otf "Ấn vào để download")<br>
• [GoogleSans-Italic](https://github.com/DELNEGEND/toGoogleStyle.js/blob/master/GoogleSans-Italic.otf "Ấn vào để download")

## Thêm font vào HTML

- Cách 1: sử dụng CSS *(recommended)*
```css
@font-face {
  font-family: Google Sans;
  src: url('./GoogleSans-Bold'),
       url('./GoogleSans-Regular'),
       url('./GoogleSans-Italic');
}
```
- Cách 2: sử dụng [**loadExternalFont**](https://github.com/DELNEGEND/loadExternalFont.js "loadExternalFont repository").

## Hướng dẫn sử dụng

**1. Gán 1 class bất kỳ vào element chứa text cần convert thành GoogleStyle, ví dụ**

```html
<div class=".googleStyle">Google</div>
<span class=".toGoogleStyle">Lorem Ipsum gì gì đấy...</span>
```

**2. Chạy hàm này trong phần footer với param như dưới**
```javascript
toGoogleStyle('<tên class>','<cỡ chữ>','<kiểu chữ>')
```
- Tên class (string, bắt buộc): class vừa đặt ở bước trên
- Cỡ chữ (integer, không bắt buộc): mặc định là 40
- Kiểu chữ (string, không bắt buộc): mặc định là 'bold', có thể để thành 'regular', 'italic' hoặc 'bolditalic' nhưng phải copy thêm 2 font đã đề cập trên

*Ví dụ*
```Javascript
toGoogleStyle('.googleStyle')
toGoogleStyle('.googleStyle',69)
toGoogleStyle('.toGoogleStyle',96,'italic')
```