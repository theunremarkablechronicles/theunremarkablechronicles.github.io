import Link from 'next/link'
import styles from '../styles/header.module.css'
import blogConfig from 'blog.config'

const Header = ({ compact = false }) => {
  return (
    <header className={styles.header}>
      <div className={styles.topContainer}>
        {/* <a href={blogConfig.mainUrl}>
          <img src="/logo.svg" className={styles.tonariLogo} />
        </a> */}
        {compact && (
          <Link href={'/'}>
            <h2 id="blog">
              {/* <img src="/blog.svg" className={styles.blogLogoCompact} /> */}
              the unremarkable chronicles
            </h2>
          </Link>
        )}
      </div>
      {!compact && (
        <Link href="/">
          <h1 id="blog">
            {/* <img src="/blog.svg" className={styles.blogLogo} /> */}the
            unremarkable chronicles
          </h1>
        </Link>
      )}
    </header>
  )
}

export default Header
