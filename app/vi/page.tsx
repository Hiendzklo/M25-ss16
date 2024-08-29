'use client';

import { useTranslation } from 'react-i18next';

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">{t('hello')}</h1>
      <p>{t('welcome_message')}</p>
    </div>
  );
}
