import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Camera, Smile, AlertCircle } from 'lucide-react';

const FacialAnalysis = () => {
  const [isStreaming, setIsStreaming] = useState(false);
  const [currentEmotion, setCurrentEmotion] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const startWebcam = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setIsStreaming(true);
      }
    } catch (error) {
      console.error('Error accessing webcam:', error);
    }
  };

  const stopWebcam = () => {
    if (videoRef.current?.srcObject) {
      const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
      tracks.forEach(track => track.stop());
      setIsStreaming(false);
      setCurrentEmotion(null);
    }
  };

  // Simulated emotion detection (to be replaced with actual AI implementation)
  const detectEmotion = () => {
    const emotions = ['Happy', 'Neutral', 'Thoughtful', 'Calm', 'Focused'];
    const randomEmotion = emotions[Math.floor(Math.random() * emotions.length)];
    setCurrentEmotion(randomEmotion);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Facial Expression Analysis
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Our AI analyzes your facial expressions in real-time to help you understand your emotions better.
          </p>
        </motion.div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden">
          <div className="p-6">
            <div className="relative aspect-video bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden mb-6">
              {!isStreaming && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <Camera className="h-16 w-16 text-gray-400" />
                </div>
              )}
              <video
                ref={videoRef}
                autoPlay
                playsInline
                className={`w-full h-full object-cover ${!isStreaming ? 'hidden' : ''}`}
              />
            </div>

            <div className="flex justify-center space-x-4 mb-8">
              <button
                onClick={isStreaming ? stopWebcam : startWebcam}
                className="px-6 py-3 rounded-md text-white bg-primary-500 hover:bg-primary-600 transition-colors flex items-center space-x-2"
              >
                <Camera className="h-5 w-5" />
                <span>{isStreaming ? 'Stop Camera' : 'Start Camera'}</span>
              </button>
              {isStreaming && (
                <button
                  onClick={detectEmotion}
                  className="px-6 py-3 rounded-md text-white bg-secondary-500 hover:bg-secondary-600 transition-colors flex items-center space-x-2"
                >
                  <Smile className="h-5 w-5" />
                  <span>Detect Emotion</span>
                </button>
              )}
            </div>

            {currentEmotion && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 text-center"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Detected Emotion
                </h3>
                <p className="text-3xl font-bold text-primary-500">{currentEmotion}</p>
              </motion.div>
            )}
          </div>

          <div className="bg-gray-50 dark:bg-gray-700 px-6 py-4">
            <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-300">
              <AlertCircle className="h-4 w-4" />
              <p>Your privacy is important to us. Video data is processed locally and never stored.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacialAnalysis;