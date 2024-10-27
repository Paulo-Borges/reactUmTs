import styles from './Header.module.css'

import igniteLogo from '../assets/ignite_simbol.svg'

console.log(igniteLogo)

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="Logotipo do ignite" />
      <strong>Borges Feed</strong>
    </header>
  )
}

export default Header
