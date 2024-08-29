'use client';

import { useTranslation } from 'react-i18next';

export default function HomePage() {
  const { t } = useTranslation(); // Sử dụng hook để lấy hàm dịch 't'

  return (
    <div className="container mx-auto p-4">
      bài 2
      <h1 className="text-2xl font-bold">{t('hello')}</h1>
      <p className="mt-4">{t('welcome_message')}</p>
      <nav>
        <ul className="flex space-x-4">
          <li>{t('home')}</li>
          <li>{t('about_us')}</li>
          <li>{t('contact_us')}</li>
        </ul>
      </nav>
      bài 3
      <h1 className="text-2xl font-bold">{t('title')}</h1>
      <p className="mt-4">{t('description')}</p>
    </div>
  );
}
