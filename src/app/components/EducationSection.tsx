import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { motion } from "framer-motion";

const EducationSection = () => {
  const { t } = useLanguage();

  const educationKeys = ["education.item1", "education.item2"];

  const coursesKeys = ["education.course1", "education.course2"];

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
          {educationKeys.map((key, index) => (
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
                      {t(`${key}.degree`)}
                    </h3>
                    <p className="text-blue-600 font-medium">{t(`${key}.institution`)}</p>
                  </div>
                  <div className="mt-2 md:mt-0 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    {t(`${key}.period`)}
                  </div>
                </div>
                <p className="text-gray-700 mb-4">{t(`${key}.description`)}</p>
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
          {coursesKeys.map((key, index) => (
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
                    <h3 className="text-2xl font-bold text-gray-900">{t(`${key}.title`)}</h3>
                    <p className="text-blue-600 font-medium">{t(`${key}.institution`)}</p>
                  </div>
                  <div className="mt-2 md:mt-0 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">{t(`${key}.period`)}</div>
                </div>
                <p className="text-gray-700">{t(`${key}.description`)}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;

