import { formatDate } from '@flowforge/shared-utils';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold mb-6">FlowForge</h1>
        <p className="text-xl mb-4">
          Welcome to the FlowForge platform! Today is {formatDate(new Date(), true)}.
        </p>
        <div className="bg-white/30 p-6 rounded-lg shadow-md backdrop-blur-lg">
          <h2 className="text-2xl font-semibold mb-4">Features</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Next.js frontend with Tailwind CSS</li>
            <li>Node.js backend with Express and GraphQL</li>
            <li>PostgreSQL database with Drizzle ORM</li>
            <li>TypeScript for type safety</li>
            <li>Shared utilities across all packages</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
