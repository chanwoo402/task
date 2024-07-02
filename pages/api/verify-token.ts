import type { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';
import { supabase } from '../../supabaseClient';

const SECRET_KEY = process.env.JWT_SECRET_KEY || 'your_secret_key';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { token } = req.body;

    try {
      const decoded: any = jwt.verify(token, SECRET_KEY);
      const { data: user, error } = await supabase
        .from('user')
        .select('*')
        .eq('id', decoded.userId)
        .single();

      if (error || !user) {
        return res.status(401).json({ error: 'Invalid token' });
      }

      return res.status(200).json({ user });
    } catch (error) {
      return res.status(401).json({ error: 'Invalid token' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
