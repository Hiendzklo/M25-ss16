'use client';

import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';

export default function HomePage() {
  const { t, i18n } = useTranslation(); // Sử dụng hook từ react-i18next
  const router = useRouter();

  // Hàm để xử lý thay đổi ngôn ngữ
  const handleChangeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLocale = e.target.value;
    // Cập nhật ngôn ngữ cho i18n
    i18n.changeLanguage(selectedLocale);
    // Điều hướng đến URL mới với ngôn ngữ đã chọn
    router.push(`/${selectedLocale}`);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">{t('title')}</h1>
      <p className="mt-4">{t('description')}</p>
      
      {/* Select để thay đổi ngôn ngữ */}
      <select
        value={i18n.language}
        onChange={handleChangeLanguage}
        className="mt-4 border p-2"
      >
        <option value="en">English</option>
        <option value="vi">Tiếng Việt</option>
      </select>
    </div>
  );
}
