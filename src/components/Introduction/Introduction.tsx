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
    channelName?: string
    findMe?: string
    mediaNamesAndLinks?: { id: string; name: string; link: string }[]
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
  pWhoamiLinkStyle,
}: IntroductionProp) => {
  return (
    <div style={{ ...flexContainer }} className="home_flex_container">
      <h1 style={{ color: 'white' }}>Do you show up</h1>
      <div style={{ ...childContainerStyle }} className="home_child_container">
        <h1 className="name" style={{ ...h1NameStyle }}>
          {intro.name}
        </h1>
        <p className="whoami" style={{ ...pSytle }}>
          {intro.whoami}{' '}
          <a href={intro.company.site} style={{ ...pWhoamiLinkStyle }}>
            {intro.company.name}
          </a>
        </p>
        <p className="passion" style={{ ...pSytle }}>
          {intro.passion}
          <a href={intro.media} style={{ ...pWhoamiLinkStyle }}>
            {intro.channelName}
          </a>
        </p>
        <p className="hobbies" style={{ ...pSytle }}>
          {intro.hobbies}
        </p>
        <p className="find_me" style={{ ...pSytle }}>
          {intro.findMe}
          {intro.mediaNamesAndLinks?.map((data, _) => {
            return (
              <a
                href={data.link}
                style={{ ...pWhoamiLinkStyle, margin: '2px' }}
                key={data.id}
              >
                {data.name}
              </a>
            )
          })}
        </p>
      </div>
    </div>
  )
}
