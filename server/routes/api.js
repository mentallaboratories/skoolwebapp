// server/routes/api.js
// Root API router.
// Add new route modules here as the project grows.

import { Router } from 'express';
import pagesRouter from './pages.js';
import navRouter   from './nav.js';

const router = Router();

// GET /api/health — quick liveness check
router.get('/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Feature routes
router.use('/pages', pagesRouter);
router.use('/nav',   navRouter);

export default router;
