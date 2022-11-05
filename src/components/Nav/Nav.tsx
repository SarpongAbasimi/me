import React from 'react'
import { CssStyleProps } from '../../Interfaces/Types'

type NavProps = {
  children: React.ReactNode
  styles?: CssStyleProps
}

export const Nav = ({ children, styles }: NavProps) => {
  return (
    <nav style={{ ...styles }}>
      <>{children}</>
    </nav>
  )
}
