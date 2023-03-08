import { Router } from 'express';
import Studentscontroller from '../controllers/studentsController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', Studentscontroller.index);
router.post('/', loginRequired, Studentscontroller.store);
router.put('/:id', loginRequired, Studentscontroller.update);
router.delete('/:id', loginRequired, Studentscontroller.delete);
router.get('/:id', Studentscontroller.show);

export default router;
