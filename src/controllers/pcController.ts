import { Request, Response } from 'express';
import { pool } from '../database';
import { PC } from '../models/pc';

export const getAllPCs = async (_req: Request, res: Response) => {
  try {
    const [rows] = await pool.query('SELECT * FROM PC');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching PCs' });
  }
};

export const addPC = async (req: Request, res: Response) => {
  const { name, owner } = req.body as PC;

  if (!name || !owner) {
    return res.status(400).json({ message: 'Name and Owner are required' });
  }

  try {
    const [result] = await pool.query(
      'INSERT INTO PC (name, owner) VALUES (?, ?)',
      [name, owner]
    );
    res.status(201).json({
      id: (result as any).insertId,
      name,
      owner
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error adding PC' });
  }
};

export const updatePC = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, owner } = req.body as PC;

  if (!name || !owner) {
    return res.status(400).json({ message: 'Name and Owner are required' });
  }

  try {
    await pool.query('UPDATE PC SET name = ?, owner = ? WHERE id = ?', [name, owner, id]);
    res.sendStatus(200);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error updating PC' });
  }
};

export const deletePC = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM PC WHERE id = ?', [id]);
    res.sendStatus(200);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error deleting PC' });
  }
};
