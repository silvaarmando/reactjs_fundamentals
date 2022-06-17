import {
  PencilLine
} from 'phosphor-react'

import styles from './Sidebar.module.css'

export function Sidebar() {
  return (
    <aside
      className={styles.sidebar}
    >
      <img
        className={styles.cover}
        src='https://images.unsplash.com/photo-1486572788966-cfd3df1f5b42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=50'
        alt='Cover - Imagem de Capa do perfil do usuário da aplicação Ignite Feed'
      />

      <div
        className={styles.profile}
      >
        <img
          className={styles.avatar}
          src="https://avatars.githubusercontent.com/u/58279161?v=4"
          alt="Imagem de Perfil do Usuário na Aplicação Ignite Feed"
        />

        <strong>
          Armando Silva
        </strong>
        <span>
          Software Web Developer
        </span>
      </div>

      <footer>
        <a
          href='#'
        >
          <PencilLine
            size={20}
          />

          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}