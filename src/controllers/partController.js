"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchParts = exports.deletePart = exports.updatePart = exports.addPart = exports.getPartsByPC = void 0;
const database_1 = require("../database");
const getPartsByPC = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { pcId } = req.params;
    const [rows] = yield database_1.db.query('SELECT * FROM Part WHERE pc_id = ?', [pcId]);
    res.json(rows);
});
exports.getPartsByPC = getPartsByPC;
const addPart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { pcId } = req.params;
    const { name, type, price, quantity } = req.body;
    const [result] = yield database_1.db.query('INSERT INTO Part (pc_id, name, type, price, quantity) VALUES (?, ?, ?, ?, ?)', [pcId, name, type, price, quantity]);
    res.json({ id: result.insertId, pcId, name, type, price, quantity });
});
exports.addPart = addPart;
const updatePart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { name, type, price, quantity } = req.body;
    yield database_1.db.query('UPDATE Part SET name = ?, type = ?, price = ?, quantity = ? WHERE id = ?', [name, type, price, quantity, id]);
    res.sendStatus(200);
});
exports.updatePart = updatePart;
const deletePart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield database_1.db.query('DELETE FROM Part WHERE id = ?', [id]);
    res.sendStatus(200);
});
exports.deletePart = deletePart;
const searchParts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { q } = req.query;
    const [rows] = yield database_1.db.query('SELECT * FROM Part WHERE name LIKE ? OR type LIKE ?', [`%${q}%`, `%${q}%`]);
    res.json(rows);
});
exports.searchParts = searchParts;
