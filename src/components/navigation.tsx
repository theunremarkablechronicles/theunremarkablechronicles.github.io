import Link from 'next/link'
import styles from '../styles/navigation.module.css'
import blogConfig from 'blog.config'

const Navigation = () => {
  return (
    <div className={styles.topContainer}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href={'/'}>
            <p>Home</p>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href={'/blog'}>
            <p>Blog</p>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Navigation
