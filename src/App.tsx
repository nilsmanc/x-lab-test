import Content from './components/Content'
import Header from './components/Header'
import Menu from './components/Menu'

import styles from './App.module.scss'

const App: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.content}>
        <Menu />
        <Content />
      </div>
    </div>
  )
}

export default App
