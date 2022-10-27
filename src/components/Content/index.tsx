import { Route, Routes } from 'react-router-dom'

import News from '../../pages/News'
import Address from '../../pages/Address'

import styles from './Content.module.scss'

const Content: React.FC = () => {
  return (
    <div className={styles.content}>
      <Routes>
        <Route path='/' element={<News />} />
        <Route path='/address' element={<Address />} />
      </Routes>
    </div>
  )
}

export default Content
