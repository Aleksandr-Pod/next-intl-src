import styles from '../page.module.css'
import BtnLang from '../ui/button-lang.jsx'
import Navbar from '../ui/navbar.jsx'
import Hero from '../ui/hero.jsx'

export default function Home() {

  return (
    <main className={styles.main}>
      <Navbar />
      <Hero />
    </main>
  )
}
