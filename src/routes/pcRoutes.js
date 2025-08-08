"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const pcController_1 = require("../controllers/pcController");
const router = express_1.default.Router();
router.get('/pcs', pcController_1.getAllPCs);
router.post('/pcs', pcController_1.addPC);
router.put('/pcs/:id', pcController_1.updatePC);
router.delete('/pcs/:id', pcController_1.deletePC);
exports.default = router;
