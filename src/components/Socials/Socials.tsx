import React from 'react'
import { IconDefinition } from '@fortawesome/fontawesome-common-types/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export interface SocialProps {
  hrefAttribuites: {
    id: string
    link: string
    icon: IconDefinition
    className?: string
    style?: {
      [key: string]: string
    }
  }[]
  otherProps: {
    [key: string]: string
  }
  container?: {
    className: string
    styles: {
      [key: string]: string
    }
  }
}

export const Socials = ({
  hrefAttribuites,
  container,
  otherProps,
}: SocialProps) => {
  let containerClassName = container == null ? 'socials' : container.className
  return (
    <div className={containerClassName} {...otherProps}>
      {hrefAttribuites.map((data, _) => {
        return (
          <a key={data.id} id={data.id} href={data.link}>
            <FontAwesomeIcon
              icon={data.icon}
              className={`${data.className == null ? '' : data.className}`}
            />
          </a>
        )
      })}
    </div>
  )
}
