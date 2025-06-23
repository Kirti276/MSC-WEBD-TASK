import React from 'react';
import { motion } from 'framer-motion';

const colorClasses = {
  blue: 'from-blue-500 to-blue-400',
  green: 'from-green-500 to-green-400',
  purple: 'from-purple-500 to-purple-400',
};

export default function SummaryCard({ title, value, icon, color }) {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      className={`bg-gradient-to-br ${colorClasses[color]} text-white rounded-xl shadow-lg p-6 flex items-center space-x-4 cursor-pointer`}
    >
      <div className="bg-white/30 p-4 rounded-full">
        <span className="text-3xl">{icon}</span>
      </div>
      <div>
        <p className="text-lg font-medium">{title}</p>
        <p className="text-2xl font-bold">{value}</p>
      </div>
    </motion.div>
  );
}