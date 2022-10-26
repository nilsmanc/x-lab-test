import { Link } from 'react-router-dom'

import styles from './MenuItem.module.scss'

type MenuItemProps = {
  path: string
  src: string
  title: string
}

export const MenuItem: React.FC<MenuItemProps> = ({ path, src, title }) => {
  return (
    <Link className={styles.link} to={path}>
      <div className={styles.bar}>
        <div className={styles.icon}>
          <img className={styles.iconImage} src={src} />
        </div>
        <div className={styles.title}>
          <a>{title}</a>
        </div>
      </div>
    </Link>
  )
}
