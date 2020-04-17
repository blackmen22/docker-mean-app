import {Router, Request,Response,NextFunction} from 'express';
import taskRouter from './task.routes';

const router = Router();
router.use('/task',taskRouter)


export default router;

module.exports = router;
