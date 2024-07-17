import { Router } from 'express';
import { getUserProfile } from '../controllers/userController';

const router = Router();

router.get('/profile/:id', getUserProfile);

export default router;