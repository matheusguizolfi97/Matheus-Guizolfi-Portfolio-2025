import React from 'react';
import { Link } from 'react-router-dom';

export default function Sitemap() {
  return (
    <div className="p-12 bg-zinc-950 min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-8">Sitemap (Preview Mode)</h1>
      <nav className="space-y-4">
        <Link to="/" className="block text-blue-400 hover:underline">Home</Link>
        <Link to="/info" className="block text-blue-400 hover:underline">Information / About</Link>
        <Link to="/project/benjamin-peret" className="block text-blue-400 hover:underline">Project Detail (Example)</Link>
      </nav>
      <div className="mt-12 p-6 bg-zinc-900 rounded-lg border border-zinc-800">
        <p className="text-zinc-400 text-sm">
          You are seeing this page because the "Hybrid Routing" pattern detected a preview environment.
          In production, the root path will load the Home page directly.
        </p>
      </div>
    </div>
  );
}
