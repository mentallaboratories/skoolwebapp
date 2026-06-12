// server/routes/pages.js
// GET /api/pages — returns metadata for all site pages.
// Replace the static array with a DB query when ready.

import { Router } from 'express';
import { getPages } from '../controllers/pagesController.js';

const router = Router();

router.get('/', getPages);

export default router;
