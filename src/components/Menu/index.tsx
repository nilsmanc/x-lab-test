import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { MenuItem } from '../MenuItem'

import styles from './Menu.module.scss'

const Menu: React.FC = () => {
  const [visible, setVisible] = useState(false)

  const visibleHandler = () => {
    setVisible(!visible)
  }

  const items = [
    { path: '/', src: './static/home.PNG', title: 'Главная' },
    { path: '/address', src: './static/lupa.PNG', title: 'Поиск адресов' },
    { path: '', src: './static/cube.PNG', title: 'Таблицы' },
    { path: '', src: './static/calendar.PNG', title: 'Календарь' },
    { path: '', src: './static/location.PNG', title: 'Карты' },
    { path: '', src: './static/vidget.PNG', title: 'Виджеты' },
  ]

  const additionalItems = [
    { path: '', src: './static/peaple3.PNG', title: 'Настройки профиля' },
    { path: '', src: './static/finance.PNG', title: 'Управление финансами' },
  ]

  return (
    <div className={styles.menuWrapper}>
      <h3>Меню</h3>
      {items.map((item) => (
        <MenuItem key={item.src} path={item.path} src={item.src} title={item.title} />
      ))}
      <div className={styles.settings} onClick={visibleHandler}>
        <div className={styles.settingWrapper}>
          <div className={styles.icon}>
            <img src='./static/sett.PNG' alt='' />
          </div>
          <div className={styles.title}>
            <a>Настройки</a>
          </div>
        </div>
        <div>
          <div className={styles.icon}>
            <img src='./static/triple.PNG' alt='' />
          </div>
        </div>
      </div>
      {visible ? (
        <>
          <div className={styles.marginWrapper}>
            {additionalItems.map((item) => (
              <MenuItem path={item.path} src={item.src} title={item.title} />
            ))}
          </div>
        </>
      ) : (
        <></>
      )}
      <Link to='' className={styles.link}>
        <div className={styles.bar}>
          <div className={styles.icon}>
            <img src='./static/logout.PNG' alt='' />
          </div>
          <div className={styles.title}>
            <a>Выход</a>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Menu
