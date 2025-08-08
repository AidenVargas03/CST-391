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
exports.deletePC = exports.updatePC = exports.addPC = exports.getAllPCs = void 0;
const database_1 = require("../database"); // ✅ Updated import
const getAllPCs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const [rows] = yield database_1.pool.query('SELECT * FROM PC');
    res.json(rows);
});
exports.getAllPCs = getAllPCs;
const addPC = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, owner } = req.body;
    // ✅ Validate input to prevent NULL errors
    if (!name || !owner) {
        return res.status(400).json({ message: "Name and Owner are required fields" });
    }
    try {
        const [result] = yield database_1.pool.query('INSERT INTO PC (name, owner) VALUES (?, ?)', [name, owner]);
        res.status(201).json({
            id: result.insertId,
            name,
            owner
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error adding PC" });
    }
});
exports.addPC = addPC;
const updatePC = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { name, owner } = req.body;
    if (!name || !owner) {
        return res.status(400).json({ message: "Name and Owner are required fields" });
    }
    yield database_1.pool.query('UPDATE PC SET name = ?, owner = ? WHERE id = ?', [name, owner, id]);
    res.sendStatus(200);
});
exports.updatePC = updatePC;
const deletePC = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield database_1.pool.query('DELETE FROM PC WHERE id = ?', [id]);
    res.sendStatus(200);
});
exports.deletePC = deletePC;
