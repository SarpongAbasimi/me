import React from 'react'
import { CssStyleProps } from '../../Interfaces/Types'

interface BlogPostProprs {
  containerStyle?: CssStyleProps
  blogPosts: {
    id: string
    title: string
    subTitle: string
    link: string
  }[]
  ulElementStyle?: CssStyleProps
  h1Style?: CssStyleProps
  blogPostDiv?: CssStyleProps
  anchorStyle?: CssStyleProps
  otherProprs?: CssStyleProps
}

export const BlogPosts = ({
  containerStyle,
  blogPosts,
  h1Style,
  ulElementStyle,
  blogPostDiv,
  anchorStyle,
  otherProprs,
}: BlogPostProprs) => {
  return (
    <div style={{ ...containerStyle }}>
      <ul
        style={{
          ...ulElementStyle,
        }}
      >
        {blogPosts.map((post, _) => {
          return (
            <div
              style={{
                ...blogPostDiv,
              }}
              key={post.id}
            >
              <h1 style={{ ...h1Style }}>{post.title}</h1>
              <h3 style={{ ...otherProprs }}>{post.subTitle} 📖</h3>
              <a href={post.link} style={{ ...anchorStyle }}>
                Read {post.title}
              </a>
            </div>
          )
        })}
      </ul>
    </div>
  )
}
