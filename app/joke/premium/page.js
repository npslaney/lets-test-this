"use client";

import Link from "next/link";
import { useState } from "react";

const premiumJokes = [
  "I haven't slept for ten days, because that would be too long.",
  "My therapist says I have a preoccupation with vengeance. We'll see about that.",
  "I used to hate facial hair, but then it grew on me.",
  "The early bird might get the worm, but the second mouse gets the cheese."
];

export default function PremiumJoke() {
  const [currentJoke, setCurrentJoke] = useState(
    premiumJokes[Math.floor(Math.random() * premiumJokes.length)]
  );

  const getNewJoke = () => {
    setCurrentJoke(premiumJokes[Math.floor(Math.random() * premiumJokes.length)]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 text-white font-sans">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-600/20 via-transparent to-transparent"></div>

      <main className="relative z-10 container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <Link
            href="/"
            className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-8 transition-colors"
          >
            ← Back to Store
          </Link>

          <div className="bg-gradient-to-br from-purple-800/80 to-purple-900/80 backdrop-blur-sm border-2 border-purple-500/50 rounded-2xl p-8 mb-8 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
              PREMIUM
            </div>

            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
              Funnier Joke - $5.99
            </h1>
            <p className="text-gray-400 mb-8 text-lg">
              Mid-tier comedy gold activated. Prepare for genuine laughter!
            </p>

            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-400/30 rounded-lg p-8 mb-8">
              <p className="text-xl md:text-2xl text-white leading-relaxed">
                {currentJoke}
              </p>
            </div>

            <Link
              href="/"
              className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg inline-block"
            >
              Browse More Jokes
            </Link>
          </div>

          <div className="text-center">
            <p className="text-gray-400">
              Want the ultimate comedy experience? Try our Elite tier for the funniest jokes ever!
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}