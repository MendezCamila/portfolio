'use client';

import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

interface SkillCategoryProps {
  title: string;
  technologies: { icon: string; name: string; darkIcon?: string }[];
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, technologies }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-indigo-900/10 backdrop-blur-sm border border-indigo-500/20 rounded-xl p-6 mx-auto max-w-3xl w-full"
    >
      {title ? <h3 className="text-xl font-semibold mb-6 text-indigo-300">{title}</h3> : null}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 justify-items-center">
        {technologies.map((tech, index) => (
          <div key={index} className="flex flex-col items-center space-y-2">
            <div className="w-16 h-16 rounded-lg overflow-hidden flex items-center justify-center transition-transform duration-200 hover:scale-105">
              <img
                src={tech.darkIcon || tech.icon}
                alt={tech.name}
                className={`w-full h-full object-cover ${
                  (!tech.darkIcon && (tech.name === 'OpenAI' || tech.name === 'AWS'))
                    ? 'filter invert brightness-0 contrast-100'
                    : ''
                }`}
              />
            </div>
            <span className="text-sm text-center text-gray-200">{tech.name}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const SkillsSection: React.FC = () => {
  const { t } = useLanguage();

  // Mantener solo el apartado 'Stack Tecnológico' con las imágenes solicitadas
  const techCategories = [
    {
      title: '',
      technologies: [
        { icon: "/html.png", name: "HTML" },
        { icon: "/css.png", name: "CSS" },
        { icon: "/javascript.png", name: "JavaScript" },
        { icon: "/ts.png", name: "TypeScript" },
        { icon: "/java.png", name: "Java" },
        { icon: "/php.png", name: "PHP" },
        { icon: "/laravel.png", name: "Laravel" },
        { icon: "/livewire.png", name: "Livewire" },
        { icon: "/git.png", name: "Git" },
        { icon: "/github.png", name: "GitHub" },
        { icon: "/mysql.png", name: "MySQL" },
        { icon: "/springboot.png", name: "Spring Boot" },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          {/* H1 mejorado para mejor contraste */}
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">{t('skills.title')}</h2>
          <div className="h-1 w-20 bg-indigo-500 mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            {t('skills.description')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative py-10"
        >
          {/* Background effects */}
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 rounded-xl"></div>

          {/* Tech categories - Ahora solo 2 columnas para dar más espacio */}
          <div className="flex justify-center gap-8 max-w-5xl mx-auto">
            {techCategories.map((category, index) => (
              <SkillCategory 
                key={index} 
                title={category.title} 
                technologies={category.technologies} 
              />
            ))}
          </div>
        </motion.div>
        
        {/* Floating logos removed to avoid duplication and keep a single clean stack card */}
      </div>
    </section>
  );
};

export default SkillsSection;