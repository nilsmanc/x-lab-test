import { Route, Routes } from 'react-router-dom'
import News from '../../pages/News'
import Search from '../../pages/Search'

import styles from './Content.module.scss'

const Content: React.FC = () => {
  return (
    <div className={styles.content}>
      <Routes>
        <Route path='/' element={<News />} />
        <Route path='/address' element={<Search />} />
      </Routes>
    </div>
  )
}

export default Content
