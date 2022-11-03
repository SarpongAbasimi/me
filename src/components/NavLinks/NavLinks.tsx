import React from 'react'
import { Link } from 'react-router-dom'
import { CssStyleProps } from '../../Interfaces/Types'

type NavLinkProp = {
  links: { id: string; to: string; name: string }[]
  ulElementStyles?: CssStyleProps
  liElementStyles?: CssStyleProps
  otherCssProps?: CssStyleProps
  children?: React.ReactNode
}
export const NavLinks = ({
  ulElementStyles,
  links,
  liElementStyles,
  otherCssProps,
  children,
}: NavLinkProp) => {
  return (
    <ul style={{ ...ulElementStyles }}>
      {links.map((link, _) => {
        return (
          <Link to={link.to} key={link.id} style={{ ...otherCssProps }}>
            <li style={{ ...liElementStyles }}>{link.name}</li>
          </Link>
        )
      })}
      <>{children}</>
    </ul>
  )
}
