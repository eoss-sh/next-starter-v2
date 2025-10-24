import { CitrusIcon } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center">
        <CitrusIcon />
        <h1 className="text-4xl">Hello World</h1>
      </main>
    </div>
  );
}
