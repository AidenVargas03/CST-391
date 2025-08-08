import { Request, Response } from 'express';
import { pool } from '../database';
import { Part } from '../models/part';

export const getPartsByPC = async (req: Request, res: Response) => {
  const { pcId } = req.params;
  try {
    const [rows] = await pool.query('SELECT * FROM Part WHERE pc_id = ?', [pcId]);
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching parts' });
  }
};

export const addPart = async (req: Request, res: Response) => {
  const { pcId } = req.params;
  const { name, type, price, quantity } = req.body as Part;

  if (!name || !type || price == null || quantity == null) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const [result] = await pool.query(
      'INSERT INTO Part (pc_id, name, type, price, quantity) VALUES (?, ?, ?, ?, ?)',
      [pcId, name, type, price, quantity]
    );

    res.status(201).json({
      id: (result as any).insertId,
      pcId,
      name,
      type,
      price,
      quantity
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error adding part' });
  }
};

export const updatePart = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, type, price, quantity } = req.body as Part;

  if (!name || !type || price == null || quantity == null) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    await pool.query(
      'UPDATE Part SET name = ?, type = ?, price = ?, quantity = ? WHERE id = ?',
      [name, type, price, quantity, id]
    );
    res.sendStatus(200);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error updating part' });
  }
};

export const deletePart = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM Part WHERE id = ?', [id]);
    res.sendStatus(200);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error deleting part' });
  }
};

export const searchParts = async (req: Request, res: Response) => {
  const { q } = req.query;
  try {
    const [rows] = await pool.query(
      'SELECT * FROM Part WHERE name LIKE ? OR type LIKE ?',
      [`%${q}%`, `%${q}%`]
    );
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error searching parts' });
  }
};
