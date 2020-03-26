# toGoogleStyle.js

## Add this to `<head></head>`
```html
<script src="https://cdn.jsdelivr.net/gh/delnegend/toGoogleStyle.min.js@2.0/toGoogleStyle.min.js"></script>
```

## Import fonts from GoogleSans folder to your website ([how to](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face))

## Assign a class to the element you'd want to convert to GoogleStyle

```html
<div class=".googleStyle">Google</div>
<span class=".toGoogleStyle">Lorem Ipsum...</span>
```

## Run this script at the very end of your site
```javascript
toGoogleStyle.init('<classname>','<fontsize>','<fontstyle>')
```
- `<classname>` (string, compulsory): classname without the dot
- `<fontsize>` (integer, optional): default is 40
- `<fontstyle>` (string, optional): default is 'bold'. Other options are 'regular', 'italic', 'bolditalic'
*Example*
```Javascript
toGoogleStyle.init('googleStyle')
toGoogleStyle.init('toGoogleStyle',96)
toGoogleStyle.init('googleStyle',69,'italic')
```