import fs from 'fs'
import Link from 'next/link'
import Header from '../components/header'
import Byline from '../components/byline'
import Head from '../components/head'
import CoverImage from '../components/cover-image'

import blogStyles from '../styles/blog.module.css'
import sharedStyles from '../styles/shared.module.css'

import { BlogEntry, getBlogIndex } from '../lib/notion'
import { fetchImage } from '../lib/image-helpers'

type Props = {
  posts: BlogEntry[]
}

export async function getStaticProps(context) {
  const postsTable = await getBlogIndex()

  const posts = (
    await Promise.all(
      postsTable.map(async (post) => {
        if (post.cover[post.cover?.type]?.url) {
          await fetchImage(fs, post.cover[post.cover.type].url, post.id)
        } else {
          console.warn('cover missing for post:', post)
        }
        return post
      })
    )
  ).filter(Boolean)

  return {
    props: {
      posts,
    },
  }
}

const Index = ({ posts = [] }: Props) => {
  return (
    <>
      <Head titlePre="The Unremarkable Chronicles" />
      <Header />
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
                  <div className={blogStyles.title}>{post.title}</div>
                  {post.subtitle && (
                    <div className={blogStyles.subtitle}>{post.subtitle}</div>
                  )}
                </a>
              </Link>
              <Byline post={post} />
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Index
