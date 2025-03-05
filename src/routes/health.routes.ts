import { Router } from 'express';
import { getHealth, postData } from '../controllers/health.controller';

const router = Router();

router.get('/health', getHealth);
router.post('/data', postData);

export default router;