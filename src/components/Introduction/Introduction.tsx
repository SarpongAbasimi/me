import React from 'react'

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
  }
}

export const Introduction = ({ intro }: IntroductionProp) => {
  return (
    <div>
      <h1 className="name">{intro.name}</h1>
      <p className="whoami">
        {intro.whoami} <a href={intro.company.site}>{intro.company.name}</a>
      </p>
      <p>{intro.hobbies}</p>
    </div>
  )
}
