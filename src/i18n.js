import {notFound} from "next/navigation";
import {getRequestConfig} from 'next-intl/server';

const locales = ['ua', 'en', 'fr', 'bg', 'ru'];

export default getRequestConfig(async ({locale}) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale)) notFound();

  return {
    messages: (await import(`../messages/${locale}.json`)).default
  };
});