// nodeContent.js
export const nodeContent = [
  {
    nodeIntro: `
# 1. Introduction to Node.js

**Node.js** is a JavaScript runtime built on Chrome's V8 engine that lets you run JS outside the browser — on servers, CLIs, IoT devices, etc.

### What Node gives you
- Non-blocking, event-driven I/O (good for I/O-heavy apps).
- Single language (JS) across client + server.
- Huge ecosystem (npm).

### Hello World
\`\`\`bash
# create file: index.js
node index.js
\`\`\`

\`\`\`js
// index.js
console.log('Hello from Node!');
\`\`\`

### Common use cases
- REST APIs / Microservices  
- Real-time apps (chat, notifications)  
- CLIs & build tools  
- Server-side rendering, background jobs

**Tip:** Node is excellent when you need to handle many concurrent connections but not heavy CPU-bound processing.
`
  },
  {
    nodeSetup: `
# 2. Setup, nvm, npm & package.json

### Install Node
Use the installer or **nvm** (recommended) to manage versions.

\`\`\`bash
# install nvm (mac/linux)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# install node
nvm install --lts
nvm use --lts
\`\`\`

### package.json
\`\`\bash
npm init -y
\`\`\`

Important fields:
- \`name\`, \`version\`, \`main\`, \`scripts\` (start, dev), \`dependencies\`, \`devDependencies\`.

### npm vs yarn vs pnpm
- npm is default and fine.
- yarn/pnpm are alternatives (pnpm saves disk space).

### Useful scripts
\`\`\json
"scripts": {
  "start": "node index.js",
  "dev": "nodemon index.js",
  "test": "jest"
}
\`\`\`

**Tip:** Use \`nodemon\` in dev to restart on changes.
`
  },
  {
    nodeModules: `
# 3. Modules: CommonJS & ES Modules

Node historically used **CommonJS** (\`require/module.exports\`), now supports **ESM** (import/export).

### CommonJS
\`\`\`js
// math.js
exports.add = (a,b) => a + b;

// app.js
const { add } = require('./math');
console.log(add(2,3));
\`\`\`

### ES Modules (modern)
In package.json set \`"type": "module"\` or use .mjs files.
\`\`\`js
// math.mjs
export const add = (a,b) => a + b;

// app.mjs
import { add } from './math.mjs';
\`\`\`

### interop
- You can \`import('cjs-module')\` or use \`createRequire\` if needed.

**Best practice:** Prefer ES Modules for new projects unless you have legacy tooling that requires CommonJS.
`
  },
  {
    nodeCoreModules: `
# 4. Useful Core Modules (fs, path, os, events, util, process)

### fs — filesystem (sync & async)
\`\`\`js
import fs from 'fs/promises';
// or const fs = require('fs').promises;

const text = await fs.readFile('./notes.txt', 'utf8');
await fs.writeFile('./out.txt', 'Hello');
\`\`\`

### path — safe path building
\`\`\`js
import path from 'path';
const full = path.join(__dirname, 'data', 'file.txt');
\`\`\`

### os — system info
\`\`\`js
import os from 'os';
console.log(os.cpus(), os.totalmem());
\`\`\`

### events — EventEmitter
\`\`\`js
import { EventEmitter } from 'events';
const ev = new EventEmitter();
ev.on('tick', (n)=> console.log('tick', n));
ev.emit('tick', 1);
\`\`\`

### util.promisify
\`\`\`js
import { promisify } from 'util';
const stat = promisify(require('fs').stat);
\`\`\`

### process & global
- \`process.env\` for env vars  
- \`process.argv\` for CLI args  
- \`process.exit(code)\`

**Tip:** Use \`fs/promises\` or \`util.promisify\` instead of callbacks.
`
  },
  {
    nodeEventLoop: `
# 5. Event Loop & Concurrency Model

Node uses a single-threaded event loop with phases (timers, I/O callbacks, idle, poll, check, close). Microtasks (Promises) run between phases.

### Example ordering
\`\`\`js
console.log('start');
setTimeout(()=> console.log('timeout'), 0);
Promise.resolve().then(()=> console.log('promise'));
console.log('end');
\`\`\`
Output:
\`\`\`
start
end
promise
timeout
\`\`\`

### Practical implications
- CPU-heavy work blocks the loop → avoid long synchronous tasks.
- Use worker threads for CPU-bound tasks.

**Tip:** Use asynchronous APIs and keep handlers short.
`
  },
  {
    nodeAsyncPatterns: `
# 6. Async Patterns: Callbacks → Promises → Async/Await

### Callback style (older)
\`\`\`js
fs.readFile('file.txt', (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});
\`\`\`

### Promises
\`\`\`js
fs.promises.readFile('file.txt', 'utf8').then(console.log).catch(console.error);
\`\`\`

### async / await (cleanest)
\`\`\`js
async function run() {
  try {
    const data = await fs.promises.readFile('file.txt', 'utf8');
    console.log(data);
  } catch (err) { console.error(err) }
}
\`\`\`

### util.promisify
\`\`\`js
import { promisify } from 'util';
const readFileAsync = promisify(require('fs').readFile);
\`\`\`

**Tip:** Prefer \`async/await\` for readability; always handle errors.
`
  },
  {
    nodeStreamsBuffers: `
# 7. Streams & Buffers

Streams allow processing data piece-by-piece (efficient for large files / network).

### Types
- Readable (fs.createReadStream)
- Writable (fs.createWriteStream)
- Duplex (sockets)
- Transform (compression)

### Example: pipe a file to response
\`\`\`js
import http from 'http';
import fs from 'fs';

http.createServer((req, res) => {
  const stream = fs.createReadStream('./bigfile.mp4');
  stream.pipe(res);
}).listen(3000);
\`\`\`

### Buffers
Raw binary data container:
\`\`\`js
const buf = Buffer.from('hello');
console.log(buf.length);
\`\`\`

**Tip:** Streams + pipe = low memory usage and faster I/O.
`
  },
  {
    nodeHttp: `
# 8. HTTP module — build a simple server

You can create a server without frameworks.

\`\`\`js
import http from 'http';

const server = http.createServer((req, res) => {
  if (req.url === '/' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello from Node HTTP');
  } else {
    res.writeHead(404); res.end('Not Found');
  }
});

server.listen(3000, ()=> console.log('Server on 3000'));
\`\`\`

**When to use raw http:** minimal microservices or learning; for apps use Express/Koa for productivity.
`
  },
  {
    nodeExpressBasics: `
# 9. Express.js — basics, routing & middleware

Express is the de-facto web framework for Node.

### Install
\`\`\`bash
npm install express
\`\`\`

### Basic app
\`\`\`js
import express from 'express';
const app = express();

app.use(express.json()); // body parsing

app.get('/', (req, res) => res.send('Hello Express'));

app.listen(3000, ()=> console.log('Express on 3000'));
\`\`\`

### Middleware
- App-level, route-level, error-handling middleware.
\`\`\`js
app.use((req,res,next)=> { console.log(req.method, req.path); next(); });
\`\`\`

**Tip:** Keep middleware small and composable.
`
  },
  {
    nodeRestApi: `
# 10. Building REST APIs with Express

### REST CRUD example (users)
\`\`\`js
// routes/users.js
import express from 'express';
const router = express.Router();

let users = [];

router.get('/', (req,res)=> res.json(users));
router.post('/', (req,res)=> {
  const user = { id: Date.now(), ...req.body };
  users.push(user);
  res.status(201).json(user);
});
router.get('/:id', (req,res)=> res.json(users.find(u=> u.id == req.params.id) || {}));
export default router;

// app.js
app.use('/api/users', usersRouter);
\`\`\`

### Best practices
- Use proper HTTP status codes (200, 201, 400, 404, 500).
- Validate inputs (Joi, express-validator).
- Keep routes thin; move business logic to services.

**Tip:** Version your APIs (/v1/users) and document with OpenAPI/Swagger.
`
  },
  {
    nodeDB: `
# 11. Databases: MongoDB (Mongoose) & SQL overview

### MongoDB + Mongoose
\`\`\bash
npm install mongoose
\`\`\`

\`\`\`js
import mongoose from 'mongoose';
await mongoose.connect(process.env.MONGO_URI);

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);
const u = await User.create({ name: 'Ada', email: 'ada@example.com' });
\`\`\`

### SQL (Postgres/MySQL)
- Use \`pg\`, \`mysql2\`, or ORM (Sequelize, TypeORM).
- SQL is good for complex relational queries and transactions.

**Tip:** Use connection pooling and parameterized queries to avoid SQL injection.
`
  },
  {
    nodeAuth: `
# 12. Authentication & Authorization

### Password hashing with bcrypt
\`\`\`js
import bcrypt from 'bcrypt';
const hash = await bcrypt.hash('plain', 10);
const ok = await bcrypt.compare('plain', hash);
\`\`\`

### JWT (stateless auth)
\`\`\`js
import jwt from 'jsonwebtoken';
const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
const payload = jwt.verify(token, process.env.JWT_SECRET);
\`\`\`

### Sessions (stateful)
Use \`express-session\` with secure cookie options (httpOnly, secure, sameSite).

**Security tips**
- Store JWT secret safely (env).  
- Set cookie flags (httpOnly, secure).  
- Use refresh tokens for long sessions.
`
  },
  {
    nodeFileUploadStatic: `
# 13. File Uploads & Static Files

### Serve static assets
\`\`\`js
app.use('/static', express.static('public'));
\`\`\`

### File uploads with multer
\`\`\`bash
npm install multer
\`\`\`

\`\`\`js
import multer from 'multer';
const upload = multer({ dest: 'uploads/' });

app.post('/upload', upload.single('file'), (req, res) => {
  res.json({ file: req.file });
});
\`\`\`

**Security**
- Validate file types and sizes.
- Store files outside web root or use cloud storage (S3).
`
  },
  {
    nodeRealtime: `
# 14. WebSockets & Real-time with Socket.IO

Socket.IO provides real-time bi-directional communication.

### Install
\`\`\`bash
npm install socket.io
\`\`\`

### Basic server
\`\`\`js
import { createServer } from 'http';
import { Server } from 'socket.io';

const httpServer = createServer(app);
const io = new Server(httpServer);

io.on('connection', (socket) => {
  console.log('client connected', socket.id);
  socket.on('chat', msg => io.emit('chat', msg));
});
\`\`\`

**Use cases:** chat, notifications, live updates, collaborative apps.
`
  },
  {
    nodeErrorLogging: `
# 15. Error Handling & Logging

### Express error middleware
\`\`\`js
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});
\`\`\`

### Logging (morgan + winston)
\`\`\`bash
npm install morgan winston
\`\`\`
\`\`\`js
import morgan from 'morgan';
app.use(morgan('combined')); // http logs

import winston from 'winston';
const logger = winston.createLogger({ transports: [new winston.transports.Console()] });
logger.info('App started');
\`\`\`

**Best practice:** separate logs by level, ship to log aggregator in production (ELK/Datadog).
`
  },
  {
    nodeTesting: `
# 16. Testing: Jest, Mocha, Supertest

### Unit tests (Jest)
\`\`\`bash
npm install --save-dev jest
\`\`\`
\`\`\`js
// sum.js
export const sum = (a,b)=>a+b;

// sum.test.js
import { sum } from './sum';
test('adds', ()=> expect(sum(1,2)).toBe(3));
\`\`\`

### Integration tests (Supertest)
\`\`\`bash
npm install --save-dev supertest
\`\`\`
\`\`\`js
import request from 'supertest';
import app from './app';
test('GET /api/users', async () => {
  const res = await request(app).get('/api/users');
  expect(res.status).toBe(200);
});
\`\`\`

**Tip:** Run tests in CI (GitHub Actions) and isolate DB (use test DB).
`
  },
  {
    nodeDeployment: `
# 17. Deployment, Process Management & Docker

### Process manager (PM2)
\`\`\`bash
npm install -g pm2
pm2 start index.js --name my-app
pm2 monit
\`\`\`

### Docker (simple Dockerfile)
\`\`\`dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --production
COPY . .
CMD ["node","index.js"]
\`\`\`

### Cloud providers
- Heroku, Render, Vercel (serverless), AWS (EC2, ECS), DigitalOcean.
- Use env vars for secrets.

**Tip:** health checks, graceful shutdowns, and logs are essential in production.
`
  },
  {
    nodeSecurity: `
# 18. Security Best Practices

- Use \`helmet\` to secure HTTP headers.
\`\`\`bash
npm install helmet
app.use(helmet());
\`\`\`

- Rate limiting to avoid abuse (express-rate-limit).
- Validate and sanitize input (Joi, express-validator).
- Avoid eval or insecure deserialization.
- Keep dependencies updated (npm audit).
- Use HTTPS and secure cookies.

**Tip:** run security scans and rotate secrets regularly.
`
  },
  {
    nodePerformance: `
# 19. Performance & Scaling

### Profiling & monitoring
- Use \`clinic\`, Node inspector (\`--inspect\`), and APM (NewRelic, Datadog).

### Clustering
\`\`\`js
import cluster from 'cluster';
import os from 'os';
if (cluster.isPrimary) {
  for (let i=0;i<os.cpus().length;i++) cluster.fork();
} else {
  import('./index.js'); // worker
}
\`\`\`

### Caching & queues
- Use Redis for caching and pub/sub.
- Use job queues (BullMQ) for background processing.

**Tip:** scale horizontally behind a load balancer; avoid global in-memory state.
`
  },
  {
    nodeAdvanced: `
# 20. Advanced Topics & Patterns

### Worker threads (for CPU work)
\`\`\`js
import { Worker } from 'worker_threads';
new Worker('./worker.js');
\`\`\`

### Child processes
\`\`\`js
import { exec } from 'child_process';
exec('ls -la', (err, stdout)=> console.log(stdout));
\`\`\`

### Streaming transforms (compression)
\`\`\`js
import zlib from 'zlib';
app.get('/file', (req, res) => {
  const file = fs.createReadStream('big.txt');
  file.pipe(zlib.createGzip()).pipe(res);
});
\`\`\`

### Project architecture tips
- Use layered architecture (routes → controllers → services → repositories).
- Keep environment-specific config in env files or config library.
- Write small, testable functions and keep side effects isolated.

**Final tip:** iterate, measure, and keep critical paths asynchronous and monitored.
`
  }
];
