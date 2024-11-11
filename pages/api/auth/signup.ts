
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
   

   

    res.status(201).json({ message: 'User registered successfully' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
