# toGoogleStyle.js

### Click here for English (comming soon?)

## Yêu cầu
### jQuery (nên thêm kiểu này)
```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js" integrity="sha384-vk5WoKIaW/vJyUAd9n/wmopsmNhiy+L2Z+SBxGYnUkunIxVxAv/UtMOhba/xskxh" crossorigin="anonymous"></script>
```

### Phông chữ
A. Bắt buộc<br>
• [GoogleSans-Bold](https://github.com/DELNEGEND/toGoogleStyle.js/blob/master/GoogleSans-Bold.otf "Ấn vào để download")

B. Không bắt buộc<br>
• [GoogleSans-Regular](https://github.com/DELNEGEND/toGoogleStyle.js/blob/master/GoogleSans-Regular.otf "Ấn vào để download")<br>
• [GoogleSans-Italic](https://github.com/DELNEGEND/toGoogleStyle.js/blob/master/GoogleSans-Italic.otf "Ấn vào để download")

## Cài đặt

### Thêm thẻ &#x3C;script&#x3E; này vào DOM (nên dùng cách này)
```html
<script src="https://cdn.jsdelivr.net/gh/delnegend/toGoogleStyle.js/toGoogleStyle_v1.1.min.js" integrity="sha384-CsojGvi0BrX/Os+I75n6Tb3/ZgcazqptVr+FZjWCoxTPSXAC8ztx4/X8h4sbVvMW" crossorigin="anonymous"></script>
```

### Hoặc
```html
<script src="https://dngnd.ml/toGoogleStyleJS"></script>
```

## Hướng dẫn sử dụng
**1. Copy file phông chữ vào cùng thư mục với file HTML hoặc thư mục gốc trên server/hosting**

**2. Thêm font vào HTML**

- Cách 1: sử dụng loadExternalFont.js, xem chi tiết cách cài đặt và sử dụng tại [đây](https://github.com/DELNEGEND/loadExternalFont.js "loadExternalFont repository")

- Cách 2: sử dụng CSS

```css
@font-face {
  font-family: Google Sans;
  src: url('./GoogleSans-Bold'),
       url('./GoogleSans-Regular'),
       url('./GoogleSans-Italic');
}
```

**3. Tự "bịa" ra 1 class nào đó rồi gán nó vào tất cả những thẻ div/span muốn biến hoá thành Google style, ví dụ như**

```html
<div class=".j2team_chang_han_the">Google</div>
<span class=".j2team_chang_han_the">Lorem Ipsum gì gì đấy...</span>
```

**4. Trong file index.js**

```javascript
toGoogleStyle('<tên class>','<cỡ chữ>','<kiểu chữ>')
```

- Tên class (dạng string, bắt buộc): .j2team_chang_han_the

- Cỡ chữ (dạng integer, không bắt buộc): mặc định là 40

- Kiểu chữ (dạng string, không bắt buộc): mặc định là 'bold', có thể để thành 'regular', 'italic' hoặc 'bolditalic' nhưng phải cài thêm 2 font đã đề cập trên

  *Ví dụ*
```javascript
toGoogleStyle('.abcxyz')
toGoogleStyle('.aaaaaaaa',69)
toGoogleStyle('.j2team_chang_han_the',96,'italic')
```