import React from 'react'
import { CssStyleProps } from '../../Interfaces/Types'

type IntroductionProp = {
  intro: {
    name: string
    whoami: string
    company: {
      name: string
      site: string
    }
    media?: string
    hobbies?: string
    passion?: string
  }
  flexContainer?: CssStyleProps
  childContainerStyle?: CssStyleProps
  h1NameStyle?: CssStyleProps
  pSytle?: CssStyleProps
  pWhoamiLinkStyle?: CssStyleProps
  pHobbiesStyle?: CssStyleProps
}

export const Introduction = ({
  intro,
  childContainerStyle,
  flexContainer,
  h1NameStyle,
  pSytle,
}: IntroductionProp) => {
  return (
    <div style={{ ...flexContainer }}>
      <div style={{ ...childContainerStyle }}>
        <h1 className="name" style={{ ...h1NameStyle }}>
          {intro.name}
        </h1>
        <p className="whoami" style={{ ...pSytle }}>
          {intro.whoami} <a href={intro.company.site}>{intro.company.name}</a>
        </p>
        <p className="passion" style={{ ...pSytle }}>
          {intro.passion}
        </p>
        <p className="hobbies" style={{ ...pSytle }}>
          {intro.hobbies}
        </p>
      </div>
    </div>
  )
}
