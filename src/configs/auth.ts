import type { NextAuthOptions, User } from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';
import { TEST_USER } from '@/constants/testUser';

export const authConfig: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'email', type: 'email', placeholder: 'test@gmail.com' },
        password: { label: 'password', type: 'text', placeholder: '0123456789' },
      },
      async authorize(credentials) {
        if (!credentials.email || !credentials.password) return null;
        if (credentials.email === TEST_USER.email && credentials.password === TEST_USER.password)
          return TEST_USER as User;
        return null;
      },
    }),
  ],
};
