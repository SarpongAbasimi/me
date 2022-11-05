import React from 'react'
import { Introduction } from '../../components/Introduction/Introduction'
import { summary } from '../../utils/summary'
import {
  flexContainer,
  childContainerStyle,
  introh1NameStyle,
  introPSytle,
  pWhoamiLinkStyle,
} from '../../utils/stylesDefinitions'

export const Home = React.memo(() => {
  return (
    <>
      <Introduction
        intro={summary}
        flexContainer={flexContainer}
        childContainerStyle={childContainerStyle}
        h1NameStyle={introh1NameStyle}
        pSytle={introPSytle}
        pWhoamiLinkStyle={pWhoamiLinkStyle}
      ></Introduction>
    </>
  )
})
