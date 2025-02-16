import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Wind, Edit3, Sun, Timer, Save } from 'lucide-react';

const SelfHelp = () => {
  const [breathCount, setBreathCount] = useState(0);
  const [isBreathing, setIsBreathing] = useState(false);
  const [journalEntry, setJournalEntry] = useState('');
  const [mood, setMood] = useState<string | null>(null);
  const [affirmation, setAffirmation] = useState('I am capable of handling anything that comes my way.');

  const moods = ['Happy', 'Calm', 'Anxious', 'Sad', 'Energetic', 'Tired'];

  const startBreathing = () => {
    setIsBreathing(true);
    setBreathCount(0);
    const interval = setInterval(() => {
      setBreathCount(count => {
        if (count >= 9) {
          clearInterval(interval);
          setIsBreathing(false);
          return 0;
        }
        return count + 1;
      });
    }, 7000); // 7 seconds per breath cycle
  };

  const saveJournalEntry = () => {
    if (journalEntry.trim() && mood) {
      // Save journal entry logic here
      setJournalEntry('');
      setMood(null);
    }
  };

  const getNewAffirmation = () => {
    const affirmations = [
      'I am worthy of love and respect.',
      'I choose to be confident and self-assured.',
      'I am becoming better and stronger every day.',
      'I trust in my ability to make good decisions.',
      'I am surrounded by love and support.',
      'I deserve to be happy and successful.',
    ];
    const newAffirmation = affirmations[Math.floor(Math.random() * affirmations.length)];
    setAffirmation(newAffirmation);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Self-Help Activities
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Tools and exercises to support your mental well-being journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Breathing Exercise */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden"
          >
            <div className="p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Wind className="w-6 h-6 text-primary-500" />
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  Breathing Exercise
                </h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Take a moment to breathe deeply and find your center.
              </p>
              <div className="flex flex-col items-center">
                {isBreathing ? (
                  <div className="relative w-40 h-40 mb-6">
                    <motion.div
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 7,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute inset-0 bg-primary-500 rounded-full opacity-50"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">
                        {breathCount + 1}/10
                      </span>
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={startBreathing}
                    className="px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors flex items-center space-x-2"
                  >
                    <Timer className="w-5 h-5" />
                    <span>Start Breathing</span>
                  </button>
                )}
              </div>
            </div>
          </motion.div>

          {/* Journaling */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden"
          >
            <div className="p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Edit3 className="w-6 h-6 text-primary-500" />
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  Journaling
                </h2>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    How are you feeling?
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {moods.map(m => (
                      <button
                        key={m}
                        onClick={() => setMood(m)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                          mood === m
                            ? 'bg-primary-500 text-white'
                            : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                        }`}
                      >
                        {m}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <textarea
                    value={journalEntry}
                    onChange={(e) => setJournalEntry(e.target.value)}
                    placeholder="Write your thoughts here..."
                    className="w-full h-32 p-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>
                <button
                  onClick={saveJournalEntry}
                  disabled={!journalEntry.trim() || !mood}
                  className="w-full px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  <Save className="w-5 h-5" />
                  <span>Save Entry</span>
                </button>
              </div>
            </div>
          </motion.div>

          {/* Daily Affirmations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden"
          >
            <div className="p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Sun className="w-6 h-6 text-primary-500" />
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  Daily Affirmation
                </h2>
              </div>
              <div className="text-center py-8">
                <p className="text-2xl font-medium text-gray-900 dark:text-white mb-6">
                  {affirmation}
                </p>
                <button
                  onClick={getNewAffirmation}
                  className="px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
                >
                  New Affirmation
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SelfHelp;