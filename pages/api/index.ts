import { NextApiRequest, NextApiResponse } from 'next';
import { createPool, sql } from 'slonik';
import config from '../../config.js';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.body;
  const pool = createPool(config.POSTGRES_CONNECTION_STRING);
  try {
    await pool.connect(async connection => {
      let result;

      if (!id) {
        result = await connection.query(sql`SELECT * FROM product`);
      } else {
        result = await connection.query(
          sql`SELECT * FROM product WHERE id = ${id}`
        );

        //   if (id) {
        //     await connection.query(sql`INSERT INTO product (id) VALUES (${id})`);
        //     result = await connection.query(
        //       sql`SELECT * FROM product WHERE id = ${id}`
        //     );
        //   }
      }

      res.status(200).json(result);
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ err: err.message, rows: [] });
  }
};

//FÜR MORGEN: ERST MAL DATEN SCHICKEN LERNEN VON DATENBANK ZU BROWSER UND ZURÜCK; API IST DIE SCHNITTSTELLE ZWISCHEN BROWSER UND DATENBANK - DIE BEidEN MÜSSEN ÜBER DIE API MITEINANDER REDEN ____ VERSTEHE DEN CODE MIT "INSERT INTO" DEN KARL NEU HINZUGEFÜGT HAT!
