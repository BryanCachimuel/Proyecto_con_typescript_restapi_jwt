import { Router } from 'express';
const router: Router = Router();

import { TokenValidate } from '../libs/varifyToken'

import { signup, signin, profile } from '../controllers/auth.controller'

router.post('/signup', signup);
router.post('/signin', signin);
router.get('/profile',TokenValidate, profile);

export default router;