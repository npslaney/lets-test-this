"use client";

import Link from "next/link";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

const basicJokes = [
  "Why don't scientists trust atoms? Because they make up everything!",
  "I told my wife she was drawing her eyebrows too high. She looked surprised.",
  "Why don't eggs tell jokes? They'd crack each other up!",
  "What do you call a fake noodle? An impasta!"
];

const premiumJokes = [
  "I haven't slept for ten days, because that would be too long.",
  "My therapist says I have a preoccupation with vengeance. We'll see about that.",
  "I used to hate facial hair, but then it grew on me.",
  "The early bird might get the worm, but the second mouse gets the cheese."
];

const eliteJokes = [
  "I told my wife she was drawing her eyebrows too high. She looked surprised. Then I told her they were also too far apart. She looked even more surprised.",
  "A photon checks into a hotel. The bellhop asks, 'Can I help you with your luggage?' The photon replies, 'No thanks, I'm traveling light.'",
  "Why don't scientists trust atoms? Because they make up everything... and they have a history of splitting when things get heated.",
  "My wife accused me of being immature. I was so shocked I nearly choked on my Fruit Loops."
];

const jokeConfig = {
  basic: {
    jokes: basicJokes,
    title: "A Joke - $2.99",
    subtitle: "Entry-level humor activated. Prepare for casual chuckles!",
    colors: {
      gradient: "from-cyan-400 to-blue-400",
      border: "border-cyan-500/50",
      bg: "from-gray-800/80 to-gray-900/80",
      cardBg: "from-cyan-500/10 to-blue-500/10",
      cardBorder: "border-cyan-400/30",
      buttonBg: "from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700",
      accent: "text-cyan-400"
    }
  },
  premium: {
    jokes: premiumJokes,
    title: "Funnier Joke - $5.99",
    subtitle: "Mid-tier comedy gold activated. Prepare for genuine laughter!",
    colors: {
      gradient: "from-purple-400 to-pink-400",
      border: "border-purple-500/50",
      bg: "from-purple-800/80 to-purple-900/80",
      cardBg: "from-purple-500/10 to-pink-500/10",
      cardBorder: "border-purple-400/30",
      buttonBg: "from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700",
      accent: "text-purple-400"
    }
  },
  elite: {
    jokes: eliteJokes,
    title: "Funniest Joke - $9.99",
    subtitle: "Elite comedy experience activated. Warning: May cause uncontrollable laughter!",
    colors: {
      gradient: "from-yellow-400 to-orange-400",
      border: "border-yellow-500/50",
      bg: "from-yellow-600/20 to-orange-700/20",
      cardBg: "from-yellow-500/10 to-orange-500/10",
      cardBorder: "border-yellow-400/30",
      buttonBg: "from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700",
      accent: "text-yellow-400"
    }
  }
};

function SuccessPageContent() {
  const searchParams = useSearchParams();
  const [jokeType, setJokeType] = useState(null);
  const [currentJoke, setCurrentJoke] = useState("");
  const [laughCount, setLaughCount] = useState(0);

  useEffect(() => {
    const type = searchParams.get("type") || "basic";
    setJokeType(type);
    const config = jokeConfig[type] || jokeConfig.basic;
    setCurrentJoke(config.jokes[Math.floor(Math.random() * config.jokes.length)]);
  }, [searchParams]);

  if (!jokeType) {
    return null;
  }

  const config = jokeConfig[jokeType] || jokeConfig.basic;

  const getNewJoke = () => {
    setCurrentJoke(config.jokes[Math.floor(Math.random() * config.jokes.length)]);
  };

  const recordLaugh = () => {
    setLaughCount(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 text-white font-sans">
      <div className={`absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-600/20 via-transparent to-transparent`}></div>

      <main className="relative z-10 container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center bg-green-500/20 border border-green-500/50 rounded-full px-6 py-3 mb-6">
              <svg className="w-6 h-6 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="text-green-400 font-semibold">Payment Successful!</span>
            </div>
          </div>

          <Link
            href="/"
            className={`inline-flex items-center ${config.colors.accent} hover:opacity-80 mb-8 transition-colors`}
          >
            ← Back to Store
          </Link>

          <div className={`bg-gradient-to-br ${config.colors.bg} backdrop-blur-sm border-2 ${config.colors.border} rounded-2xl p-8 mb-8 relative`}>
            {jokeType === "premium" && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                PREMIUM
              </div>
            )}
            {jokeType === "elite" && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-500 to-orange-600 text-black px-4 py-1 rounded-full text-sm font-semibold">
                ELITE
              </div>
            )}

            <h1 className={`text-4xl md:text-6xl font-bold bg-gradient-to-r ${config.colors.gradient} bg-clip-text text-transparent mb-6`}>
              {config.title}
            </h1>
            <p className="text-gray-400 mb-8 text-lg">
              {config.subtitle}
            </p>

            <div className={`bg-gradient-to-r ${config.colors.cardBg} border ${config.colors.cardBorder} rounded-lg p-8 mb-8`}>
              <p className="text-xl md:text-2xl text-white leading-relaxed">
                {currentJoke}
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-6">
              {jokeType === "elite" && (
                <button
                  onClick={recordLaugh}
                  className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg"
                >
                  😂 I Laughed! ({laughCount})
                </button>
              )}

              <Link
                href="/"
                className={`bg-gradient-to-r ${config.colors.buttonBg} text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg inline-block`}
              >
                Browse More Jokes
              </Link>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-400">
              {jokeType === "basic" && "Enjoying the humor? Consider upgrading to our premium tiers for even funnier content!"}
              {jokeType === "premium" && "Want the ultimate comedy experience? Try our Elite tier for the funniest jokes ever!"}
              {jokeType === "elite" && "🎭 Congratulations! You've experienced the pinnacle of digital comedy."}
            </p>
            {jokeType === "elite" && (
              <p className="text-yellow-400 text-sm mt-2">
                Side effects may include: increased happiness, social media sharing urges, and addiction to premium humor.
              </p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 text-white font-sans flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500 mx-auto mb-4"></div>
          <p className="text-gray-400">Loading your joke...</p>
        </div>
      </div>
    }>
      <SuccessPageContent />
    </Suspense>
  );
}
