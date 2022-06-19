import styles from './Post.module.css'

export function Post() {
  return (
    <article
      className={styles.post}
    >
      <header>
        <div
          className={styles.author}
        >
          <img
            className={styles.avatar}
            src="https://avatars.githubusercontent.com/u/58279161?v=4"
            alt="Avatar foto do Usuário no Post"
          />
          <div
            className={styles.authorInfo}
          >
            <strong>
              Armando Silva
            </strong>
            <span>
              Software Web Developer
            </span>
          </div>
        </div>
      </header>

      <div
        className={styles.content}
      >
        <p>
          Fala Galera
        </p>
        <p>
          Acabei de subir mais um projeto para o meu portfolio. É um projeto que fiz no NLW Return, evento da Rocketseat!
        </p>
        <p>
          <a
            href=''
          >
            armandosilva.dev/widgetcursor      
          </a>
        </p>
        <p>
          <a
            href=''
          >
            #newproject #nlw #rocketseat #nlwreturn
          </a>
        </p>        
      </div>
    </article>
  )
}