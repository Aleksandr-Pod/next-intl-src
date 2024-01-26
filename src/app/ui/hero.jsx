import { getTranslations } from "next-intl/server"
import styles from "../page.module.css"

export default async function Hero() {
  const t = await getTranslations("Index");

  return ( <h1>{t('title')}</h1>  )
}