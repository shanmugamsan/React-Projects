export const bootstrapContent = [
  {
    bsIntro: `
# Introduction to Bootstrap  

Bootstrap is the **most popular front-end framework** for building responsive, mobile-first websites quickly.  

It provides ready-to-use **CSS, JavaScript, and components** like buttons, forms, navbars, cards, grids, and much more.  

### Why Bootstrap?
- Saves time with prebuilt components.  
- Ensures **mobile responsiveness** by default.  
- Works consistently across modern browsers.  
- Huge developer community and documentation.  

### Getting Started
You can use Bootstrap in two ways:  

**1. Using CDN (Recommended for beginners):**  
\`\`\`html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
\`\`\`  

**2. Downloading files:**  
Download Bootstrap from [getbootstrap.com](https://getbootstrap.com) and link locally.  

✅ **Tip:** Always use the latest version for new projects.  
`
  },
  {
    bsGrid: `
# Bootstrap Grid System  

The **Grid System** in Bootstrap is the backbone of responsive design. It uses a **12-column layout** system.  

### Key Concepts
- Container → Wraps content (\`.container\`, \`.container-fluid\`).  
- Row → Defines horizontal groups (\`.row\`).  
- Columns → Divide space (\`.col\`, \`.col-sm-6\`, \`.col-md-4\`).  
- Responsive Breakpoints → Adjust columns for different devices.  

### Example
\`\`\`html
<div class="container">
  <div class="row">
    <div class="col-sm-4">Left</div>
    <div class="col-sm-4">Middle</div>
    <div class="col-sm-4">Right</div>
  </div>
</div>
\`\`\`  

✅ **Best Practice:** Always use rows inside containers and columns inside rows.  
`
  },
  {
    bsTypography: `
# Bootstrap Typography  

Typography in Bootstrap ensures text is **readable and consistent** across devices.  

### Headings
Use \`<h1>\`–\`<h6>\` or classes:  
\`\`\`html
<h1 class="display-1">Big Heading</h1>
<p class="lead">This is a lead paragraph</p>
\`\`\`  

### Text Utilities
- \`.text-start\`, \`.text-center\`, \`.text-end\` → Alignment.  
- \`.fw-bold\`, \`.fw-light\` → Font weight.  
- \`.text-primary\`, \`.text-danger\` → Text colors.  

✅ **Tip:** Use Bootstrap utilities for consistency instead of writing custom CSS everywhere.  
`
  },
  {
    bsColors: `
# Bootstrap Colors  

Bootstrap provides **built-in colors** for text, backgrounds, and components.  

### Text Colors
\`\`\`html
<p class="text-primary">Primary Text</p>
<p class="text-success">Success Text</p>
<p class="text-danger">Danger Text</p>
\`\`\`  

### Background Colors
\`\`\`html
<div class="bg-warning text-dark p-3">Warning Background</div>
<div class="bg-info text-white p-3">Info Background</div>
\`\`\`  

### Semantic Colors
- \`primary\` → Blue  
- \`secondary\` → Gray  
- \`success\` → Green  
- \`danger\` → Red  
- \`warning\` → Yellow  
- \`info\` → Teal  
- \`light\`, \`dark\` → Black/White variants  

✅ **Best Practice:** Use semantic colors (success, danger, etc.) for **meaningful UI feedback**.  
`
  },
  {
    bsButtons: `
# Bootstrap Buttons  

Buttons are essential for actions. Bootstrap provides many styles.  

### Basic Buttons
\`\`\`html
<button class="btn btn-primary">Primary</button>
<button class="btn btn-danger">Danger</button>
<button class="btn btn-success">Success</button>
\`\`\`  

### Outline Buttons
\`\`\`html
<button class="btn btn-outline-primary">Outline</button>
\`\`\`  

### Sizes
\`\`\`html
<button class="btn btn-lg btn-info">Large</button>
<button class="btn btn-sm btn-secondary">Small</button>
\`\`\`  

✅ **Note:** Always use semantic button classes (e.g., \`btn-danger\` for delete actions).  
`
  },
  {
    bsForms: `
# Bootstrap Forms  

Forms are used for **user input** and Bootstrap makes them look clean and consistent.  

### Example
\`\`\`html
<form>
  <div class="mb-3">
    <label for="email" class="form-label">Email</label>
    <input type="email" class="form-control" id="email">
  </div>
  <div class="mb-3">
    <label for="password" class="form-label">Password</label>
    <input type="password" class="form-control" id="password">
  </div>
  <button class="btn btn-primary">Submit</button>
</form>
\`\`\`  

### Features
- Form controls: \`.form-control\`  
- Checkboxes & Radios: \`.form-check\`  
- Select dropdowns: \`.form-select\`  

✅ **Tip:** Use \`form-floating\` for floating labels.  
`
  },
  {
    bsNavbar: `
# Bootstrap Navbar  

The Navbar is a responsive **navigation header**.  

### Example
\`\`\`html
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">MySite</a>
    <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="menu">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item"><a class="nav-link" href="#">Home</a></li>
        <li class="nav-item"><a class="nav-link" href="#">About</a></li>
      </ul>
    </div>
  </div>
</nav>
\`\`\`  

✅ **Best Practice:** Always use \`navbar-expand-lg\` for mobile responsiveness.  
`
  },
  {
    bsCards: `
# Bootstrap Cards  

Cards are **containers for content** like text, images, and links.  

### Example
\`\`\`html
<div class="card" style="width: 18rem;">
  <img src="https://via.placeholder.com/150" class="card-img-top" alt="Image">
  <div class="card-body">
    <h5 class="card-title">Card Title</h5>
    <p class="card-text">Some quick example text.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
\`\`\`  

✅ **Tip:** Use cards for product listings, user profiles, and dashboards.  
`
  },
  {
    bsTables: `
# Bootstrap Tables  

Tables are enhanced with **striped, bordered, hoverable, and responsive** styles.  

### Example
\`\`\`html
<table class="table table-striped table-hover table-bordered">
  <thead class="table-dark">
    <tr><th>#</th><th>Name</th><th>Email</th></tr>
  </thead>
  <tbody>
    <tr><td>1</td><td>John</td><td>john@mail.com</td></tr>
    <tr><td>2</td><td>Jane</td><td>jane@mail.com</td></tr>
  </tbody>
</table>
\`\`\`  

✅ **Best Practice:** Use \`.table-responsive\` for small screens.  
`
  },
  {
    bsCarousel: `
# Bootstrap Carousel  

Carousel is used for **slideshow-style content**.  

### Example
\`\`\`html
<div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://via.placeholder.com/800x400" class="d-block w-100">
    </div>
    <div class="carousel-item">
      <img src="https://via.placeholder.com/800x400" class="d-block w-100">
    </div>
  </div>
  <button class="carousel-control-prev" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </button>
  <button class="carousel-control-next" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon"></span>
  </button>
</div>
\`\`\`  

✅ **Tip:** Carousels should be used sparingly for important content.  
`
  },
  {
    bsModal: `
# Bootstrap Modal  

Modals are pop-up dialogs for alerts, forms, or extra content.  

### Example
\`\`\`html
<button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
  Open Modal
</button>

<div class="modal fade" id="myModal">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header"><h5>Modal Title</h5></div>
      <div class="modal-body">This is the modal content.</div>
      <div class="modal-footer">
        <button class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
\`\`\`  

✅ **Best Practice:** Use modals for confirmation dialogs or forms, not main content.  
`
  },
  {
    bsCollapse: `
# Bootstrap Collapse & Accordion  

Collapse toggles **show/hide content** with animation.  

### Collapse Example
\`\`\`html
<button class="btn btn-primary" data-bs-toggle="collapse" data-bs-target="#demo">
  Toggle Content
</button>
<div id="demo" class="collapse">
  This is collapsible content.
</div>
\`\`\`  

### Accordion Example
\`\`\`html
<div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show">
      <div class="accordion-body">Content for first item.</div>
    </div>
  </div>
</div>
\`\`\`  
`
  },
  {
    bsIcons: `
# Bootstrap Icons  

Bootstrap comes with **SVG-based icons**.  

### Usage
\`\`\`html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css">
<i class="bi bi-alarm"></i>
<i class="bi bi-bell"></i>
<i class="bi bi-camera"></i>
\`\`\`  

✅ **Tip:** Icons are lightweight and scalable. Use them for buttons, navigation, and UI indicators.  
`
  },
  {
    bsUtilities: `
# Bootstrap Utilities  

Utilities are **helper classes** for spacing, alignment, borders, shadows, etc.  

### Spacing
\`\`\`html
<div class="p-3 m-2 bg-light">Padding & Margin Example</div>
\`\`\`  

### Borders & Shadows
\`\`\`html
<div class="border border-primary shadow-lg p-3">Box with border and shadow</div>
\`\`\`  

### Flexbox Utilities
\`\`\`html
<div class="d-flex justify-content-between">
  <div>Left</div><div>Right</div>
</div>
\`\`\`  

✅ **Best Practice:** Use utilities to avoid writing too much custom CSS.  
`
  },
  {
    bsProject: `
# Bootstrap Mini Project – Portfolio Website  

Now let’s apply what we learned to build a **mini project**.  

### Features
- Navbar with logo and links.  
- Hero section with background image.  
- About Me card section.  
- Skills table with progress bars.  
- Contact form with Bootstrap forms.  

### Example Layout
\`\`\`html
<nav class="navbar navbar-dark bg-dark">
  <a class="navbar-brand ms-3" href="#">My Portfolio</a>
</nav>

<div class="container mt-5">
  <div class="row">
    <div class="col-md-4">
      <div class="card">
        <img src="https://via.placeholder.com/150" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title">About Me</h5>
          <p>Hello! I'm a Web Developer.</p>
        </div>
      </div>
    </div>
    <div class="col-md-8">
      <form>
        <h4>Contact Me</h4>
        <input class="form-control mb-2" placeholder="Your Name">
        <input class="form-control mb-2" placeholder="Your Email">
        <textarea class="form-control mb-2" placeholder="Message"></textarea>
        <button class="btn btn-primary">Send</button>
      </form>
    </div>
  </div>
</div>
\`\`\`  

✅ **Outcome:** By completing this project, you’ll be confident in using Bootstrap components together.  
`
  }
];
