// server/index.js
// Express entry point — serves REST API + built React client (production).
// In development, Vite runs separately on :5173; Express runs on :3001.

import 'dotenv/config';
import express from 'express';
import cors    from 'cors';
import path    from 'path';
import { fileURLToPath } from 'url';

import apiRouter from './routes/api.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT      = process.env.PORT ?? 3001;
const isProd    = process.env.NODE_ENV === 'production';

const app = express();

// ── Middleware ────────────────────────────────────────────────
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Allow Vite dev-server to call the API in development
app.use(cors({
  origin: isProd ? false : 'http://localhost:5173',
  credentials: true,
}));

// ── API routes ────────────────────────────────────────────────
app.use('/api', apiRouter);

// ── Serve React build in production ───────────────────────────
if (isProd) {
  const distPath = path.join(__dirname, '..', 'dist');
  app.use(express.static(distPath));

  // SPA fallback — always return index.html for unknown routes
  app.get('*', (_req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  if (!isProd) console.log('   API only — frontend at http://localhost:5173');
});
