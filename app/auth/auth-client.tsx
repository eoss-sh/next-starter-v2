'use client';

import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { signIn, signUp } from '@/lib/actions/auth-actions';

const AuthClient = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      console.log('signIn', email, password);
      const result = await signIn(email, password);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await signUp(email, password, name);
    if (!result.user) {
      setError('Signup failed');
      return;
    }
  };

  return (
    <section>
      <>
        <h2 className="mb-8 text-xl font-bold">Anmelden</h2>
        <form
          className="mx-auto flex max-w-xl flex-col gap-2"
          onSubmit={isSignIn ? handleSignIn : handleSignUp}
        >
          {!isSignIn && (
            <input
              className="rounded-md border border-gray-300 p-2"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          )}
          <input
            className="rounded-md border border-gray-300 p-2"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="rounded-md border border-gray-300 p-2"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button className="bg-teal-500 p-6" type="submit">
            Anmelden
          </Button>
        </form>
        {isSignIn && (
          <p className="mt-8 text-center">
            noch kein User?{' '}
            <button onClick={() => setIsSignIn(false)}>Registrieren</button>
          </p>
        )}
        {!isSignIn && (
          <p className="mt-8 text-center">
            bereits ein User?{' '}
            <button onClick={() => setIsSignIn(true)}>Anmelden</button>
          </p>
        )}
      </>
    </section>
  );
};

export default AuthClient;
