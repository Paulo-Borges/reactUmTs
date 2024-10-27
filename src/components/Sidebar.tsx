import styles from './Sidebar.module.css'
import { PencilLine } from 'phosphor-react'
import Avatar from './Avatar'

const Sidebar = () => {
  return (
    
    <aside className={styles.sidebar}>
        <img className={styles.cover} src="https://images.unsplash.com/photo-1633195281926-59c0bf267653?q=50&w=670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <div className={styles.profile}>
           <Avatar  src="https://avatars.githubusercontent.com/u/84293209?v=4"/>
            <strong>Paulo Borges</strong>
            <span>Web Developer</span>
        </div>

        <footer>
            <a href="#">
              <PencilLine size={20}/>
                Editar o seu perfil
            </a>
        </footer>
    </aside>
  )
}

export default Sidebar
