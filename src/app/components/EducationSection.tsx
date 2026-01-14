import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { motion } from "framer-motion";

const EducationSection = () => {
  const { t } = useLanguage();

  const education = [
    {
      degree: "Lic en Sistemas de Información",
      institution: "Universidad Nacional de Misiones",
      location: "Misiones, Argentina",
      period: "Feb. 2019 – Actualidad",
      description:
        "Estudiante avanzada en la carrera de Lic en Sistemas de Información, con enfoque en desarrollo de software, análisis de sistemas y bases de datos.",
      highlights: [],
    },
    {
      degree: "Analista en Sistemas de Computación",
      institution: "Universidad Nacional de Misiones",
      location: "Misiones, Argentina",
      period: "Feb. 2019 – Mar. 2025",
      description:
        "Título intermedio obtenido durante la Licenciatura. Formación en programación, bases de datos, ingeniería de software y metodologías ágiles.",
      highlights: [],
    },
  ];

  const courses = [
    {
      course: "AWS Academy Graduate - Cloud Foundations",
      institution: "AWS Academy",
      period: "2025",
      description:
        "Fundamentos de computación en la nube, servicios principales de AWS y buenas prácticas para entornos escalables y seguros.",
    },
    {
      course: "Introducción a la Ciencia de Datos",
      institution: "Santander Open Academy",
      period: "En curso",
      description:
        "Capacitación en análisis de datos, visualización y fundamentos de machine learning.",
    },
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* ---- EDUCATION ---- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('education.title')}</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              {t('education.description')}
            </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-12 bg-white rounded-xl overflow-hidden shadow-md border border-gray-100"
            >
              <div className="p-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {edu.degree}
                    </h3>
                    {edu.institution && (
                      <p className="text-blue-600 font-medium">
                        {edu.institution}
                      </p>
                    )}
                  </div>
                  <div className="mt-2 md:mt-0 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    {edu.period}
                  </div>
                </div>
                <p className="text-gray-700 mb-4">{edu.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ---- COURSES ---- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 mt-20"
        >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('education.courses.title')}
            </h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              {t('education.courses.description')}
            </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-12 bg-white rounded-xl overflow-hidden shadow-md border border-gray-100"
            >
              <div className="p-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {course.course}
                    </h3>
                    <p className="text-blue-600 font-medium">
                      {course.institution}
                    </p>
                  </div>
                  <div className="mt-2 md:mt-0 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    {course.period}
                  </div>
                </div>
                <p className="text-gray-700">{course.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;

