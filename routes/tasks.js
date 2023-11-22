import { Router } from 'express';
const router = Router();

import { getAllTasks,
     createTask, 
     getTask, 
     updateTask, 
     deleteTask } from '../controllers/tasks';

router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)

export default router