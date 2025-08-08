import express from 'express';
import { getPartsByPC, addPart, updatePart, deletePart, searchParts } from '../controllers/partController';

const router = express.Router();

router.get('/parts/pc/:pcId', getPartsByPC);      // Matches Angular
router.post('/parts/pc/:pcId', addPart);
router.put('/parts/:id', updatePart);
router.delete('/parts/:id', deletePart);
router.get('/parts/search', searchParts);

export default router;
