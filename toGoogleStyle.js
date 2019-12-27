// Main function
const _toGoogleStyle = selector => {

  // Take content inside div/span.selector and convert it into string, I called this the selected string
  let inputString = $(selector).html(),
    // Temporary array that will be converted into string to replace the selected string
    finalHTMLOutput = [],
    // Color list
    colorList = ["#4285F4", "#EA4335", "#FBBC05", "#4285F4", "#34A853", "#EA4335"];

  // Pointer of the colorList
  let colorIndex = 0;

  // Loop for each letter in the selected string
  for (let i = 0; i < inputString.length; i++) {
    // Incrementing the color pointer
    colorIndex++;

    // Reset the pointer to 0 when it hit the final value in the color list
    if (colorIndex == 6) (colorIndex -= 6);

    // Adding span and color to each individual letter
    let currOutLetter = `<span style="color: ${colorList[colorIndex]}">${inputString.charAt(i)}</span>`;
    
    // Push the individual letter to the temporary array
    finalHTMLOutput.push(currOutLetter);
  }
  // Finally join all values in that array into one single string and replace the selected string
  $(selector).html(finalHTMLOutput.join(""));
};

// Global style config like font, font-size, font-weight, font-style
const googleStyleConfig = (selector, fontSize, fontStyle) => {
  let weightOrDeco, _fw = 'font-weight',
    _td = 'text-decoration';
  switch (fontStyle) {
    case 'regular':
      weightOrDeco = '';
      break;
    case 'bold':
      weightOrDeco = `${_fw}:bold;`;
      break;
    case 'italic':
      weightOrDeco = `${_td}:italic;`;
      break;
    case 'bolditalic':
      weightOrDeco = `${_fw}:bold;${_td}:italic;`;
      break;
    default:
      weightOrDeco = "";
      break;
  }

  // Completed CSS string
  let googleStyleGlobalStylesheet = `${selector}>span{font-family:Google Sans;${weightOrDeco}font-size:${fontSize}px}`;

  // Duh
  let addCssToHTML = css => {
    let head = document.head || document.getElementsByTagName('head')[0],
      style = document.createElement('style');
    head.appendChild(style);
    style.type = 'text/css';
    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  };
  addCssToHTML(googleStyleGlobalStylesheet);

};

/*

If we include googleStyleConfig into _toGoogleStyle, there'll be 2 problems:
Nếu nhét hàm googleStyleConfig vào _toGoogleStyle và dùng luôn hàm đó pass class vào, sẽ xảy ra 2 vấn đề
1. Duplicated googleStyleConfig when the .google_style appear more than 1 time in DOM
2. All tags with .google_style class will have the same innerHTML

Example
<div.google_style> ABC </div>
<div.google_style> 123 </div>
<div.google_style> XYZ </div>
After running _toGoogleStyle('google_style')
<div.google_style> ABC </div>
<div.google_style> ABC </div>
<div.google_style> ABC </div>

The solution I know is to seperate the styleConfig(), passing class AND order into _toGoogleStyle one by one (can be done with .each() in jQuery)

*/
const toGoogleStyle = (selector, fontSize = 40, fontStyle = 'bold') => {
  $(selector).each((index, val) => _toGoogleStyle(val));
  googleStyleConfig(selector, fontSize, fontStyle);
};

// toGoogleStyle('.google_style');