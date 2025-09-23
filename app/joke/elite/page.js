"use client";

import Link from "next/link";
import { useState } from "react";

const eliteJokes = [
  "I told my wife she was drawing her eyebrows too high. She looked surprised. Then I told her they were also too far apart. She looked even more surprised.",
  "A photon checks into a hotel. The bellhop asks, 'Can I help you with your luggage?' The photon replies, 'No thanks, I'm traveling light.'",
  "Why don't scientists trust atoms? Because they make up everything... and they have a history of splitting when things get heated.",
  "My wife accused me of being immature. I was so shocked I nearly choked on my Fruit Loops."
];

export default function EliteJoke() {
  const [currentJoke, setCurrentJoke] = useState(
    eliteJokes[Math.floor(Math.random() * eliteJokes.length)]
  );
  const [laughCount, setLaughCount] = useState(0);

  const getNewJoke = () => {
    setCurrentJoke(eliteJokes[Math.floor(Math.random() * eliteJokes.length)]);
  };

  const recordLaugh = () => {
    setLaughCount(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 text-white font-sans">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-600/20 via-transparent to-transparent"></div>

      <main className="relative z-10 container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <Link
            href="/"
            className="inline-flex items-center text-yellow-400 hover:text-yellow-300 mb-8 transition-colors"
          >
            ← Back to Store
          </Link>

          <div className="bg-gradient-to-br from-yellow-600/20 to-orange-700/20 backdrop-blur-sm border-2 border-yellow-500/50 rounded-2xl p-8 mb-8 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-500 to-orange-600 text-black px-4 py-1 rounded-full text-sm font-semibold">
              ELITE
            </div>

            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-6">
              Funniest Joke - $9.99
            </h1>
            <p className="text-gray-400 mb-8 text-lg">
              Elite comedy experience activated. Warning: May cause uncontrollable laughter!
            </p>

            <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-400/30 rounded-lg p-8 mb-8">
              <p className="text-xl md:text-2xl text-white leading-relaxed">
                {currentJoke}
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <button
                onClick={recordLaugh}
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg"
              >
                😂 I Laughed! ({laughCount})
              </button>

              <Link
                href="/"
                className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-black font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg inline-block"
              >
                Browse More Jokes
              </Link>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-400 mb-4">
              🎭 Congratulations! You've experienced the pinnacle of digital comedy.
            </p>
            <p className="text-yellow-400 text-sm">
              Side effects may include: increased happiness, social media sharing urges, and addiction to premium humor.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}