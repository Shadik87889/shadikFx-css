const cssProperties = [
  // Layout
  { property: "margin", short: "m" },
  { property: "padding", short: "p" },
  { property: "width", short: "w" },
  { property: "height", short: "h" },
  { property: "max-width", short: "max-w" },
  { property: "max-height", short: "max-h" },
  { property: "min-width", short: "min-w" },
  { property: "min-height", short: "min-h" },

  // Flex
  { property: "display", short: "d" },
  { property: "flex-basis", short: "fb" },
  { property: "flex-grow", short: "fg" },
  { property: "flex-shrink", short: "fs" },
  { property: "flex", short: "fl" },
  { property: "flex-direction", short: "fd" },
  { property: "flex-wrap", short: "fw" },
  { property: "justify-content", short: "jc" },
  { property: "align-items", short: "ai" },
  { property: "align-self", short: "as" },

  // Grid
  { property: "grid-template-columns", short: "gtc" },
  { property: "grid-template-rows", short: "gtr" },
  { property: "grid-template-areas", short: "gta" },
  { property: "grid-column", short: "gc" },
  { property: "grid-row", short: "gr" },
  { property: "gap", short: "gap" },

  // Positioning
  { property: "position", short: "pos" },
  { property: "top", short: "top" },
  { property: "left", short: "left" },
  { property: "right", short: "right" },
  { property: "bottom", short: "bottom" },
  { property: "z-index", short: "z" },

  // Typography
  { property: "font-size", short: "fs" },
  { property: "font-weight", short: "fw" }, // Added font-weight
  { property: "line-height", short: "lh" },
  { property: "letter-spacing", short: "ls" },
  { property: "word-spacing", short: "ws" },
  { property: "text-align", short: "ta" },
  { property: "text-transform", short: "tt" },
  { property: "text-indent", short: "ti" },

  // Box
  { property: "border-width", short: "bw" },
  { property: "border-radius", short: "br" },
  { property: "border-style", short: "bs" },
  { property: "border-color", short: "bc" },

  // Colors
  { property: "background-color", short: "bgc" },
  { property: "color", short: "c" },

  // Effects
  { property: "box-shadow", short: "bxsh" },
  { property: "opacity", short: "op" },
  { property: "filter", short: "f" },

  // Misc
  { property: "visibility", short: "vis" },
  { property: "overflow", short: "ov" },
  { property: "cursor", short: "cur" },

  // Newly added non-numeric properties
  { property: "white-space", short: "ws" },
  { property: "overflow-x", short: "ovx" },
  { property: "overflow-y", short: "ovy" },
  { property: "word-break", short: "wb" },
  { property: "object-fit", short: "of" },
  { property: "object-position", short: "opos" },
  { property: "text-overflow", short: "to" },
  { property: "pointer-events", short: "pe" },

  // Transform & Animation
  { property: "transition", short: "tr" },
  { property: "transition-duration", short: "trd" },
  { property: "transition-delay", short: "trdl" },
  { property: "transition-timing-function", short: "trtf" },
  { property: "transform", short: "tf" },
  { property: "rotate", short: "r" },
  { property: "scale", short: "s" },
  { property: "translate", short: "t" },
];

const nonNumericProperties = {
  display: ["none", "block", "inline", "inline-block", "flex", "grid"],
  position: ["static", "relative", "absolute", "fixed", "sticky"],
  "flex-direction": ["row", "row-reverse", "column", "column-reverse"],
  "flex-wrap": ["nowrap", "wrap", "wrap-reverse"],
  "justify-content": [
    "flex-start",
    "flex-end",
    "center",
    "space-between",
    "space-around",
    "space-evenly",
  ],
  "align-items": ["flex-start", "flex-end", "center", "baseline", "stretch"],
  "align-self": [
    "auto",
    "flex-start",
    "flex-end",
    "center",
    "baseline",
    "stretch",
  ],
  "text-align": ["left", "right", "center", "justify"],
  "text-transform": ["none", "capitalize", "uppercase", "lowercase"],
  visibility: ["visible", "hidden", "collapse"],
  overflow: ["visible", "hidden", "scroll", "auto"],
  "overflow-x": ["visible", "hidden", "scroll", "auto"],
  "overflow-y": ["visible", "hidden", "scroll", "auto"],
  cursor: ["auto", "default", "pointer", "wait", "text", "move", "not-allowed"],
  "grid-template-areas": [
    "none",
    `"header header" "sidebar main"`,
    `"nav nav" "content sidebar"`,
    `"a a" "b c"`,
  ],
  "grid-column": [
    "auto",
    "1",
    "1 / span 2",
    "2 / 4",
    "span 2",
    "span 3 / span 4",
  ],
  "grid-row": ["auto", "1", "1 / span 2", "2 / 4", "span 2", "span 3 / span 4"],
  "white-space": ["normal", "nowrap", "pre", "pre-line", "pre-wrap"],
  "word-break": ["normal", "break-all", "keep-all", "break-word"],
  "object-fit": ["fill", "contain", "cover", "none", "scale-down"],
  "object-position": ["top", "bottom", "left", "right", "center"],
  "text-overflow": ["clip", "ellipsis"],
  "pointer-events": ["auto", "none"],
  "border-style": ["solid", "dashed", "dotted", "none", "double", "groove"],
  transition: [
    "all",
    "none",
    "opacity",
    "transform",
    "background-color",
    "color",
  ],
  "transition-timing-function": [
    "ease",
    "ease-in",
    "ease-out",
    "ease-in-out",
    "linear",
    "step-start",
    "step-end",
  ],
  transform: ["none", "scale(1)", "rotate(0deg)", "translate(0, 0)"],

  // Added font-weight
  "font-weight": [
    "normal",
    "bold",
    "bolder",
    "lighter",
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
  ],
};

