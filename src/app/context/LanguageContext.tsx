'use client';

import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

type LanguageContextType = {
  language: 'en' | 'es';
  toggleLanguage: () => void;
  t: (key: string) => string;
};

type TranslationsType = {
  [language: string]: {
    [key: string]: string;
  };
};

const translations: TranslationsType = {
  en: {
    // Navigation
    'nav.about': 'About Me',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.experience': 'Experience',
    'nav.contact': 'Contact',
    'nav.cv': 'Resume',
    'nav.education': 'Education',

    // Hero Section
    'hero.title': 'Software Developer | PHP & Laravel',
    'hero.name': 'Camila Mendez',
    'hero.badge': 'Backend Developer & System Analyst',
    'hero.subtitle': 'Building scalable applications with modern web technologies',
    'hero.cta': 'View My Work',
    'hero.university': 'National University of Misiones',
    'hero.degree': 'B.Sc. in Information Systems',
    'hero.github': 'GitHub',
    'hero.position.ml': 'Backend Developer',
    'hero.position.data': 'Full-Stack',

    // About Section
    'about.title': 'About Me',
    'about.description':
      "I'm a software developer passionate about backend and full-stack development. With experience in PHP, Laravel, Vue.js, and relational databases, I enjoy building applications that combine clean architecture with practical business value.",
    'about.card1.title': 'Backend Development',
    'about.card1.description':
      'Experience building APIs, implementing business logic, and managing authentication and authorization using PHP and Laravel.',
    'about.card2.title': 'Frontend & UX',
    'about.card2.description':
      'Skilled in developing intuitive interfaces with Vue.js and React, ensuring smooth user experiences.',
    'about.card3.title': 'Database & Cloud',
    'about.card3.description':
      'Knowledge of relational databases (PostgreSQL, MySQL) and cloud foundations (AWS Academy certified).',
    'about.profile.title': 'Professional Profile',
    'about.profile.p1':
      "As a developer with a strong academic background in Information Systems, I specialize in building and maintaining scalable web applications with PHP and Laravel.",
    'about.profile.p2':
      "In my projects, such as the 'Elisa Modas' e-commerce system, I designed and implemented supplier modules, automated purchase order flows, and payment integrations.",
    'about.profile.p3':
      'I have a solid foundation in backend development, complemented with frontend skills in Vue.js and React, and I am continuously learning cloud and data science technologies.',
    'about.contact.job': 'Software Developer',
    'about.contact.location': 'Misiones, Argentina',
    'about.contact.email': 'mendezcamilaitati@gmail.com', // correo actualizado

    // Skills Section
    'skills.title': 'Technical Skills',
    'skills.description': 'My main stack and tools as a developer',
    'skills.categories.ml': 'Backend Development',
    'skills.categories.backend': 'Frontend & UI',
    'skills.categories.databases': 'Databases & Cloud',
    'skills.stack': 'Technology Stack',

    // Projects Section
    'projects.title': 'Featured Projects',
    'projects.subtitle': 'Some projects where I applied my technical skills',
    'projects.viewcode': 'View Code',
    'projects.viewdemo': 'Live Demo',
    'projects.readarticle': 'Read Article',
    'projects.case': 'Case Study',
    'projects.download': 'Download',
    'projects.filters.all': 'All Projects',
    'projects.filters.ml': 'Backend',
    'projects.filters.data': 'Databases',
    // 'projects.filters.nlp' removed (not used)
    'projects.github': 'View More on GitHub',
    'projects.featured': 'Featured Project',
    'projects.elisa.title': 'Elisa Modas',
    'projects.elisa.desc':
      'Elisa Modas is an end-to-end management platform for the apparel sector. It enables sales, stock, customer and supplier management, product sizing and color variants, automated purchase orders and clearer real-time decision-making.',
    'projects.services.title': 'Service Management',
    'projects.services.desc': 'Web application focused on client, service and billing administration, designed to centralize processes, automate collections and simplify financial control clearly and efficiently.',
    'projects.simulation.title': 'Model Simulation',
    'projects.simulation.desc': 'Academic simulation projects with statistical tests and random number generation for decision making.',

    // Experience Section
    'experience.title': 'Professional Experience',
    'experience.description': 'My path as a software developer',
    'experience.current': 'Current Focus',
    'experience.repo': 'Repository',
    'experience.item1.title': 'Backend Developer – Java | Spring Boot',
    'experience.item1.description': 'Comprehensive system for client, service and billing management. Includes service creation and administration with different tariffs and VAT, bulk and individual invoicing, partial/full payment recording, cancellations with reasons and administrative reports. Implemented with layered architecture, validation, DTOs, REST controllers, JPA persistence and invoice state management.',
    'experience.item2.title': 'Full Stack Developer',
    'experience.item2.description': "End-to-end platform for apparel stores with stock monitoring, Mercado Pago integration, automated supplier orders and action auditing.",
    'experience.item3.title': 'Model Simulation & Analysis',
    'experience.item3.description': 'Academic projects implementing random number generation algorithms and statistical tests (Chi-Square, Poker) for decision making under uncertainty.',
    'experience.freelance': 'Freelance & University Projects',
    'experience.freelance.desc':
      'Development of academic and freelance projects, including e-commerce, supplier management systems, and automation of purchase flows.',

    // Contact Section
    'contact.title': 'Contact Me',
    'contact.description':
      'Interested in collaborating? Feel free to reach out via these channels.',
    'contact.email': 'Email',
    'contact.location': 'Location',
    'contact.connect': 'Connect',
    'contact.download': 'Download Resume',

    // Footer
    'footer.rights': 'All rights reserved',
    'footer.built': 'Built with',
    'footer.using': 'using Next.js and Tailwind CSS',
    // Education
    'education.title': 'Education',
    'education.description': 'My academic background and university trajectory',
    'education.courses.title': 'Courses & Certifications',
    'education.courses.description': 'Relevant complementary training and certifications',
    // Meta
    'meta.title': 'Camila Mendez - Systems Analyst',
    'meta.description': 'Web developer and systems analyst with experience in software projects and a focus on continuous improvement.',
  },
  es: {
    // Navigation
    'nav.about': 'Sobre mí',
    'nav.skills': 'Habilidades',
    'nav.projects': 'Proyectos',
    'nav.experience': 'Experiencia',
    'nav.contact': 'Contacto',
    'nav.cv': 'Currículum',
    'nav.education': 'Educación',

    // Hero Section
    'hero.title': 'Desarrolladora de Software | PHP & Laravel',
    'hero.name': 'Camila Mendez',
    'hero.badge': 'Desarrolladora Backend & Analista de Sistemas',
    'hero.subtitle':
      'Construyendo aplicaciones escalables con tecnologías web modernas',
    'hero.cta': 'Ver mi trabajo',
    'hero.university': 'Universidad Nacional de Misiones',
    'hero.degree': 'Lic en Sistemas de Información',
    'hero.github': 'GitHub',
    'hero.position.ml': 'Desarrolladora Backend',
    'hero.position.data': 'Full-Stack',

    // About Section
    'about.title': 'Sobre Mí',
    'about.description':
      'Me gusta entender el problema antes de escribir código. Disfruto trabajar en sistemas bien pensados, con lógica clara, buenas prácticas y foco en la calidad del software.',
    'about.card1.title': 'Backend',
    'about.card1.description':
      'Arquitecturas por capas, lógica de negocio y APIs REST.',
    'about.card2.title': 'Frontend & UX',
    'about.card2.description':
      'Interfaces claras, funcionales y orientadas al usuario.',
    'about.card3.title': 'Bases de Datos & Cloud',
    'about.card3.description':
      'Modelado, persistencia',
    'about.profile.title': 'Perfil Profesional',
    'about.profile.p1':
      'Como estudiante avanzada de Licenciatura en Sistemas e intermedia como Analista, me especializo en desarrollar aplicaciones web escalables con PHP y Laravel.',
    'about.profile.p2':
      "En mis proyectos, como el sistema de e-commerce 'Elisa Modas', diseñé e implementé módulos de proveedores, flujos automatizados de órdenes de compra e integraciones de pago.",
    'about.profile.p3':
      'Tengo una sólida base en backend y habilidades complementarias en frontend con Vue.js y React, y continúo formándome en tecnologías cloud y ciencia de datos.',
    'about.contact.job': 'Desarrolladora de Software',
    'about.contact.location': 'Misiones, Argentina',
    'about.contact.email': 'mendezcamilaitati@gmail.com', // correo actualizado

    // Skills Section
    'skills.title': 'Habilidades Técnicas',
    'skills.description': 'Mi stack principal y herramientas como desarrolladora',
    'skills.categories.ml': 'Desarrollo Backend',
    'skills.categories.backend': 'Frontend & UI',
    'skills.categories.databases': 'Bases de Datos & Cloud',
    'skills.stack': 'Stack Tecnológico',

    // Projects Section
    'projects.title': 'Proyectos Destacados',
    'projects.subtitle': 'Algunos proyectos donde apliqué mis habilidades técnicas',
    'projects.viewcode': 'Ver Código',
    'projects.viewdemo': 'Demo en Vivo',
    'projects.readarticle': 'Leer Artículo',
    'projects.case': 'Caso Práctico',
    'projects.download': 'Descargar',
    'projects.filters.all': 'Todos los Proyectos',
    'projects.filters.ml': 'Backend',
    'projects.filters.data': 'Bases de Datos',
    // 'projects.filters.nlp' removed (not used)
    'projects.github': 'Ver Más en GitHub',
    'projects.featured': 'Proyecto Destacado',
    'projects.elisa.title': 'Elisa Modas',
    'projects.elisa.desc':
      'Plataforma de e-commerce con gestión de proveedores, monitoreo automatizado de stock, flujos de órdenes de compra e integración con Mercado Pago.',
    'projects.services.title': 'Gestión de Servicios',
    'projects.services.desc': 'Aplicación web orientada a la administración de clientes, servicios y facturación, diseñada para centralizar procesos, automatizar cobros y facilitar el control financiero de manera clara y eficiente.',
    'projects.simulation.title': 'Simulación de Modelos',
    'projects.simulation.desc': 'Proyectos académicos de simulación con pruebas estadísticas y generación de números aleatorios para toma de decisiones.',

    // Experience Section
    'experience.title': 'Experiencia Profesional',
    'experience.description': 'Mi trayectoria como desarrolladora de software',
    'experience.current': 'Enfoque Actual',
    'experience.repo': 'Repositorio',
    'experience.freelance': 'Proyectos Freelance y Universitarios',
    'experience.freelance.desc':
      'Desarrollo de proyectos académicos y freelance, incluyendo e-commerce, sistemas de gestión de proveedores y automatización de flujos de compra.',

    // Contact Section
    'contact.title': 'Contáctame',
    'contact.description':
      '¿Interesado en colaborar? Podés contactarme a través de estos canales.',
    'contact.email': 'Email',
    'contact.location': 'Ubicación',
    'contact.connect': 'Conectar',
    'contact.download': 'Descargar Currículum',

    // Footer
    'footer.rights': 'Todos los derechos reservados',
    'footer.built': 'Construido con',
    'footer.using': 'usando Next.js y Tailwind CSS',
    // Education
    'education.title': 'Educación',
    'education.description': 'Mi formación académica y trayectoria universitaria',
    'education.courses.title': 'Cursos y Capacitaciones',
    'education.courses.description': 'Formación complementaria y certificaciones relevantes',
    // Experience details (ES)
    'experience.item1.title': 'Desarrolladora Backend – Java | Spring Boot',
    'experience.item1.description': `Sistema integral para la gestión de clientes, servicios y facturación. Incluye creación y administración de servicios con diferentes tarifas e IVA, facturación masiva e individual, registro de pagos parciales/totales, anulaciones con motivo y reportes administrativos. Implementado con arquitectura por capas, validaciones, DTOs, controladores REST, persistencia con JPA y manejo de estados de facturas.`,
    'experience.item2.title': 'Desarrolladora Full Stack',
    'experience.item2.description': 'Plataforma integral para gestión de tiendas de indumentaria. Incluye administración de stock mínimo, integración con Mercado Pago, automatización de pedidos a proveedores y sistema de auditoría de acciones.',
    'experience.item3.title': 'Desarrollo y Análisis',
    'experience.item3.description': 'Proyectos académicos de simulación con pruebas estadísticas y generación de números aleatorios para toma de decisiones.',
    // Meta
    'meta.title': 'Camila Mendez - Analista en sistemas',
    'meta.description': 'Desarrolladora web y analista en sistemas con experiencia en proyectos de software y un enfoque en la mejora continua.',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Try to get the stored language preference or default to 'en'
  const [language, setLanguage] = useState<'en' | 'es'>('en');

  // Load saved language preference from localStorage on initial render
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'es')) {
      setLanguage(savedLanguage as 'en' | 'es');
    }
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'es' : 'en';
    setLanguage(newLanguage);
    // Save preference to localStorage
    localStorage.setItem('language', newLanguage);
  };

  const t = (key: string): string => {
    // Safely access translations with proper fallbacks
    if (!translations[language]) {
      return key;
    }
    
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};