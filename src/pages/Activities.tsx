import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Music, Heart, Brain, Dumbbell, Coffee, Book, Filter } from 'lucide-react';

interface Activity {
  id: number;
  title: string;
  description: string;
  duration: string;
  mood: string[];
  icon: React.ElementType;
  color: string;
}

const activities: Activity[] = [
  {
    id: 1,
    title: 'Mindful Meditation',
    description: 'A guided meditation session to help you find inner peace and clarity.',
    duration: '10 mins',
    mood: ['Stressed', 'Anxious', 'Overwhelmed'],
    icon: Brain,
    color: 'bg-blue-500',
  },
  {
    id: 2,
    title: 'Mood Boosting Playlist',
    description: 'Curated music to lift your spirits and energize your day.',
    duration: '30 mins',
    mood: ['Sad', 'Low Energy', 'Unmotivated'],
    icon: Music,
    color: 'bg-purple-500',
  },
  {
    id: 3,
    title: 'Quick Workout',
    description: 'Simple exercises to get your body moving and endorphins flowing.',
    duration: '15 mins',
    mood: ['Sluggish', 'Stressed', 'Restless'],
    icon: Dumbbell,
    color: 'bg-green-500',
  },
  {
    id: 4,
    title: 'Gratitude Journal',
    description: "Write down three things you're grateful for today.",
    duration: '5 mins',
    mood: ['Sad', 'Anxious', 'Overwhelmed'],
    icon: Book,
    color: 'bg-yellow-500',
  },
  {
    id: 5,
    title: 'Self-Care Break',
    description: 'Take a moment to practice self-care and rejuvenation.',
    duration: '20 mins',
    mood: ['Tired', 'Stressed', 'Overwhelmed'],
    icon: Heart,
    color: 'bg-pink-500',
  },
  {
    id: 6,
    title: 'Mindful Coffee Break',
    description: 'Practice mindfulness while enjoying your favorite beverage.',
    duration: '10 mins',
    mood: ['Anxious', 'Scattered', 'Low Energy'],
    icon: Coffee,
    color: 'bg-orange-500',
  },
];

const moods = ['All', 'Stressed', 'Anxious', 'Sad', 'Low Energy', 'Overwhelmed', 'Restless'];

const Activities = () => {
  const [selectedMood, setSelectedMood] = useState('All');
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);

  const filteredActivities = selectedMood === 'All'
    ? activities
    : activities.filter(activity => activity.mood.includes(selectedMood));

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
            Activity Suggestions
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Discover personalized activities to help improve your mood and well-being.
          </p>
        </motion.div>

        {/* Mood Filter */}
        <div className="mb-8">
          <div className="flex items-center space-x-2 mb-4">
            <Filter className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Filter by Mood
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {moods.map(mood => (
              <button
                key={mood}
                onClick={() => setSelectedMood(mood)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedMood === mood
                    ? 'bg-primary-500 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {mood}
              </button>
            ))}
          </div>
        </div>

        {/* Activity Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredActivities.map((activity, index) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button
                onClick={() => setSelectedActivity(activity)}
                className="w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className={`${activity.color} p-6 flex justify-center items-center`}>
                  <activity.icon className="w-12 h-12 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {activity.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {activity.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      {activity.duration}
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {activity.mood.map(m => (
                        <span
                          key={m}
                          className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full"
                        >
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </button>
            </motion.div>
          ))}
        </div>

        {/* Activity Modal */}
        {selectedActivity && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-lg w-full"
            >
              <div className={`${selectedActivity.color} p-6 flex justify-center items-center`}>
                <selectedActivity.icon className="w-16 h-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  {selectedActivity.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {selectedActivity.description}
                </p>
                <div className="flex justify-end space-x-4">
                  <button
                    onClick={() => setSelectedActivity(null)}
                    className="px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
                  >
                    Close
                  </button>
                  <button className="px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors">
                    Start Activity
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Activities;