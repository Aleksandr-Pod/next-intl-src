import styles from "./navbar.module.css"
import { useTranslations } from 'next-intl';

const menu = [
  { title: "nav1", goto: "" },
  { title: "nav2", goto: "" },
  { title: "nav3", goto: "" },
]

export default function MenuList() {
  const t = useTranslations("Index");
  return (
      <ul className={styles.menulist}>
      {menu.map(el => <li key={el.title}>{t(el.title)}</li>)}
      </ul>
  )
}