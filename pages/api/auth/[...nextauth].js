import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import axios from 'axios';

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: '찬우' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const { username, password } = credentials;
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/login`,
          { username, password }
        );

        const data = response.data;
        if (data) {
          return {
            id: data.id,
            name: data.name,
            email: data.email,
            token: data.token,
          };
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user, account }) => {
      if (user) {
        token.userId = user.id;
        token.userName = user.name;
      }
      return token;
    },
    session: async ({ session, token }) => {
      if (token) {
        session.user.id = token.userId;
        session.user.name = token.userName;
      }
      return session;
    },
  },
  session: {
    strategy: 'jwt',
    maxAge: 10 * 60, // 10 minutes
    updateAge: 60 * 60, // 24 hours
    cookie: {
      secure: true, // HTTPS 환경에서만 쿠키 사용
      httpOnly: true, // JavaScript에서 쿠키 접근 불가
      sameSite: 'lax', // CSRF 보호
    },
  },
});
