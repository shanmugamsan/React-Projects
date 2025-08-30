export const htmlContent = [
    {
        htmlIntro: `
## HTML

HTML is the standard markup language for creating Web pages.

### What is HTML?
- HTML stands for **Hyper Text Markup Language**  
- HTML describes the **structure** of a Web page  
- HTML consists of a series of **elements**  
- HTML elements tell the browser how to display the content  
- HTML elements label pieces of content such as headings, paragraphs, links, etc.

### A Simple HTML Document

\`\`\`html
<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
</head>
<body>

<h1>My First Heading</h1>
<p>My first paragraph.</p>

</body>
</html>
\`\`\`

### Example Explained
- \`<!DOCTYPE html>\` defines that this document is an HTML5 document  
- \`<html>\` is the root element  
- \`<head>\` contains meta information  
- \`<title>\` specifies the page title (shown in the browser tab)  
- \`<body>\` contains visible content  
- \`<h1>\` defines a heading  
- \`<p>\` defines a paragraph  

### What is an HTML Element?
An HTML element has a start tag, content, and an end tag:

\`\`\`html
<tagname> Content goes here... </tagname>
\`\`\`

Example:

\`\`\`html
<h1>My First Heading</h1>
<p>My first paragraph.</p>
\`\`\`
`
    },
    {
        htmlBasics: `
## HTML Basic Examples

All HTML documents start with a document type declaration: \`<!DOCTYPE html>\`.  

The document begins with \`<html>\` and ends with \`</html>\`.  

The visible part is between \`<body>\` and \`</body>\`.

### Example

\`\`\`html
<!DOCTYPE html>
<html>
<body>

<h1>My First Heading</h1>
<p>My first paragraph.</p>

</body>
</html>
\`\`\`

### The <!DOCTYPE> Declaration
- Appears only once at the top of the page  
- Not case sensitive  
- HTML5 declaration:

\`\`\`html
<!DOCTYPE html>
\`\`\`

### HTML Headings
Defined with \`<h1>\` to \`<h6>\` tags:

\`\`\`html
<h1>This is heading 1</h1>
<h2>This is heading 2</h2>
<h3>This is heading 3</h3>
\`\`\`

### HTML Paragraphs

\`\`\`html
<p>This is a paragraph.</p>
<p>This is another paragraph.</p>
\`\`\`

### HTML Links

\`\`\`html
<a href="https://www.w3schools.com">This is a link</a>
\`\`\`

### HTML Images

\`\`\`html
<img src="w3schools.jpg" alt="W3Schools.com" width="104" height="142">
\`\`\`

### How to View HTML Source
- Press **CTRL + U** or right-click → "View Page Source"
`
    },
    {
        htmlElements: `
## HTML Elements 

HTML elements are represented by **tags** such as \`<h1>\`, \`<p>\`, \`<a>\`.  

### Example

\`\`\`html
<!DOCTYPE html>
<html>
  <head>
    <title>My First Page</title>
  </head>
  <body>
    <h1>Hello World!</h1>
    <p>This is my first HTML page.</p>
  </body>
</html>
\`\`\`

### Key Points
- HTML describes the **structure** of a web page  
- HTML uses **tags** like <h1>, <p>, <a>  
- HTML is **easy to learn**   
`
    },
    {
        htmlAttributes: `
# HTML Attributes

HTML attributes provide additional information about elements.

## Key Points
- Attributes always appear in the start tag
- Usually in name/value format: name="value"

### href Attribute
\`\`\`html
<a href="https://www.w3schools.com">Visit W3Schools</a>
\`\`\`

### src Attribute
\`\`\`html
<img src="img_girl.jpg">
\`\`\`

### Width & Height
\`\`\`html
<img src="img_girl.jpg" width="500" height="600">
\`\`\`

### alt Attribute
\`\`\`html
<img src="img_girl.jpg" alt="Girl with a jacket">
\`\`\`

### style Attribute
\`\`\`html
<p style="color:red;">This is a red paragraph.</p>
\`\`\`

### lang Attribute
\`\`\`html
<html lang="en">
<body>...</body>
</html>
\`\`\`

### title Attribute
\`\`\`html
<p title="I'm a tooltip">This is a paragraph.</p>
\`\`\`
`
    },
    {
        htmlHeadings: `
# HTML Headings

HTML headings: <h1> to <h6>

### Example

\`\`\`html
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
\`\`\`

> Note: Browsers add space before/after headings

### Importance
- Search engines use headings for indexing  
- Users skim pages by headings  
- Use <h1> for main headings, <h2> for subheadings, etc.
`
    },
    {
        htmlParagraphs: `
# HTML Paragraphs

Paragraphs are blocks of text.

### <p> Tag
\`\`\`html
<p>This is a paragraph.</p>
<p>This is another paragraph.</p>
\`\`\`

### Paragraph Formatting
\`\`\`html
<p style="color:blue; font-size:18px; text-align:center;">Styled paragraph</p>
\`\`\`

### Line Breaks
\`\`\`html
<p>This is line 1.<br>This is line 2.</p>
\`\`\`
`
    },
    {
        htmlLinks: `
# HTML Links

### <a> Tag
\`\`\`html
<a href="https://www.example.com">Visit Example</a>
\`\`\`

### Link Types
1. Absolute URL: href="https://www.example.com"  
2. Relative URL: href="page2.html"

### Link Targets
- _self: same window  
- _blank: new tab  
- _parent: parent frame  
- _top: full window

\`\`\`html
<a href="https://www.example.com" target="_blank">Open in new tab</a>
\`\`\`
`
    },
    {
        htmlImages: `
# HTML Images

### <img> Tag
\`\`\`html
<img src="img_girl.jpg" alt="Girl with a jacket">
\`\`\`

### Image URLs
- Absolute: src="https://www.w3schools.com/images/img_girl.jpg"  
- Relative: src="img_girl.jpg" or src="/images/img_girl.jpg"

### Width & Height
\`\`\`html
<img src="img_girl.jpg" width="500" height="600">
\`\`\`

### Tips
- Always include alt text  
- Use relative URLs to avoid broken links
`
    },
    {
        htmlTable: `
# HTML Tables

### Basic Tags
- <table>: table container  
- <tr>: row  
- <th>: header  
- <td>: cell

### Example
\`\`\`html
<table border="1">
  <tr>
    <th>Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>John</td>
    <td>25</td>
  </tr>
  <tr>
    <td>Mary</td>
    <td>30</td>
  </tr>
</table>
\`\`\`

### Table Attributes
- border, cellpadding, cellspacing, width, align
`
    },
    {
        htmlList: `
# HTML Lists

### Unordered List
\`\`\`html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
\`\`\`

### Ordered List
\`\`\`html
<ol>
  <li>First</li>
  <li>Second</li>
  <li>Third</li>
</ol>
\`\`\`
`
    },


{
    htmlDivClass: `
# HTML Div & Class

<div> elements are used to group content for styling or scripting.

---

## The <div> Tag

- Defines a container for other elements.
- Commonly used with CSS to style sections.

### Example:

<div style="background-color:lightblue; padding:10px;">
  <p>This is inside a div.</p>
</div>

---

## The class Attribute

- Assigns a class name to an element.
- Allows multiple elements to share the same style.

### Example:

<p class="highlight">This is highlighted text.</p>

<style>
  .highlight {
    color: red;
    font-weight: bold;
  }
</style>
`
},
{
    htmlForm: `
# HTML Forms

Forms collect user input on a webpage.

---

## The <form> Tag

- Encloses form elements.
- Attributes:
  - action: URL to send form data
  - method: GET or POST

### Example:

<form action="/submit_form" method="post">
  ...
</form>

---

## Form Structure

- Contains input elements like text fields, checkboxes, radio buttons, etc.
- Submit button sends data to the server.
`
},
{
    htmlFormInputs: `
# HTML Form Inputs

Inputs allow users to enter data in forms.

---

## Text Input

### Example:

<input type="text" name="username" placeholder="Enter your name">

---

## Password Input

### Example:

<input type="password" name="password">

---

## Radio Buttons

### Example:

<input type="radio" name="gender" value="male"> Male  
<input type="radio" name="gender" value="female"> Female

---

## Checkboxes

### Example:

<input type="checkbox" name="subscribe" value="newsletter"> Subscribe to newsletter

---

## Submit Button

### Example:

<input type="submit" value="Submit">
`
},
{
    htmlIframe: `
# HTML Iframe

An iframe embeds another HTML page inside the current page.

---

## The <iframe> Tag

- Attributes:
  - src: URL of the page to embed
  - width, height: Size of iframe
  - frameborder: Border (0 for none)

### Example:

<iframe src="https://www.example.com" width="600" height="400" frameborder="0"></iframe>

---

## Tips

- Iframes are commonly used for embedding videos, maps, or external pages.
- Avoid excessive use as it may affect page performance.
`
},
{
    htmlStyle: `
# HTML Style

The style attribute or <style> tag allows adding CSS to HTML.

---

## Inline Style

- Added directly to an HTML element.

### Example:

<p style="color:blue; font-size:18px;">Styled paragraph</p>

---

## Internal CSS

- Placed inside <style> tag in the <head> section.

### Example:

<head>
  <style>
    p { color: green; font-weight: bold; }
  </style>
</head>

<body>
  <p>This is a styled paragraph.</p>
</body>

---

## CSS Properties

- color, background-color, font-size, margin, padding, border, etc.
- Styles can be applied to IDs, classes, or HTML tags.
`
}

]


