export const jsContent = [
  {
    jsIntro: `
# Introduction to JavaScript

JavaScript (JS) is the **programming language of the web**. It runs in the browser, lets you **manipulate the DOM**, handle **events**, talk to **servers**, and build full apps (front-end & back-end with Node.js).

## What you'll learn here
- Where JS runs and how it’s loaded
- Console basics & strict mode
- The *runtime model* (call stack, heap, event loop – high level)

## Getting JavaScript into a page

\`\`\`html
<!-- External script (recommended) -->
<script src="/assets/app.js" defer></script>

<!-- Inline script (okay for demos) -->
<script>
  'use strict';
  console.log('Hello JS');
</script>
\`\`\`

- **defer** waits for HTML to parse, then runs the script.
- Put scripts at the end of \`<body>\` or use **defer** to avoid blocking rendering.

## Console & strict mode

\`\`\`js
'use strict';               // catch silent errors
console.log('Log');         // info
console.warn('Warning');    // warning
console.error('Error');     // error
\`\`\`

> **Tip:** Open DevTools → Console to see logs and try snippets.
`
  },
  {
    jsVariablesTypes: `
# Variables & Types

JS has **dynamic typing** and three main ways to declare variables:

- \`const\`: constant binding (preferred)
- \`let\`: re-assignable, block-scoped
- \`var\`: function-scoped (legacy; avoid)

\`\`\`js
const PI = 3.14159;
let counter = 0;
var legacy = 'avoid me';
\`\`\`

## Primitive Types
- **string**, **number**, **boolean**, **null**, **undefined**, **bigint**, **symbol**

\`\`\`js
const s = 'hi';           // string
const n = 42;             // number (int/float same type)
const ok = true;          // boolean
const notSet = undefined; // undefined
const empty = null;       // null (intentional empty)
const big = 123n;         // bigint
const uniq = Symbol();    // symbol
\`\`\`

## Type checks & pitfalls

\`\`\`js
typeof null;      // "object"  <-- historic bug, know it!
Array.isArray([]) // true
\`\`\`

> **Best practice:** default to \`const\`, use \`let\` when you must reassign, **never** \`var\`.
`
  },
  {
    jsOperators: `
# Operators & Expressions

## Arithmetic / Assignment
\`\`\`js
let x = 10;
x += 2;        // 12
x **= 2;       // 144
\`\`\`

## Comparison (== vs ===)
\`\`\`js
0 == false   // true  (coercion)
0 === false  // false (no coercion)  ✅ preferred
\`\`\`

## Logical
\`\`\`js
'a' && 'b'     // "b"   (returns last truthy)
''  || 'default' // "default"
\`\`\`

## Nullish coalescing (when value is null/undefined only)
\`\`\`js
const name = userInput ?? 'Guest';
\`\`\`

## Optional chaining (safe property access)
\`\`\`js
const city = user?.address?.city ?? 'Unknown';
\`\`\`

> **Tip:** Use \`===\` and \`!==\` to avoid coercion surprises.
`
  },
  {
    jsControlFlow: `
# Control Flow

## if / else / switch
\`\`\`js
if (score >= 90) {
  grade = 'A';
} else if (score >= 80) {
  grade = 'B';
} else {
  grade = 'C';
}

switch (day) {
  case 'Mon':
  case 'Tue':
    console.log('Weekday');
    break;
  default:
    console.log('Other');
}
\`\`\`

## Loops
\`\`\`js
for (let i = 0; i < 3; i++) console.log(i);

let j = 0;
while (j < 3) j++;

for (const ch of 'JS') console.log(ch); // iterable
\`\`\`

## Ternary & early returns
\`\`\`js
const label = age >= 18 ? 'Adult' : 'Minor';

function priceOrFree(p) {
  if (p <= 0) return 'Free'; // early exit
  return '$' + p.toFixed(2);
}
\`\`\`
`
  },
  {
    jsFunctionsScopeThis: `
# Functions, Scope & \`this\`

## Function forms
\`\`\`js
function add(a, b) { return a + b }        // declaration (hoisted)
const mul = function(a, b) { return a * b } // expression
const sub = (a, b) => a - b;                // arrow function
\`\`\`

## Scope
- **Function scope** (legacy with \`var\`)
- **Block scope** with \`let/const\`
- **Lexical scope**: inner functions see outer variables

\`\`\`js
let x = 1;
function outer() {
  let y = 2;
  function inner() {
    console.log(x, y); // 1, 2 (lexical)
  }
  inner();
}
outer();
\`\`\`

## \`this\` rules (in browsers)
- Function call → \`this\` is \`undefined\` in strict mode (or global in sloppy)
- Method call → \`this\` is the object before dot
- Arrow functions → **no own \`this\`** (inherits lexical \`this\`)

\`\`\`js
const obj = {
  val: 42,
  regular() { console.log(this.val) }, // 42
  arrow: () => console.log(this)       // window/undefined (lexical)
};
obj.regular();
obj.arrow();
\`\`\`

## bind / call / apply
\`\`\`js
function greet(g) { console.log(g, this.name) }
const user = { name: 'Ava' };
greet.call(user, 'Hi');   // Hi Ava
const bound = greet.bind(user, 'Hello');
bound();                  // Hello Ava
\`\`\`
`
  },
  {
    jsArrays: `
# Arrays & Essential Methods

\`\`\`js
const nums = [1, 2, 3];
nums.push(4);       // [1,2,3,4]
nums.includes(2);   // true
\`\`\`

## Non-mutating transforms
\`\`\`js
const doubled = nums.map(n => n * 2);
const evens   = nums.filter(n => n % 2 === 0);
const sum     = nums.reduce((acc, n) => acc + n, 0);
\`\`\`

## Finding & slicing
\`\`\`js
nums.find(n => n > 2);   // 3
nums.slice(1, 3);        // [2,3] non-mutating
nums.splice(1, 2);       // mutates!
\`\`\`

## Spread & rest
\`\`\`js
const arr = [0, ...nums, 5]; // spread
function avg(...values) {     // rest
  return values.reduce((a,b)=>a+b,0)/values.length;
}
\`\`\`

> **Tip:** prefer **immutable** patterns (map/filter/reduce) in React code.
`
  },
  {
    jsObjectsPrototypes: `
# Objects, Prototypes & the Prototype Chain

## Literals & property access
\`\`\`js
const user = { name: 'Ada', age: 31 };
user.role = 'admin';
console.log(user['name']); // Ada
\`\`\`

## Destructuring
\`\`\`js
const { name, age } = user;
const { role = 'guest' } = user; // default
\`\`\`

## Prototypes (inheritance)
\`\`\`js
const animal = { speak() { console.log('...') } };
const dog = Object.create(animal);
dog.bark = () => console.log('woof');
dog.speak(); // ...
dog.bark();  // woof
\`\`\`

- Objects delegate to their **prototype** when a property is missing.
- \`Object.getPrototypeOf(obj)\` inspects the chain.

## Object utilities
\`\`\`js
Object.keys(user);              // ['name','age','role']
Object.values(user);            // [...]
Object.entries(user);           // [['name','Ada'], ...]
const copy = { ...user };       // shallow copy
\`\`\`
`
  },
  {
    jsClasses: `
# Classes (ES6) & OOP

Classes are **syntax sugar** over prototypes.

\`\`\`js
class Person {
  static species = 'Homo sapiens'; // static field
  #secret = 123;                   // private field

  constructor(name) { this.name = name }
  greet() { console.log('Hi, I am ' + this.name) }
}

class Student extends Person {
  constructor(name, major) {
    super(name);
    this.major = major;
  }
}

const s = new Student('Mila', 'CS');
s.greet();               // Hi, I am Mila
console.log(Person.species);
\`\`\`

> **Note:** Private fields (\`#secret\`) are inaccessible outside the class.
`
  },
  {
    jsDOM: `
# DOM (Document Object Model)

The DOM is a **tree** representing your HTML. JS manipulates it to update UI.

## Selecting & editing
\`\`\`js
const title = document.querySelector('h1');
title.textContent = 'Hello';
title.classList.add('highlight');
\`\`\`

## Creating & inserting
\`\`\`js
const li = document.createElement('li');
li.textContent = 'New item';
document.querySelector('ul').appendChild(li);
\`\`\`

## Reading attributes & styles
\`\`\`js
const img = document.querySelector('img');
img.getAttribute('alt');
img.setAttribute('alt', 'Cover');
img.style.border = '2px solid #333';
\`\`\`

> **Tip:** Batch DOM writes/reads to avoid layout thrashing.
`
  },
  {
    jsEventsDelegation: `
# Events & Event Delegation

## Listening to events
\`\`\`js
const btn = document.getElementById('save');
btn.addEventListener('click', e => {
  console.log('clicked', e.target);
});
\`\`\`

## Event delegation (performant for lists)
Attach one handler on a **parent** and check the target.

\`\`\`js
document.querySelector('ul').addEventListener('click', (e) => {
  if (e.target.matches('li .remove')) {
    const li = e.target.closest('li');
    li.remove();
  }
});
\`\`\`

## Prevent default / stop propagation
\`\`\`js
form.addEventListener('submit', e => {
  e.preventDefault();
  // handle submit via JS
});
\`\`\`

> **Why delegation?** New items added later still work without re-binding handlers.
`
  },
  {
    jsAsync: `
# Asynchronous JS: Timers, Callbacks, Promises, Async/Await

JS is single-threaded; async APIs avoid blocking the UI.

## Timers
\`\`\`js
const id = setTimeout(() => console.log('later'), 500);
clearTimeout(id);
\`\`\`

## From callback to promise
\`\`\`js
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
wait(300).then(() => console.log('done'));
\`\`\`

## async / await (syntactic sugar)
\`\`\`js
async function run() {
  await wait(300);
  return 42;
}
run().then(console.log);
\`\`\`

## Error handling
\`\`\`js
async function load() {
  try {
    const n = await run();
    console.log(n);
  } catch (err) {
    console.error('Oops', err);
  }
}
\`\`\`

> **Tip:** Always wrap \`await\` calls that might fail in \`try/catch\`.
`
  },
  {
    jsFetchHTTP: `
# Fetch API & HTTP

Use **fetch** to call APIs.

## GET
\`\`\`js
async function getUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  if (!res.ok) throw new Error('Network error');
  return res.json();
}
\`\`\`

## POST (JSON)
\`\`\`js
async function createUser(user) {
  const res = await fetch('/api/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  });
  return res.json();
}
\`\`\`

## Abort / timeout
\`\`\`js
const ctrl = new AbortController();
setTimeout(() => ctrl.abort(), 3000);
fetch('/slow', { signal: ctrl.signal }).catch(console.error);
\`\`\`

> **Heads-up:** CORS errors happen when the server disallows your origin.
`
  },
  {
    jsErrorDebug: `
# Errors, Debugging & Defensive Code

## Throwing & catching
\`\`\`js
function divide(a, b) {
  if (b === 0) throw new Error('Divide by zero');
  return a / b;
}
try {
  divide(3, 0);
} catch (e) {
  console.error(e.message);
}
\`\`\`

## finally & cleanup
\`\`\`js
try { /* ... */ }
catch (e) { /* ... */ }
finally { /* release resources */ }
\`\`\`

## Debugging
- \`debugger;\` to pause execution in DevTools
- Breakpoints, step into/over, watch expressions

## Defensive patterns
\`\`\`js
const safeJSON = (s) => {
  try { return JSON.parse(s) } catch { return null }
};
\`\`\`

> **Tip:** Fail **loud** during development, **gracefully** in production.
`
  },
  {
    jsModules: `
# Modules (import/export) & Build Tools

## ES Modules
\`\`\`js
// math.js
export const add = (a,b) => a+b;
export default function mul(a,b){ return a*b }

// app.js
import mul, { add } from './math.js';
console.log(add(2,3), mul(2,3));
\`\`\`

In HTML:
\`\`\`html
<script type="module" src="/app.js"></script>
\`\`\`

## Why bundlers?
- Combine many modules
- Transpile & polyfill for older browsers
- Optimize assets

Tools: **Vite**, **Webpack**, **Parcel**, **esbuild** (pick one).
`
  },
  {
    jsStorageJSONDate: `
# Web Storage, JSON, Dates & Intl

## localStorage / sessionStorage
\`\`\`js
localStorage.setItem('theme', 'dark');
const theme = localStorage.getItem('theme'); // 'dark'
localStorage.removeItem('theme');
\`\`\`

## Persisting objects (JSON)
\`\`\`js
const settings = { lang: 'en', compact: true };
localStorage.setItem('settings', JSON.stringify(settings));
const saved = JSON.parse(localStorage.getItem('settings') || '{}');
\`\`\`

## Dates & Intl
\`\`\`js
const d = new Date('2025-08-27T12:00:00Z');
const nice = new Intl.DateTimeFormat('en-IN', { dateStyle: 'medium', timeStyle: 'short' }).format(d);
const money = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(1234567.89);
\`\`\`
`
  },
  {
    jsMiniProject: `
# Mini Project – Todo App (DOM + Storage + Events)

Build a **no-framework** Todo app to practice DOM, events, and storage.

## Markup
\`\`\`html
<div class="todo">
  <form id="form">
    <input id="input" placeholder="Add a task" />
    <button>Add</button>
  </form>
  <ul id="list"></ul>
</div>
\`\`\`

## Script
\`\`\`js
const form = document.getElementById('form');
const input = document.getElementById('input');
const list  = document.getElementById('list');

const TODOS_KEY = 'todos.v1';
let todos = JSON.parse(localStorage.getItem(TODOS_KEY) || '[]');
render();

form.addEventListener('submit', e => {
  e.preventDefault();
  const text = input.value.trim();
  if (!text) return;
  todos.push({ id: Date.now(), text, done: false });
  input.value = '';
  save(); render();
});

list.addEventListener('click', e => {
  const id = Number(e.target.closest('li')?.dataset.id);
  if (e.target.matches('input[type="checkbox"]')) {
    todos = todos.map(t => t.id === id ? { ...t, done: e.target.checked } : t);
  }
  if (e.target.matches('.remove')) {
    todos = todos.filter(t => t.id !== id);
  }
  save(); render();
});

function render() {
  list.innerHTML = todos.map(t => \`
    <li data-id="\${t.id}">
      <label>
        <input type="checkbox" \${t.done ? 'checked':''}/>
        <span>\${t.text}</span>
      </label>
      <button class="remove">✕</button>
    </li>\`).join('');
}

function save() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}
\`\`\`

**Stretch goals**
- Filter: All / Active / Completed
- Persist theme in \`localStorage\`
- Replace \`innerHTML\` with \`document.createElement\` for safer DOM
`
  }
];
