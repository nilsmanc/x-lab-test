import React from 'react'

import styles from './Header.module.scss'

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.iconFlex}>
        <div className={styles.icon}>
          <img className={styles.image} src='./static/key2.PNG' />
        </div>
        <div> Wrench CRM</div>
      </div>
      <div className={styles.iconFlex}>
        <div className={styles.icon}>
          <img className={styles.image} src='./static/peaple2.PNG' />
        </div>
        <div className={styles.title}>Frontend Developer</div>
      </div>
    </div>
  )
}

export default Header
