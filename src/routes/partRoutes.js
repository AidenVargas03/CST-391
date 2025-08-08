"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const partController_1 = require("../controllers/partController");
const router = express_1.default.Router();
router.get('/pcs/:pcId/parts', partController_1.getPartsByPC);
router.post('/pcs/:pcId/parts', partController_1.addPart);
router.put('/parts/:id', partController_1.updatePart);
router.delete('/parts/:id', partController_1.deletePart);
router.get('/parts/search', partController_1.searchParts);
exports.default = router;
