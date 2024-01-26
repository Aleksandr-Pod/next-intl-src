import BtnLang from "./button-lang"
import Logo from "./logo"
import MenuList from "./menuList"
import styles from "./navbar.module.css"

export default function Navbar() {

  return (
    <div className={styles.section}>
      <Logo />
      <MenuList />
      <BtnLang />
    </div>
  )
}