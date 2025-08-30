// importing the lessons content
import { cssContent } from "./cssContent.js";
import { htmlContent } from "./htmlContent.js";
import { bootstrapContent } from "./bootstrapContent.js";
import { jsContent } from "./jsContent.js";
import { nodeContent } from "./nodeContent.js";
// images

import html from '../../Assets/html.jpg'
import css from '../../Assets/css.jpg'
import bootstrap from '../../Assets/bootstrap.webp'
import js from '../../Assets/javaScript.webp' 
import node from '../../Assets/node.jpg' 


export const courses = [
  // course 1
  {
    id: 1,
    title: "HTML Tutorial",
    description: "Learn the fundamentals of HTML for building web pages.",
    image: html,
    lessons: [
      {
        id: "HTML Introduction",
        title: "Introduction to HTML",
        content: [{ id: 1, lessonList: htmlContent[0].htmlIntro }],
        video: "https://www.youtube.com/embed/qz0aGYrrlhU",
        pdf: "/pdfs/html_intro.pdf",
      },
      {
        id: "HTML Basics",
        title: "HTML Basics",
        content: [{ id: 2, lessonList: htmlContent[1].htmlBasics }],
        video: "https://www.youtube.com/embed/qz0aGYrrlhU",
        pdf: "/pdfs/html_basics.pdf",
      },
      {
        id: "HTML Elements",
        title: "HTML Elements",
        content: [{ id: 3, lessonList: htmlContent[2].htmlElements }],
        video: "https://www.youtube.com/embed/qz0aGYrrlhU",
        pdf: "/pdfs/html_elements.pdf",
      },
      {
        id: "HTML Attributes",
        title: "HTML Attributes",
        content: [{ id: 4, lessonList: htmlContent[3].htmlAttributes }],
        video: "https://www.youtube.com/embed/qz0aGYrrlhU",
        pdf: "/pdfs/html_attributes.pdf",
      },
      {
        id: "HTML Headings",
        title: "HTML Headings",
        content: [{ id: 5, lessonList: htmlContent[4].htmlHeadings }],
        video: "https://www.youtube.com/embed/qz0aGYrrlhU",
        pdf: "/pdfs/html_headings.pdf",
      },
      {
        id: "HTML Paragraphs",
        title: "HTML Paragraphs",
        content: [{ id: 6, lessonList: htmlContent[5].htmlParagraphs }],
        video: "https://www.youtube.com/embed/qz0aGYrrlhU",
        pdf: "/pdfs/html_paragraphs.pdf",
      },
      {
        id: "HTML Links",
        title: "HTML Links",
        content: [{ id: 7, lessonList: htmlContent[6].htmlLinks }],
        video: "https://www.youtube.com/embed/qz0aGYrrlhU",
        pdf: "/pdfs/html_links.pdf",
      },
      {
        id: "HTML Images",
        title: "HTML Images",
        content: [{ id: 8, lessonList: htmlContent[7].htmlImages }],
        video: "https://www.youtube.com/embed/qz0aGYrrlhU",
        pdf: "/pdfs/html_images.pdf",
      },
      {
        id: "HTML Tables",
        title: "HTML Tables",
        content: [{ id: 9, lessonList: htmlContent[8].htmlTable }],
        video: "https://www.youtube.com/embed/qz0aGYrrlhU",
        pdf: "/pdfs/html_tables.pdf",
      },
      {
        id: "HTML Lists",
        title: "HTML Lists",
        content: [{ id: 10, lessonList: htmlContent[9].htmlList }],
        video: "https://www.youtube.com/embed/qz0aGYrrlhU",
        pdf: "/pdfs/html_lists.pdf",
      },
      {
        id: "HTML DivClass",
        title: "HTML Div and Class",
        content: [{ id: 11, lessonList: htmlContent[10].htmlDivClass }],
        video: "https://www.youtube.com/embed/qz0aGYrrlhU",
        pdf: "/pdfs/html_div_class.pdf",
      },
      {
        id: "HTML Form",
        title: "HTML Form",
        content: [{ id: 12, lessonList: htmlContent[11].htmlForm }],
        video: "https://www.youtube.com/embed/qz0aGYrrlhU",
        pdf: "/pdfs/html_form.pdf",
      },
      {
        id: "HTML FormInputs",
        title: "HTML Form Inputs",
        content: [{ id: 13, lessonList: htmlContent[12].htmlFormInputs }],
        video: "https://www.youtube.com/embed/qz0aGYrrlhU",
        pdf: "/pdfs/html_form_inputs.pdf",
      },
      {
        id: "HTML Iframe",
        title: "HTML Iframe",
        content: [{ id: 14, lessonList: htmlContent[13].htmlIframe }],
        video: "https://www.youtube.com/embed/qz0aGYrrlhU",
        pdf: "/pdfs/html_iframe.pdf",
      },
      {
        id: "HTML Style",
        title: "HTML Style",
        content: [{ id: 15, lessonList: htmlContent[14].htmlStyle }],
        video: "https://www.youtube.com/embed/qz0aGYrrlhU",
        pdf: "/pdfs/html_style.pdf",
      }
    ]
      
  },
  // course 2
  {
    id: 2,
    title: "CSS Fundamentals",
    description: "Master CSS for beautiful website styling.",
    image: css,
    lessons: [
      {
      id: "css-intro",
      title: "Introduction to CSS",
      content: [{ id: 1, lessonList: cssContent[0].cssIntro }],
      video: "https://www.youtube.com/embed/yfoY53QXEnI",
      pdf: "/pdfs/css_intro.pdf",
    },
    {
      id: "css-selectors",
      title: "CSS Selectors",
      content: [{ id: 2, lessonList: cssContent[1].cssSelectors }],
      video: "https://www.youtube.com/embed/l1mER1bV0N0",
      pdf: "/pdfs/css_selectors.pdf",
    },
    {
      id: "css-colors",
      title: "CSS Colors",
      content: [{ id: 3, lessonList: cssContent[2].cssColors }],
      video: "https://www.youtube.com/embed/IbWOQWw1wkM",
      pdf: "/pdfs/css_colors.pdf",
    },
    {
      id: "css-background",
      title: "CSS Backgrounds",
      content: [{ id: 4, lessonList: cssContent[3].cssBackground }],
      video: "https://www.youtube.com/embed/3T4pQgJ6vE0",
      pdf: "/pdfs/css_background.pdf",
    },
    {
      id: "css-boxmodel",
      title: "CSS Box Model",
      content: [{ id: 5, lessonList: cssContent[4].cssBoxModel }],
      video: "https://www.youtube.com/embed/rIO5326FgPE",
      pdf: "/pdfs/css_boxmodel.pdf",
    },
    {
      id: "css-text",
      title: "CSS Text Styling",
      content: [{ id: 6, lessonList: cssContent[5].cssText }],
      video: "https://www.youtube.com/embed/9T8uxp5hWOY",
      pdf: "/pdfs/css_text.pdf",
    },
    {
      id: "css-fonts",
      title: "CSS Fonts",
      content: [{ id: 7, lessonList: cssContent[6].cssFonts }],
      video: "https://www.youtube.com/embed/fcMcf_4PjfI",
      pdf: "/pdfs/css_fonts.pdf",
    },
    {
      id: "css-units",
      title: "CSS Units",
      content: [{ id: 8, lessonList: cssContent[7].cssUnits }],
      video: "https://www.youtube.com/embed/5xgP9sZC6-o",
      pdf: "/pdfs/css_units.pdf",
    },
    {
      id: "css-display",
      title: "CSS Display",
      content: [{ id: 9, lessonList: cssContent[8].cssDisplay }],
      video: "https://www.youtube.com/embed/Qf-wVa9y9V4",
      pdf: "/pdfs/css_display.pdf",
    },
    {
      id: "css-position",
      title: "CSS Positioning",
      content: [{ id: 10, lessonList: cssContent[9].cssPosition }],
      video: "https://www.youtube.com/embed/jx5jmI0UlXU",
      pdf: "/pdfs/css_position.pdf",
    },
    {
      id: "css-flexbox",
      title: "CSS Flexbox",
      content: [{ id: 11, lessonList: cssContent[10].cssFlexbox }],
      video: "https://www.youtube.com/embed/JJSoEo8JSnc",
      pdf: "/pdfs/css_flexbox.pdf",
    },
    {
      id: "css-grid",
      title: "CSS Grid",
      content: [{ id: 12, lessonList: cssContent[11].cssGrid }],
      video: "https://www.youtube.com/embed/EFafSYg-PkI",
      pdf: "/pdfs/css_grid.pdf",
    },
    {
      id: "css-transitions",
      title: "CSS Transitions",
      content: [{ id: 13, lessonList: cssContent[12].cssTransitions }],
      video: "https://www.youtube.com/embed/8kK-cA99SA0",
      pdf: "/pdfs/css_transitions.pdf",
    },
    {
      id: "css-animations",
      title: "CSS Animations",
      content: [{ id: 14, lessonList: cssContent[13].cssAnimations }],
      video: "https://www.youtube.com/embed/YszONjKpgg4",
      pdf: "/pdfs/css_animations.pdf",
    },
    {
      id: "css-mediaqueries",
      title: "CSS Media Queries",
      content: [{ id: 15, lessonList: cssContent[14].cssMediaQueries }],
      video: "https://www.youtube.com/embed/yU7jJ3NbPdA",
      pdf: "/pdfs/css_mediaqueries.pdf",
    },
    ],
  },

  // course 3
  {
  id: 3,
  title: "Bootstrap Framework",
  description: "Learn Bootstrap to quickly build responsive and modern websites.",
  instructor: "Mark Wilson",
  image: bootstrap,
  lessons: [
    {
      id: "bs-intro",
      title: "Introduction to Bootstrap",
      content: [{ id: 1, lessonList: bootstrapContent[0].bsIntro }],
      video: "https://www.youtube.com/embed/5GcQtLDGXy8",
      pdf: "/pdfs/bs_intro.pdf",
    },
    {
      id: "bs-grid",
      title: "Bootstrap Grid System",
      content: [{ id: 2, lessonList: bootstrapContent[1].bsGrid }],
      video: "https://www.youtube.com/embed/WzQBAc8i73E",
      pdf: "/pdfs/bs_grid.pdf",
    },
    {
      id: "bs-typography",
      title: "Bootstrap Typography",
      content: [{ id: 3, lessonList: bootstrapContent[2].bsTypography }],
      video: "https://www.youtube.com/embed/q3NEl8nXw3g",
      pdf: "/pdfs/bs_typography.pdf",
    },
    {
      id: "bs-colors",
      title: "Bootstrap Colors",
      content: [{ id: 4, lessonList: bootstrapContent[3].bsColors }],
      video: "https://www.youtube.com/embed/5GcQtLDGXy8?t=300",
      pdf: "/pdfs/bs_colors.pdf",
    },
    {
      id: "bs-buttons",
      title: "Bootstrap Buttons",
      content: [{ id: 5, lessonList: bootstrapContent[4].bsButtons }],
      video: "https://www.youtube.com/embed/vpAJ0s5S2t0",
      pdf: "/pdfs/bs_buttons.pdf",
    },
    {
      id: "bs-forms",
      title: "Bootstrap Forms",
      content: [{ id: 6, lessonList: bootstrapContent[5].bsForms }],
      video: "https://www.youtube.com/embed/Jyvffr3aCp0",
      pdf: "/pdfs/bs_forms.pdf",
    },
    {
      id: "bs-navbar",
      title: "Bootstrap Navbar",
      content: [{ id: 7, lessonList: bootstrapContent[6].bsNavbar }],
      video: "https://www.youtube.com/embed/hWElZKygh3s",
      pdf: "/pdfs/bs_navbar.pdf",
    },
    {
      id: "bs-cards",
      title: "Bootstrap Cards",
      content: [{ id: 8, lessonList: bootstrapContent[7].bsCards }],
      video: "https://www.youtube.com/embed/0oe9dXL_1bQ",
      pdf: "/pdfs/bs_cards.pdf",
    },
    {
      id: "bs-tables",
      title: "Bootstrap Tables",
      content: [{ id: 9, lessonList: bootstrapContent[8].bsTables }],
      video: "https://www.youtube.com/embed/SSJ4Fo9k6XI",
      pdf: "/pdfs/bs_tables.pdf",
    },
    {
      id: "bs-carousel",
      title: "Bootstrap Carousel",
      content: [{ id: 10, lessonList: bootstrapContent[9].bsCarousel }],
      video: "https://www.youtube.com/embed/9cKsq14Kfsw",
      pdf: "/pdfs/bs_carousel.pdf",
    },
    {
      id: "bs-modal",
      title: "Bootstrap Modal",
      content: [{ id: 11, lessonList: bootstrapContent[10].bsModal }],
      video: "https://www.youtube.com/embed/MEu7biQa6lU",
      pdf: "/pdfs/bs_modal.pdf",
    },
    {
      id: "bs-collapse",
      title: "Bootstrap Collapse & Accordion",
      content: [{ id: 12, lessonList: bootstrapContent[11].bsCollapse }],
      video: "https://www.youtube.com/embed/fNcJuPIZ2WE",
      pdf: "/pdfs/bs_collapse.pdf",
    },
    {
      id: "bs-icons",
      title: "Bootstrap Icons",
      content: [{ id: 13, lessonList: bootstrapContent[12].bsIcons }],
      video: "https://www.youtube.com/embed/N6BghzuFLIg",
      pdf: "/pdfs/bs_icons.pdf",
    },
    {
      id: "bs-utilities",
      title: "Bootstrap Utilities",
      content: [{ id: 14, lessonList: bootstrapContent[13].bsUtilities }],
      video: "https://www.youtube.com/embed/M5Y9YmfA0cM",
      pdf: "/pdfs/bs_utilities.pdf",
    },
    {
      id: "bs-project",
      title: "Bootstrap Mini Project",
      content: [{ id: 15, lessonList: bootstrapContent[14].bsProject }],
      video: "https://www.youtube.com/embed/-qfEOE4vtxE",
      pdf: "/pdfs/bs_project.pdf",
    },
  ],
 },
 

  // Course 4

  {
  id: 4,
  title: "JavaScript Fundamentals",
  description: "From zero to confident with modern JavaScript.",
  instructor: "Chris Taylor",
  image: js,
  lessons: [
    { id: "js-intro",            title: "Introduction to JavaScript",           content: [{ id: 1,  lessonList: jsContent[0].jsIntro }],              video: "https://www.youtube.com/embed/W6NZfCO5SIk", pdf: "/pdfs/js_intro.pdf" },
    { id: "js-variables-types",  title: "Variables & Types",                    content: [{ id: 2,  lessonList: jsContent[1].jsVariablesTypes }],     video: "https://www.youtube.com/embed/hdI2bqOjy3c", pdf: "/pdfs/js_variables_types.pdf" },
    { id: "js-operators",        title: "Operators & Expressions",              content: [{ id: 3,  lessonList: jsContent[2].jsOperators }],          video: "https://www.youtube.com/embed/9emXNzqCKyg", pdf: "/pdfs/js_operators.pdf" },
    { id: "js-control-flow",     title: "Control Flow",                         content: [{ id: 4,  lessonList: jsContent[3].jsControlFlow }],        video: "https://www.youtube.com/embed/2ZphE5HcQPQ", pdf: "/pdfs/js_control_flow.pdf" },
    { id: "js-functions-scope",  title: "Functions, Scope & this",              content: [{ id: 5,  lessonList: jsContent[4].jsFunctionsScopeThis }], video: "https://www.youtube.com/embed/N8ap4k_1QEQ", pdf: "/pdfs/js_functions_scope.pdf" },
    { id: "js-arrays",           title: "Arrays & Methods",                     content: [{ id: 6,  lessonList: jsContent[5].jsArrays }],             video: "https://www.youtube.com/embed/R8rmfD9Y5-c", pdf: "/pdfs/js_arrays.pdf" },
    { id: "js-objects",          title: "Objects & Prototypes",                 content: [{ id: 7,  lessonList: jsContent[6].jsObjectsPrototypes }],  video: "https://www.youtube.com/embed/PMfcsYzj-9M", pdf: "/pdfs/js_objects.pdf" },
    { id: "js-classes",          title: "Classes (ES6) & OOP",                  content: [{ id: 8,  lessonList: jsContent[7].jsClasses }],            video: "https://www.youtube.com/embed/2ZphE5HcQPQ?t=450", pdf: "/pdfs/js_classes.pdf" },
    { id: "js-dom",              title: "DOM Manipulation",                     content: [{ id: 9,  lessonList: jsContent[8].jsDOM }],                video: "https://www.youtube.com/embed/0ik6X4DJKCc", pdf: "/pdfs/js_dom.pdf" },
    { id: "js-events",           title: "Events & Delegation",                  content: [{ id: 10, lessonList: jsContent[9].jsEventsDelegation }],   video: "https://www.youtube.com/embed/EaRrmOtPYTM", pdf: "/pdfs/js_events.pdf" },
    { id: "js-async",            title: "Async JS: Timers, Promises, Async/Await", content: [{ id: 11, lessonList: jsContent[10].jsAsync }],         video: "https://www.youtube.com/embed/_8gHHBlbziw", pdf: "/pdfs/js_async.pdf" },
    { id: "js-fetch",            title: "Fetch API & HTTP",                     content: [{ id: 12, lessonList: jsContent[11].jsFetchHTTP }],         video: "https://www.youtube.com/embed/Oive66jrwBs", pdf: "/pdfs/js_fetch.pdf" },
    { id: "js-errors",           title: "Errors, Debugging & Defensive Code",   content: [{ id: 13, lessonList: jsContent[12].jsErrorDebug }],        video: "https://www.youtube.com/embed/2NUQK8E7YVA", pdf: "/pdfs/js_errors_debug.pdf" },
    { id: "js-modules",          title: "Modules & Build Tools",                content: [{ id: 14, lessonList: jsContent[13].jsModules }],           video: "https://www.youtube.com/embed/cRHQNNcYf6s", pdf: "/pdfs/js_modules.pdf" },
    { id: "js-storage",  title: "Storage",                              content: [{ id: 16, lessonList: jsContent[14].jsStorageJSONDate }],       video: "https://www.youtube.com/embed/Ttf3CEsEwMQ", pdf: "/pdfs/js_mini_project.pdf" },
    { id: "js-mini-project",  title: " Mini Project",                        content: [{ id: 17, lessonList: jsContent[15].jsMiniProject }],       video: "https://www.youtube.com/embed/Ttf3CEsEwMQ", pdf: "/pdfs/js_mini_project.pdf" }
  ],
  } ,

  // course 5 

{
  id: 5,
  title: "Node.js Fundamentals",
  description: " Node.js — from basics to production-ready patterns.",
  instructor: "Alex Morgan",
  image: node,
  lessons: [
    { id: "node-intro", title: "Introduction to Node.js", content: [{ id:1, lessonList: nodeContent[0].nodeIntro }], video: "https://www.youtube.com/embed/TlB_eWDSMt4", pdf: "/pdfs/node_intro.pdf" },
    { id: "node-setup", title: "Setup, nvm & npm", content: [{ id:2, lessonList: nodeContent[1].nodeSetup }], video: "https://www.youtube.com/embed/1w-oQ-i1XB8", pdf: "/pdfs/node_setup.pdf" },
    { id: "node-modules", title: "Modules (CJS & ESM)", content: [{ id:3, lessonList: nodeContent[2].nodeModules }], video: "https://www.youtube.com/embed/8aGhZQkoFbQ", pdf: "/pdfs/node_modules.pdf" },
    { id: "node-core", title: "Core Modules (fs, path, os)", content: [{ id:4, lessonList: nodeContent[3].nodeCoreModules }], video: "https://www.youtube.com/embed/0ZJgIjIuY7U", pdf: "/pdfs/node_core.pdf" },
    { id: "node-eventloop", title: "Event Loop & Concurrency", content: [{ id:5, lessonList: nodeContent[4].nodeEventLoop }], video: "https://www.youtube.com/embed/8aGhZQkoFbQ?t=60", pdf: "/pdfs/node_eventloop.pdf" },
    { id: "node-async", title: "Async Patterns", content: [{ id:6, lessonList: nodeContent[5].nodeAsyncPatterns }], video: "https://www.youtube.com/embed/PoRJizFvM7s", pdf: "/pdfs/node_async.pdf" },
    { id: "node-streams", title: "Streams & Buffers", content: [{ id:7, lessonList: nodeContent[6].nodeStreamsBuffers }], video: "https://www.youtube.com/embed/3q3tj3b9uNc", pdf: "/pdfs/node_streams.pdf" },
    { id: "node-http", title: "HTTP Module", content: [{ id:8, lessonList: nodeContent[7].nodeHttp }], video: "https://www.youtube.com/embed/2eebptXfEVw", pdf: "/pdfs/node_http.pdf" },
    { id: "node-express", title: "Express Basics", content: [{ id:9, lessonList: nodeContent[8].nodeExpressBasics }], video: "https://www.youtube.com/embed/L72fhGm1tfE", pdf: "/pdfs/node_express.pdf" },
    { id: "node-rest", title: "REST API with Express", content: [{ id:10, lessonList: nodeContent[9].nodeRestApi }], video: "https://www.youtube.com/embed/pKd0Rpw7O48", pdf: "/pdfs/node_rest.pdf" },
    { id: "node-db", title: "Databases (MongoDB & SQL)", content: [{ id:11, lessonList: nodeContent[10].nodeDB }], video: "https://www.youtube.com/embed/6Q7kYQw1oH4", pdf: "/pdfs/node_db.pdf" },
    { id: "node-auth", title: "Authentication & JWT", content: [{ id:12, lessonList: nodeContent[11].nodeAuth }], video: "https://www.youtube.com/embed/2jqok-WgelI", pdf: "/pdfs/node_auth.pdf" },
    { id: "node-file", title: "File Uploads & Static", content: [{ id:13, lessonList: nodeContent[12].nodeFileUploadStatic }], video: "https://www.youtube.com/embed/TfV-sI3y9m4", pdf: "/pdfs/node_file.pdf" },
    { id: "node-realtime", title: "WebSockets (Socket.IO)", content: [{ id:14, lessonList: nodeContent[13].nodeRealtime }], video: "https://www.youtube.com/embed/vQjiN8Qgs3c", pdf: "/pdfs/node_realtime.pdf" },
    { id: "node-error-logging", title: "Error Handling & Logging", content: [{ id:15, lessonList: nodeContent[14].nodeErrorLogging }], video: "https://www.youtube.com/embed/0ZJgIjIuY7U?t=100", pdf: "/pdfs/node_error_logging.pdf" },
    { id: "node-testing", title: "Testing (Jest & Supertest)", content: [{ id:16, lessonList: nodeContent[15].nodeTesting }], video: "https://www.youtube.com/embed/gnsO8-xJ8rs", pdf: "/pdfs/node_testing.pdf" },
    { id: "node-deploy", title: "Deployment & Docker", content: [{ id:17, lessonList: nodeContent[16].nodeDeployment }], video: "https://www.youtube.com/embed/71wSzpLyW9k", pdf: "/pdfs/node_deploy.pdf" },
    { id: "node-security", title: "Security Best Practices", content: [{ id:18, lessonList: nodeContent[17].nodeSecurity }], video: "https://www.youtube.com/embed/ZZCHQjv0G4k", pdf: "/pdfs/node_security.pdf" },
    { id: "node-performance", title: "Performance & Scaling", content: [{ id:19, lessonList: nodeContent[18].nodePerformance }], video: "https://www.youtube.com/embed/0ZJgIjIuY7U?t=200", pdf: "/pdfs/node_performance.pdf" },
    { id: "node-advanced", title: "Advanced Patterns & Workers", content: [{ id:20, lessonList: nodeContent[19].nodeAdvanced }], video: "https://www.youtube.com/embed/hY6H7i6qQH8", pdf: "/pdfs/node_advanced.pdf" }
  ]
}

];
