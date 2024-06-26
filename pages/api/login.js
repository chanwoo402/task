import { signIn } from 'next-auth/react';
import axios from 'axios';

export default async (req, res) => {
  if (req.method === 'POST') {
    const { username, password } = req.body;
    try {
      const response = await axios.post(
        'https://your-external-server.com/api/login',
        { username, password }
      );
      const data = response.data;

      if (data) {
        // signIn 함수를 사용하여 세션에 사용자 정보 저장
        const result = await signIn('credentials', {
          redirect: false,
          username,
          password,
        });

        if (result.error) {
          return res.status(401).json({ error: 'Authentication failed' });
        }

        // 성공적으로 로그인되면, 사용자 정보가 포함된 세션 객체를 반환
        return res.json({ message: 'Login successful', session: result });
      }
    } catch (error) {
      return res
        .status(401)
        .json({ error: 'Login failed', details: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
