import styles from './App.module.css'
import Post from './components/Post'

import './global.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import { PostType } from './components/Post'


const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/84293209?v=4",
      name: 'Borges',
      role: 'Web Design'
    },
    content: [
      { type: 'paragraph', content: 'Sou Desenvolvedor'},
      { type: 'paragraph', content: 'acabei de subir um projeto no meu portifório. É um projeto que fiz no NLW RETURN, evento da Rocketseat. O nome do projeto é DoctorCare'},
      { type: 'link', content: 'Borges.design/doctorcare'},
     
    ],
    publishedAt: new Date('2024-10-23 17:30:30')    
  },

  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/maykbrito.png",
      name: 'Mayk Brito',
      role: 'Educator @Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraaa'},
      { type: 'paragraph', content: 'acabei de subir um projeto no meu portifório. É um projeto que fiz no NLW RETURN, evento da Rocketseat. O nome do projeto é DoctorCare'},
      { type: 'link', content: 'Jane.design/doctorcare'},
     
    ],
    publishedAt: new Date('2024-10-10 17:30:30')    
  },
];

const App = () => {
  return (
    <div>
      <Header />

    <div className={styles.wrapper}>
      <Sidebar />
      <main>
      {posts.map(post => {
        return(
          <Post
          key={post.id}
          post={post}
          />
        ) 
      })}
      </main>
    </div>
    </div>
  )
}

export default App
