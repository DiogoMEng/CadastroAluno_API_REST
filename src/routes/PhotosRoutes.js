import { Router } from 'express';
import loginRequired from '../middlewares/loginRequired';
import photocontroller from '../controllers/PhotoController';

const router = new Router();

router.post('/', loginRequired, photocontroller.store);

export default router;
