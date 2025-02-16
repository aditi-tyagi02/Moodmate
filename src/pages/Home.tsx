import React from 'react';
import { motion } from 'framer-motion';
import { Brain, MessageCircle, Activity, Heart, TrendingUp, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: Brain,
    title: 'Facial Expression Analysis',
    description: 'AI-powered emotion detection through your webcam',
    path: '/facial-analysis'
  },
  {
    icon: MessageCircle,
    title: 'Emotion-Adaptive Chatbot',
    description: 'Intelligent conversations that understand your feelings',
    path: '/chatbot'
  },
  {
    icon: Activity,
    title: 'Activity Suggestions',
    description: 'Personalized recommendations based on your mood',
    path: '/activities'
  },
  {
    icon: Heart,
    title: 'Self-Help Activities',
    description: 'Guided exercises for mental wellness',
    path: '/self-help'
  },
  {
    icon: TrendingUp,
    title: 'Mood Analysis',
    description: 'Track and analyze your emotional patterns',
    path: '/analysis'
  },
  {
    icon: Trophy,
    title: 'Achievements',
    description: 'Track your progress and earn rewards',
    path: '/achievements'
  }
];

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="gradient-bg absolute inset-0 opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl dark:text-white">
              <span className="block">Your AI-Powered</span>
              <span className="block text-primary-500">Mental Wellness Companion</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl dark:text-gray-300">
              Experience personalized mental wellness support with MoodMate. Our AI-driven platform helps you understand and improve your emotional well-being.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <Link
                  to="/login"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-500 hover:bg-primary-600 md:py-4 md:text-lg md:px-10"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              Features that empower you
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-300">
              Discover tools designed to support your mental wellness journey
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group"
                >
                  <Link
                    to={feature.path}
                    className="block p-6 bg-gray-50 dark:bg-gray-700 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="absolute inset-0 bg-primary-500 rounded-lg opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                    <feature.icon className="h-12 w-12 text-primary-500 mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">{feature.title}</h3>
                    <p className="mt-2 text-base text-gray-500 dark:text-gray-300">{feature.description}</p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;