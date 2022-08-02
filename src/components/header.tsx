import Link from 'next/link'
import styles from '../styles/header.module.css'
import blogConfig from 'blog.config'
import Navigation from './navigation'

const Header = ({ children = null, compact = false }) => {
  return (
    <header className={styles.header}>
      <div className={styles.topContainer}>
        {compact && (
          <Link href={'/'}>
            <h2 id="blog">The Unremarkable Chronicles</h2>
          </Link>
        )}
      </div>
      {!compact && (
        <Link href="/">
          <h1 id="blog">The Unremarkable Chronicles</h1>
        </Link>
      )}
      {children}
    </header>
  )
}

export default Header
