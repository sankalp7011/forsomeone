// Add MagicMouse CSS
const cssLink = document.createElement('link');
cssLink.rel = 'stylesheet';
cssLink.href = 'https://cdn.jsdelivr.net/gh/dshongphuc/magic-mouse-js/magic-mouse.min.css';
document.head.appendChild(cssLink);

// Add fox cursor style
const styleTag = document.createElement('style');
styleTag.innerHTML = `
  body, html, button, a {
    cursor: url('cursor.png'), auto !important;
  }
`;
document.head.appendChild(styleTag);

// Load MagicMouse script
const script = document.createElement('script');
script.src = 'https://cdn.jsdelivr.net/gh/dshongphuc/magic-mouse-js/magic-mouse.min.js';
script.onload = () => {
  const options = {
    cursorOuter: "circle-basic",
    hoverEffect: "pointer-blur",
    hoverItemMove: false,
    defaultCursor: false,
    outerWidth: 30,
    outerHeight: 30,
  };
  magicMouse(options);
};
document.body.appendChild(script);
