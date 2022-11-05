import React from 'react'
import { CssStyleProps } from '../../Interfaces/Types'

interface MediaProps {
  data: {
    id: string
    title: string
    link: string
  }[]
  maniContainerStyle?: CssStyleProps
  h1css?: CssStyleProps
  otherProps?: CssStyleProps
  anchorStyle?: CssStyleProps
}
export const Media = ({
  data,
  maniContainerStyle,
  h1css,
  otherProps,
  anchorStyle,
}: MediaProps) => {
  return (
    <div style={{ ...maniContainerStyle }}>
      {data.map((value) => {
        return (
          <div key={value.id} style={{ ...otherProps }}>
            <a href={value.link} style={{ ...anchorStyle }}>
              <h1 style={{ ...h1css }}>{value.title}</h1>
            </a>
          </div>
        )
      })}
    </div>
  )
}
