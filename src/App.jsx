import {
  Header
} from "./components/Header"
import {
  Sidebar
} from "./components/Sidebar"
import {
  Post
} from "./components/Post"

import styles from './App.module.css'

import './global.css'

export function App() {
  return (
      <>
        <Header />
        <div
          className={styles.wrapper}
        >
          <Sidebar />

          <main>
            <Post
              author="Armando Silva"
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta eaque voluptatem sint, eius fugit, dolorum distinctio rem minus perferendis aut saepe totam quae fugiat aperiam, libero repudiandae quo ipsum corrupti!"
            />

            <Post
              author="Eduarda Maria"
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta eaque voluptatem sint, eius fugit, dolorum distinctio rem minus perferendis aut saepe totam quae fugiat aperiam, libero repudiandae quo ipsum corrupti!"
            />
          </main>
        </div>
      </>
    )
}
