// server/routes/nav.js
// GET /api/nav — returns the navigation items consumed by React Header.
// Moving nav data here means you edit one place instead of every page.

import { Router } from 'express';
import { getNav } from '../controllers/navController.js';

const router = Router();

router.get('/', getNav);

export default router;