const unitMap = {
  default: ["px", "rem"],
  size: ["px", "rem", "%", "vw", "vh", "em", "ch"],
  spacing: ["px", "rem", "em", "%"],
  zIndex: [],
  opacity: [],
  lineHeight: ["unitless", "em"],
};

function getUnitsForProperty(property) {
  if (["z-index", "flex-grow", "flex-shrink", "opacity"].includes(property))
    return [];
  if (["line-height"].includes(property)) return ["unitless", "em"];
  if (
    ["margin", "padding", "gap", "top", "bottom", "left", "right"].includes(
      property
    )
  )
    return unitMap.spacing;
  if (
    [
      "width",
      "height",
      "max-width",
      "max-height",
      "min-width",
      "min-height",
    ].includes(property)
  )
    return unitMap.size;
  if (["rotate"].includes(property)) return ["deg"];
  if (["scale"].includes(property)) return ["unitless"];
  if (["translate"].includes(property)) return ["px", "rem", "%"];
  if (["transition-duration", "transition-delay"].includes(property))
    return ["ms", "s"];
  return unitMap.default;
}

function generateGoogleFontCSS(fontFamilies) {
  let googleFontCSS = "";
  fontFamilies.forEach((font) => {
    const fontName = font.replace(/\s+/g, "+");
    googleFontCSS += `@import url('https://fonts.googleapis.com/css2?family=${fontName}:wght@400;700&display=swap');\n`;
    googleFontCSS += `.${font
      .toLowerCase()
      .replace(/\s+/g, "-")}-font { font-family: '${font}', sans-serif; }\n`;
  });
  return googleFontCSS;
}

function sanitizeColorValue(value) {
  return value
    .replace(/#/g, "hex-")
    .replace(/\(/g, "")
    .replace(/\)/g, "")
    .replace(/,/g, "-")
    .replace(/\s+/g, "");
}

function generateColorCSS(colors = []) {
  let css = "";
  const colorProps = ["background-color", "color", "border-color"];
  const shortMap = {
    "background-color": "bgc",
    color: "c",
    "border-color": "bc",
  };

  colors.forEach((color) => {
    const safe = sanitizeColorValue(color);
    colorProps.forEach((prop) => {
      const short = shortMap[prop];
      css += `.${short}-${safe} { ${prop}: ${color}; }\n`;
    });
  });

  return css;
}

function generateCSS(customColors = []) {
  let cssContent = "";

  cssProperties.forEach(({ property, short }) => {
    if (nonNumericProperties[property]) {
      nonNumericProperties[property].forEach((value) => {
        cssContent += `.${short}-${value.replace(
          /\s+/g,
          "-"
        )} { ${property}: ${value}; }\n`;
      });
    } else {
      const units = getUnitsForProperty(property);
      if (units.includes("unitless")) {
        for (let i = 0; i <= 10; i++) {
          cssContent += `.${short}-${i} { ${property}: ${i}; }\n`;
        }
      }
      units.forEach((unit) => {
        for (let i = -100; i <= 1000; i += 10) {
          cssContent += `.${short}-${i}${unit} { ${property}: ${i}${unit}; }\n`;
        }
      });
    }
  });

  cssContent += generateColorCSS(customColors);
  return cssContent;
}

function injectCSS(fontFamilies = [], colorList = []) {
  const css = generateCSS(colorList);
  const googleFontCSS = generateGoogleFontCSS(fontFamilies);
  const style = document.createElement("style");
  style.innerHTML = css + googleFontCSS;
  document.head.appendChild(style);
}

// Example usage
const userSelectedFonts = ["Roboto", "Lato", "Open Sans"];
const customColors = [
  "#ff5733",
  "rgb(34, 193, 195)",
  "hsl(200, 100%, 50%)",
  "black",
  "white",
];

injectCSS(userSelectedFonts, customColors);
