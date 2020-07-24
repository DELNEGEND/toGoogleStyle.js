// jshint esversion: 9
const toGoogleStyle = {
  d: document,
  colorList: ["4285F4", "EA4335", "FBBC05", "4285F4", "34A853", "EA4335"],
  _toGoogleStyle(selector) {
    // Take content inside div/span.selector and convert it into string, I called this the selected string
    let inputString = selector.innerHTML,
      // Temporary array that will be converted into string to replace the selected string
      finalHTMLOutput = [];
    // Pointer of the colorList
    let colorIndex = 0;

    // Loop for each letter in the selected string
    for (let i = 0; i < inputString.length; i++) {
      // Incrementing the color pointer
      colorIndex++;

      // Reset the pointer to 0 when it hit the final value in the color list
      if (colorIndex == 6)(colorIndex -= 6);

      // Adding span and color to each individual letter
      let currOutLetter = `<span class="_${toGoogleStyle.colorList[colorIndex]}">${inputString.charAt(i)}</span>`;

      // Push the individual letter to the temporary array
      finalHTMLOutput.push(currOutLetter);
    }
    // Finally join all values in that array into one single string and replace the selected string
    selector.innerHTML = finalHTMLOutput.join("");
  },
  // Global style config like font, font-size, font-weight, font-style
  googleStyleConfig(selector, fontSize, fontStyle) {
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
    let googleStyleGlobalStylesheet = `.${selector}>span{font-family:Google Sans;${weightOrDeco}font-size:${fontSize}px}`;
    toGoogleStyle.addCSSToDOM(googleStyleGlobalStylesheet + toGoogleStyle.createColorCSS(toGoogleStyle.colorList));
  },
  addCSSToDOM(string) {
    let head = this.d.head || this.d.getElementsByTagName('head')[0],
      style = this.d.createElement('style');
    head.appendChild(style);
    style.type = 'text/css';
    if (style.styleSheet) {
      style.styleSheet.cssText = string;
    } else {
      style.appendChild(this.d.createTextNode(string));
    }
  },
  createColorCSS(arr) {
    let temp = [];
    for (let elem of arr) temp.push(`._${elem}{color:#${elem}}`);
    return temp.join("");
  },
  init(selector, fontSize = 40, fontStyle = 'bold') {
    this.d.addEventListener("DOMContentLoaded", () => {
      for (let elem of document.querySelectorAll('.' + selector)) toGoogleStyle._toGoogleStyle(elem);
      toGoogleStyle.googleStyleConfig(selector, fontSize, fontStyle);
    });
  },
};

// toGoogleStyle.init('.google_style');