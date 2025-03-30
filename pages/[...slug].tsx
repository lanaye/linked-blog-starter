import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import { getPostBySlug, getAllPosts } from '../lib/api'
import { markdownToHtml } from '../lib/markdownToHtml'
import type PostType from '../interfaces/post'
import path from 'path'
import PostSingle from '../components/blog/post-single'
import Layout from '../components/misc/layout'
import { NextSeo } from 'next-seo'
import MainPage from '../components/MainPage/MainPage'
import GeoPage from '../components/GeoPage/GeoPage'
import GeoPageRegion from '../components/GeoPage/GeoPageRegion/GeoPageRegion'
import GeoPageCity from '../components/GeoPage/GeoPageCity/GeoPageCity'
import Characters from '../components/Characters/Characters'

type Items = {
  title: string,
  excerpt: string,
}

type Props = {
  post: PostType
  slug: string
  backlinks: { [k: string]: Items }
}

export default function Post({ post, backlinks }: Props) {
  const router = useRouter()
  const description = post.excerpt.slice(0, 155)
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  const getPage = (post: PostType) => {
    if (post.slug === 'home') {
      return <MainPage />
    }
    if (post.slug === 'geo') {
      return <GeoPage />
    }
    if (post.slug.includes('geo')) {
      return <GeoPageRegion post={post} />
    }
    if (post.slug.includes('city')) {
      return <GeoPageCity post={post} />
    }
    if (post.slug === 'characters') {
      return <Characters post={post} />
    }
    return <PostSingle
      title={post.title}
      content={post.content}
    />
  }
  return (
    <>
      {router.isFallback ? (
        <h1>Loading…</h1>
      ) : (
        <Layout isNew={post.slug === 'draft'}>
          <NextSeo
            title={post.title}
            description={description}
            openGraph={{
              title: post.title,
              description,
              type: 'article',
            }}
          />
          {getPage(post)}
        </Layout>
      )}
    </>
  )
}

type Params = {
  params: {
    slug: string[]
    backlinks: string[]
  }
}

export async function getStaticProps({ params }: Params) {
  const slug = path.join(...params.slug)
  const post = await getPostBySlug(slug, [
    'title',
    'excerpt',
    'slug',
    'content',
    'backLink',
  ])

  const content = await markdownToHtml(post.content || '', slug)

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = await getAllPosts(['slug'])
  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug.split(path.sep),
        },
      }
    }),
    fallback: false,
  }
}
