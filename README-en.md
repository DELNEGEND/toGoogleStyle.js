# toGoogleStyle.js

## Add this to `<head></head>`
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/DELNEGEND/fonts@latest/GoogleSans.min.css">
<script src="https://cdn.jsdelivr.net/gh/delnegend/toGoogleStyle.min.js@latest/toGoogleStyle.min.js"></script>
```

## Assign a class to the element you'd want to convert to GoogleStyle

```html
<div class=".googleStyle">Google</div>
<span class=".toGoogleStyle">Lorem Ipsum...</span>
```

## Add this to anywhere you like
```javascript
toGoogleStyle.init('<classname>','<fontsize>','<fontstyle>')
```
- `<classname>` (string): classname without the dot
- `<fontsize>` (integer, optional): default is 40
- `<fontstyle>` (string, optional): default is 'bold'. Other options are 'regular', 'italic', 'bolditalic'
*Example*
```Javascript
toGoogleStyle.init('googleStyle')
toGoogleStyle.init('toGoogleStyle',96)
toGoogleStyle.init('googleStyle',69,'italic')
```