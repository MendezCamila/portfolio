'use client';

import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

interface TimelineItemProps {
  title: string;
  company?: string;
  date: string;
  description: string;
  tags?: string[];
  icon: React.ReactNode;
  isActive?: boolean;
  repo?: string;
}

const ExperienceCard: React.FC<TimelineItemProps> = ({
  title,
  company,
  date,
  description,
  tags,
  icon,
  isActive,
  repo,
}) => {
  const { t } = useLanguage();
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      className="mb-6"
    >
      <div className={`bg-white rounded-lg shadow p-6 border ${isActive ? 'border-l-4 border-l-indigo-600' : 'border-gray-100'}`}>
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 flex items-center justify-center text-indigo-600">{icon}</div>
          <div className="flex-1">
            <div className="text-sm text-indigo-600 font-medium mb-1">{date}</div>

            <h3 className="text-xl font-bold mb-1">
              {title}
              {company && <span className="text-gray-600"> @ {company}</span>}
            </h3>

            <p className="text-gray-600 mb-3">{description}</p>

            {tags && tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-3">
                {tags.map((tag, index) => (
                  <span key={index} className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700">
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {repo && (
              <div className="mt-3">
                <a
                  href={repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md text-sm"
                >
                  {t('experience.repo')}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                  </svg>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ExperienceSection: React.FC = () => {
  const { t } = useLanguage();

  const experiences = [
  {
    title: t('experience.item1.title'),
    date: "Octubre 2025 - Diciembre 2025",
    description: t('experience.item1.description'),
    tags: ["Java 17", "Spring Boot 3", "Spring Data JPA", "MySQL", "Maven", "Git"],
    repo: 'https://github.com/MendezCamila/GestionServicios',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-7-4h.01M9 16h.01"></path>
      </svg>
    ),
    isActive: true
  },
  {
    title: t('experience.item2.title'),
    company: "Elisa Modas (Freelance)",
    date: "Abril 2024 - Marzo 2025",
    description: t('experience.item2.description'),
    tags: ["PHP", "Laravel 11", "Livewire", "MySQL", "JavaScript", "Bootstrap"],
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
      </svg>
    )
  },
  {
    title: t('experience.item3.title'),
    company: "Simulación de Modelos (Académico)",
    date: "Marzo 2025 - Julio 2025",
    description: t('experience.item3.description'),
    tags: ["Astro", "React", "Supabase", "Análisis Estadístico", "Starlight"],
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
      </svg>
    )
  },
];


  return (
    <section id="experience" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('experience.title')}</h2>
          <div className="h-1 w-20 bg-indigo-500 mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            {t('experience.description')}
          </p>
        </motion.div>
        
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={index}
              title={exp.title}
              company={exp.company}
              date={exp.date}
              description={exp.description}
              tags={exp.tags}
              icon={exp.icon}
              isActive={exp.isActive}
              repo={exp.repo}
            />
          ))}
        </div>
        
        {/* Counters removed per request */}
      </div>
    </section>
  );
};

export default ExperienceSection;