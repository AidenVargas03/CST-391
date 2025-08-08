import { Router } from 'express';
import { getAllPCs, addPC, updatePC, deletePC } from '../controllers/pcController';

const router = Router();

router.get('/pcs', getAllPCs);
router.post('/pcs', addPC);
router.put('/pcs/:id', updatePC);
router.delete('/pcs/:id', deletePC);

export default router;
