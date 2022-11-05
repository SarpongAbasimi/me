import React from 'react'
import { CssStyleProps } from '../../Interfaces/Types'

interface NameProp {
  name: string
  styles?: CssStyleProps
  className?: string
  id?: string
}

export const Name = ({ name, styles, className }: NameProp) => {
  let classname = className == null ? 'name' : className
  return (
    <div className={classname} style={{ ...styles }}>
      ${name}
    </div>
  )
}
