import type { NextAuthOptions } from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';
import { TEST_USER } from '@/constants/testUser';

//@ts-ignore
export const authConfig: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'email', type: 'email', placeholder: 'test@gmail.com', required: true },
        password: { label: 'password', type: 'text', placeholder: '0123456789', required: true },
      },
      async authorize(credentials) {
        if (!credentials.email || !credentials.password) return null;
        if (credentials.email === TEST_USER.email && credentials.password === TEST_USER.password) return TEST_USER;
        return null;
      },
    }),
  ],
};
