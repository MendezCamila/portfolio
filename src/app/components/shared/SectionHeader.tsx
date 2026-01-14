// components/shared/SectionHeader.jsx
import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  title: string;
  description: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, description }) => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="mb-16 text-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
      <div className="h-1 w-20 bg-indigo-500 mx-auto mb-8"></div>
      <p className="text-gray-300 max-w-3xl mx-auto text-lg">
        {description}
      </p>
    </motion.div>
  );
};

export default SectionHeader;