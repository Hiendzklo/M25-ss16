import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enMessages from '../messages/en.json';
import viMessages from '../messages/vi.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enMessages,
      },
      vi: {
        translation: viMessages,
      },
    },
    lng: 'en', // Ngôn ngữ mặc định có thể thay đổi động dựa trên người dùng
    fallbackLng: 'en', // Ngôn ngữ dự phòng nếu không tìm thấy bản dịch
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
