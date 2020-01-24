# toGoogleStyle.js

### Click here for English (comming soon?)

## Thêm 2 cái này vào phần `<head></head>`
### jQuery
```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js" integrity="sha384-vk5WoKIaW/vJyUAd9n/wmopsmNhiy+L2Z+SBxGYnUkunIxVxAv/UtMOhba/xskxh" crossorigin="anonymous"></script>
```
### toGoogleStyleCDN
```html
<script src="https://cdn.jsdelivr.net/gh/delnegend/toGoogleStyle.js@1.0/toGoogleStyle.min.js" integrity="sha384-CsojGvi0BrX/Os+I75n6Tb3/ZgcazqptVr+FZjWCoxTPSXAC8ztx4/X8h4sbVvMW" crossorigin="anonymous"></script>
```

## Tải phông chữ này xuống và sao chép vào cùng thư mục với file index.html
A. Bắt buộc<br>
• [GoogleSans-Bold](https://github.com/DELNEGEND/toGoogleStyle.js/blob/master/GoogleSans-Bold.otf "Ấn vào để download")

B. Tuỳ chọn<br>
• [GoogleSans-Regular](https://github.com/DELNEGEND/toGoogleStyle.js/blob/master/GoogleSans-Regular.otf "Ấn vào để download")<br>
• [GoogleSans-Italic](https://github.com/DELNEGEND/toGoogleStyle.js/blob/master/GoogleSans-Italic.otf "Ấn vào để download")

## Thêm font vào HTML

- Cách 1: sử dụng [**loadExternalFont**](https://github.com/DELNEGEND/loadExternalFont.js "loadExternalFont repository"), ấn vào để xem chi tiết.
- Cách 2: sử dụng CSS

```css
@font-face {
  font-family: Google Sans;
  src: url('./GoogleSans-Bold'),
       url('./GoogleSans-Regular'),
       url('./GoogleSans-Italic');
}
```

## Hướng dẫn sử dụng

**1. Tự "bịa" ra 1 class nào đó rồi gán nó vào tất cả những thẻ div/span muốn biến hoá thành Google style, ví dụ như**

```html
<div class=".j2team_chang_han_the">Google</div>
<span class=".j2team_chang_han_the">Lorem Ipsum gì gì đấy...</span>
```

**2. Chạy hàm này trong phần footer với param như dưới**

```javascript
toGoogleStyle('<tên class>','<cỡ chữ>','<kiểu chữ>')
```

- Tên class (dạng string, bắt buộc): .j2team_chang_han_the

- Cỡ chữ (dạng integer, không bắt buộc): mặc định là 40

- Kiểu chữ (dạng string, không bắt buộc): mặc định là 'bold', có thể để thành 'regular', 'italic' hoặc 'bolditalic' nhưng phải cài thêm 2 font đã đề cập trên

  *Ví dụ*
```Javascript
toGoogleStyle('.abcxyz')
toGoogleStyle('.aaaaaaaa',69)
toGoogleStyle('.j2team_chang_han_the',96,'italic')
```