import Link from "next/link"
import styles from "./btnStyle.module.css"

export default function BtnLang() {
  const lang = ['ua', 'en', 'fr', 'bg', 'ru']
  return (
    lang.map(el => (
      <Link href={`/${el}`}>
        <button type="button" className={styles.btn}>{el}</button>
      </Link>
    ))
  )
}