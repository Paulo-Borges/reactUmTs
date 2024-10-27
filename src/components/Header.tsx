import styles from './Header.module.css'

import igniteLogo from '../assets/ignite_simbol.svg'

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="Logotipo do ignite" />
      <a href="https://www.linkedin.com/in/paulo-borges-de-almeida-b543b3242/" target='_blank'><strong>Borges Feed</strong></a>
      
    </header>
  )
}

export default Header
