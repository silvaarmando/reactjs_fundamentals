import styles from './Header.module.css'

import LogoIgnite from '../assets/ignite-logo.svg'

export function Header() {
  return (
    <header
      className={styles.header}
    >
      <img
        src={LogoIgnite}
        alt="Logotipo da Aplicação FeedIgnite"
      />
    </header>
  )
}