"use client";

import Link from "next/link";
import { useState } from "react";

const basicJokes = [
  "Why don't scientists trust atoms? Because they make up everything!",
  "I told my wife she was drawing her eyebrows too high. She looked surprised.",
  "Why don't eggs tell jokes? They'd crack each other up!",
  "What do you call a fake noodle? An impasta!"
];

export default function BasicJoke() {
  const [currentJoke, setCurrentJoke] = useState(
    basicJokes[Math.floor(Math.random() * basicJokes.length)]
  );

  const getNewJoke = () => {
    setCurrentJoke(basicJokes[Math.floor(Math.random() * basicJokes.length)]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 text-white font-sans">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-600/20 via-transparent to-transparent"></div>

      <main className="relative z-10 container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <Link
            href="/"
            className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8 transition-colors"
          >
            ← Back to Store
          </Link>

          <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-cyan-500/50 rounded-2xl p-8 mb-8">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">
              A Joke - $2.99
            </h1>
            <p className="text-gray-400 mb-8 text-lg">
              Entry-level humor activated. Prepare for casual chuckles!
            </p>

            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/30 rounded-lg p-8 mb-8">
              <p className="text-xl md:text-2xl text-white leading-relaxed">
                {currentJoke}
              </p>
            </div>

            <Link
              href="/"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg inline-block"
            >
              Browse More Jokes
            </Link>
          </div>

          <div className="text-center">
            <p className="text-gray-400">
              Enjoying the humor? Consider upgrading to our premium tiers for even funnier content!
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}