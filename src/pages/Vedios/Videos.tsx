import React from 'react'
import { Media } from '../../components/Media/Media'
import { tutorials } from '../../utils/talks'
import {
  flexContainer,
  h1TitleSyle,
  pWhoamiLinkStyle,
} from '../../utils/stylesDefinitions'

export const Vedios = React.memo(() => {
  return (
    <Media
      data={tutorials}
      maniContainerStyle={{
        ...flexContainer,
        flexDirection: 'column',
      }}
      h1css={{
        ...h1TitleSyle,
        fontFamily: 'var(--oSans)',
        fontWeight: '500',
        fontSize: '28px',
      }}
      otherProps={{
        margin: '4px',
        width: '350px',
        alignSelf: 'center',
        padding: '10px',
      }}
      anchorStyle={pWhoamiLinkStyle}
    />
  )
})
