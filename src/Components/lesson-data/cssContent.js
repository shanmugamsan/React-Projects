export const cssContent = [
  {
    cssIntro: `
# 1. CSS Introduction

CSS (**Cascading Style Sheets**) is a stylesheet language used to describe how HTML elements are displayed on the screen, paper, or other media.

---

## Why CSS?

- Separates content (HTML) from design (CSS).
- Saves time – one stylesheet can control the layout of multiple web pages.
- Provides consistency – same styling rules apply across your website.
- Improves accessibility & responsiveness.

---

## Three Ways to Apply CSS:

1. **Inline CSS** – Applied directly inside an element’s \`style\` attribute.
   \`\`\`html
   <p style="color: red;">Hello World</p>
   \`\`\`

2. **Internal CSS** – Defined in a \`<style>\` block inside the HTML \`<head>\`.
   \`\`\`html
   <style>
     p { color: blue; }
   </style>
   \`\`\`

3. **External CSS** – Written in a separate .css file and linked via \`<link>\`.
   \`\`\`html
   <link rel="stylesheet" href="styles.css">
   \`\`\`

✅ Best Practice: Always use **External CSS** for maintainability.

---
    `
  },
  {
    cssSelectors: `
# 2. CSS Selectors

Selectors are patterns used to target and style HTML elements.

---

## Common Selectors

- **Universal Selector**
  \`\`\`css
  * { margin: 0; padding: 0; }
  \`\`\`

- **Type Selector**
  \`\`\`css
  p { color: green; }
  \`\`\`

- **Class Selector**
  \`\`\`css
  .highlight { background: yellow; }
  \`\`\`

- **ID Selector**
  \`\`\`css
  #header { font-size: 24px; }
  \`\`\`

- **Group Selector**
  \`\`\`css
  h1, h2, h3 { font-family: Arial; }
  \`\`\`

- **Descendant Selector**
  \`\`\`css
  div p { color: red; }
  \`\`\`

---

✅ Specificity Hierarchy:  
Inline > ID > Class > Type > Universal

---
    `
  },
  {
    cssColors: `
# 3. CSS Colors

Colors make websites visually appealing. CSS offers multiple ways to define colors.

---

## Methods

1. **Named Colors**
   \`\`\`css
   h1 { color: red; }
   \`\`\`

2. **HEX**
   \`\`\`css
   p { color: #00ff00; }
   \`\`\`

3. **RGB**
   \`\`\`css
   div { color: rgb(0, 0, 255); }
   \`\`\`

4. **RGBA (with Transparency)**
   \`\`\`css
   span { color: rgba(255, 0, 0, 0.5); }
   \`\`\`

5. **HSL (Hue, Saturation, Lightness)**
   \`\`\`css
   h2 { color: hsl(120, 100%, 50%); }
   \`\`\`

---

✅ Use RGBA or HSLA for modern, flexible designs.

---
    `
  },
  {
    cssBackground: `
# 4. CSS Backgrounds

Background properties enhance the appearance of elements.

---

## Properties

- background-color
- background-image
- background-repeat (repeat, no-repeat, repeat-x, repeat-y)
- background-position (left, right, center, top, bottom)
- background-size (cover, contain, auto)
- background-attachment (scroll, fixed)

---

## Example

\`\`\`css
body {
  background-color: lightblue;
  background-image: url("pattern.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
\`\`\`

✅ Use \`background-size: cover;\` for full-width images.

---
    `
  },
  {
    cssBoxModel: `
# 5. CSS Box Model

Every HTML element is treated as a rectangular box.

---

## Box Model Layers

1. **Content** – text or images
2. **Padding** – space between content & border
3. **Border** – around padding + content
4. **Margin** – space outside border

---

## Example

\`\`\`css
div {
  width: 300px;
  padding: 20px;
  border: 5px solid black;
  margin: 15px;
}
\`\`\`

✅ Borders + Padding + Content determine total element size.

---
    `
  },
  {
    cssText: `
# 6. CSS Text

CSS offers extensive text formatting.

---

## Example

\`\`\`css
p {
  color: darkblue;
  text-align: center;
  text-transform: uppercase;
  text-decoration: underline;
  letter-spacing: 2px;
  line-height: 1.5;
  text-shadow: 2px 2px 5px gray;
}
\`\`\`

---

## Properties

- color
- text-align (left, right, center, justify)
- text-transform (uppercase, lowercase, capitalize)
- text-decoration (none, underline, line-through)
- letter-spacing
- line-height
- text-shadow

✅ Use \`line-height\` for readability.

---
    `
  },
  {
    cssFonts: `
# 7. CSS Fonts

Fonts determine how text looks.

---

## Font Stack

Always provide fallback fonts.

\`\`\`css
body {
  font-family: "Segoe UI", Arial, sans-serif;
}
\`\`\`

---

## Properties

- font-family
- font-size
- font-style (normal, italic, oblique)
- font-weight (normal, bold, 100–900)
- font-variant (small-caps)

✅ Use Google Fonts for modern typography.

---
    `
  },
  {
    cssUnits: `
# 8. CSS Units

Units define size and spacing.

---

## Absolute Units

- px, cm, mm, in, pt, pc

## Relative Units

- % (percentage of parent)
- em (relative to parent font-size)
- rem (relative to root font-size)
- vw (1% of viewport width)
- vh (1% of viewport height)

---

## Example

\`\`\`css
div {
  width: 50%;
  font-size: 2em;
  margin: 2rem;
}
\`\`\`

✅ Prefer \`rem\`, \`em\`, \`vw\`, \`vh\` for responsive designs.

---
    `
  },
  {
    cssDisplay: `
# 9. CSS Display

Defines how elements are shown.

---

## Values

- block (div, p)
- inline (span, a)
- inline-block
- none (hidden)

---

## Example

\`\`\`css
p { display: none; }
span { display: inline; }
div { display: block; }
\`\`\`

✅ Use \`inline-block\` to apply width/height on inline elements.

---
    `
  },
  {
    cssPosition: `
# 10. CSS Positioning

Controls how elements are placed.

---

## Values

- static (default)
- relative (relative to normal position)
- absolute (relative to nearest positioned ancestor)
- fixed (relative to viewport)
- sticky (mix of relative + fixed)

---

## Example

\`\`\`css
div {
  position: absolute;
  top: 50px;
  left: 100px;
}
\`\`\`

✅ Use sticky for modern navbar designs.

---
    `
  },
  {
    cssFlexbox: `
# 11. CSS Flexbox

Flexbox provides a flexible way to align items.

---

## Example

\`\`\`css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
\`\`\`

---

## Properties

- flex-direction (row, column)
- justify-content (center, space-between, space-around)
- align-items (center, stretch, flex-start, flex-end)
- flex-wrap
- gap

✅ Use Flexbox for centering and simple layouts.

---
    `
  },
  {
    cssGrid: `
# 12. CSS Grid

Grid creates two-dimensional layouts.

---

## Example

\`\`\`css
.container {
  display: grid;
  grid-template-columns: 200px 200px auto;
  grid-gap: 10px;
}
.item1 { grid-column: 1 / 3; }
\`\`\`

---

## Properties

- grid-template-rows
- grid-template-columns
- grid-gap
- grid-row
- grid-column

✅ Use Grid for complex page structures.

---
    `
  },
  {
    cssTransitions: `
# 13. CSS Transitions

Allows smooth property changes.

---

## Example

\`\`\`css
button {
  background: blue;
  color: white;
  transition: background 0.5s, transform 0.3s;
}
button:hover {
  background: red;
  transform: scale(1.1);
}
\`\`\`

✅ Transition is great for hover effects.

---
    `
  },
  {
    cssAnimations: `
# 14. CSS Animations

Animations allow elements to move/change over time.

---

## Example

\`\`\`css
@keyframes moveBox {
  from { left: 0; }
  to { left: 200px; }
}

.box {
  position: relative;
  animation: moveBox 2s infinite alternate;
}
\`\`\`

---

## Properties

- animation-name
- animation-duration
- animation-delay
- animation-iteration-count
- animation-timing-function

✅ Use animations for interactive UI elements.

---
    `
  },
  {
    cssMediaQueries: `
# 15. CSS Media Queries

Make websites **responsive** to different screen sizes.

---

## Example

\`\`\`css
body { background: lightblue; }

@media (max-width: 600px) {
  body { background: lightgreen; }
}
\`\`\`

✅ Always test designs on desktop, tablet, and mobile.

---
    `
  }
]
