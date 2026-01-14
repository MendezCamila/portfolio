"use client";

import { useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";

const MetaUpdater: React.FC = () => {
  const { t } = useLanguage();

  useEffect(() => {
    const title = t('meta.title');
    const desc = t('meta.description');

    if (typeof document !== 'undefined') {
      document.title = title || document.title;
      let meta = document.querySelector('meta[name="description"]');
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', 'description');
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', desc || '');
    }
  }, [t]);

  return null;
};

export default MetaUpdater;
