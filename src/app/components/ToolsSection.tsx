// components/ToolsSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import SectionHeader from './shared/SectionHeader';

interface TechBadgeProps {
  icon: string;
  name: string;
}

const TechBadge: React.FC<TechBadgeProps> = ({ icon, name }) => {
  return (
    <div className="flex items-center space-x-2 bg-indigo-800/30 px-3 py-2 rounded-lg transition-all duration-300 hover:bg-indigo-800/50 hover:scale-105">
      <img src={icon} alt={name} className="w-5 h-5" />
      <span className="text-sm text-gray-300">{name}</span>
    </div>
  );
};

interface TechCategoryProps {
  title: string;
  technologies: { icon: string; name: string }[];
}

const TechCategory: React.FC<TechCategoryProps> = ({ title, technologies }) => {
  return (
    <div className="bg-indigo-900/10 backdrop-blur-sm border border-indigo-500/20 rounded-xl p-6">
      <h3 className="text-xl font-semibold mb-4 text-indigo-400">{title}</h3>
      <div className="flex flex-wrap gap-3">
        {technologies.map((tech, index) => (
          <TechBadge key={index} icon={tech.icon} name={tech.name} />
        ))}
      </div>
    </div>
  );
};

// ToolsSection removed — kept as a no-op stub to avoid accidental imports elsewhere.
import React from 'react';

const ToolsSection: React.FC = () => null;

export default ToolsSection;