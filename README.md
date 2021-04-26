# toGoogleStyle.js

## Add these to `<head></head>`
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/DELNEGEND/fonts@latest/GoogleSans.min.css">
<script src="https://cdn.jsdelivr.net/gh/delnegend/toGoogleStyle.min.js@latest/toGoogleStyle.min.js"></script>
```

## Assign a class to the element(s)

```html
<div class="googleStyle">Google</div>
<span class="toGoogleStyle">Lorem Ipsum...</span>
```

## Init
```javascript
toGoogleStyle.init('<classname>','<font-size>','<font-style>')
```

*Examples*
```Javascript
toGoogleStyle.init('googleStyle')
toGoogleStyle.init('toGoogleStyle',12)
toGoogleStyle.init('googleStyle',16,'bolditalic')
```
