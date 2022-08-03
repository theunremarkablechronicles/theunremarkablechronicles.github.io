import fs from 'fs'
import Link from 'next/link'
import Header from '../components/header'
import Byline from '../components/byline'
import Head from '../components/head'
import CoverImage from '../components/cover-image'

import blogStyles from '../styles/blogpage.module.css'
import sharedStyles from '../styles/shared.module.css'

import { BlogEntry, getAllPosts, getBlogIndex } from '../lib/notion'
import Navigation from 'src/components/navigation'

type Props = {
  posts: BlogEntry[]
}

export async function getStaticProps(context) {
  const posts = await getAllPosts()

  return {
    props: {
      posts,
    },
  }
}

const Blog = ({ posts = [] }: Props) => {
  return (
    <>
      <Head titlePre="The Unremarkable Chronicles" />
      <Header>
        <Navigation />
      </Header>
      <div
        className={`${sharedStyles.layout} ${blogStyles.blogIndex} ${blogStyles.blogContainer}`}
      >
        {posts.length === 0 && (
          <p className={blogStyles.noPosts}>There are no posts yet</p>
        )}
        {posts.map((post) => {
          return (
            <div className={blogStyles.postPreview} key={post.id}>
              <Link href="/[slug]" passHref as={`/${post.slug}`}>
                <a>
                  <CoverImage post={post} />
                </a>
              </Link>
              <div className={blogStyles.postPreviewText}>
                <Link href="/[slug]" passHref as={`/${post.slug}`}>
                  <a>
                    <div className={blogStyles.title}>{post.title}</div>
                    {post.subtitle && (
                      <div className={blogStyles.subtitle}>{post.subtitle}</div>
                    )}
                  </a>
                </Link>
                <Byline post={post} />
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Blog
