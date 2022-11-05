import React from 'react'
import {
  flexContainer,
  h1TitleSyle,
  ulElementStyle,
  blogPostDiv,
  pWhoamiLinkStyle,
} from '../../utils/stylesDefinitions'
import { BlogPosts } from '../../components/BlogPosts/BlogPosts'
import { posts } from '../../utils/blogPost'

export const Blog = () => {
  return (
    <>
      <BlogPosts
        containerStyle={{
          ...flexContainer,
          height: '98vh',
        }}
        blogPosts={posts}
        h1Style={h1TitleSyle}
        ulElementStyle={ulElementStyle}
        blogPostDiv={blogPostDiv}
        anchorStyle={{ ...pWhoamiLinkStyle, fontFamily: 'var(--oSans)' }}
        otherProprs={{
          color: 'var(--textNormalColor)',
          fontFamily: 'var(--oSans)',
          fontWeight: '500',
        }}
      />
    </>
  )
}
