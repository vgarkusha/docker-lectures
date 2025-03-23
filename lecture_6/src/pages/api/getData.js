// pages/api/getData.js
import pool from '../db';

export default async function handler(req, res) {
    try {
        const result = await pool.query('SELECT NOW()');
        res.status(200).json(result.rows);
    } catch (error) {
        console.error('Error executing query', error);
        res.status(500).json({error: 'Internal Server Error'});
    }
}