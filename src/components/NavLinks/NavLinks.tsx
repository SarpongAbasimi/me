import React from 'react'
import { Link } from 'react-router-dom'

type NavLinkProp = {
  links: { id: string; to: string; name: string }[]
  styles?: {
    [key: string]: string
  }
}
export const NavLinks = ({ styles, links }: NavLinkProp) => {
  return (
    <div style={{ ...styles }}>
      {links.map((link, _) => {
        return (
          <Link to={link.to} key={link.id}>
            {link.name}
          </Link>
        )
      })}
    </div>
  )
}
