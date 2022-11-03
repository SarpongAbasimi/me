import React from 'react'
import { Nav } from '../../components/Nav/Nav'
import { NavLinks } from '../../components/NavLinks/NavLinks'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import { Introduction } from '../../components/Introduction/Introduction'
import { summary } from '../../utils/summary'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { navSocials } from '../../utils/socialsLinks'
import {
  navLinksCss,
  navCss,
  liElementCss,
  fontAwesonIconCss,
} from '../../utils/stylesDefinitions'

export const Home = () => {
  const flexContainer = {
    width: '100%',
    // backgroundColor: 'green',
    display: 'flex',
    paddingTop: '3%',
    justifyContent: 'center',
  }

  const childContainerStyle = {
    width: '50%',
    // backgroundColor: 'blue',
    padding: '1%',
  }

  const introh1NameStyle = {
    color: 'var(--fontColour)',
    fontWeight: '800',
    fontSize: '2.25em',
    lineheight: '1.1111111',
    fontFamily: 'var(--mons)',
  }
  const introPSytle = {
    paddingTop: '5%',
    fontSize: '18px',
    color: '#847f7f',
    marginTop: '1em',
    marginBottom: '1.25em',
    fontFamily: 'var(--oSans)',
  }

  return (
    <>
      <Nav styles={navCss}>
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <NavLinks
                  links={[
                    { id: 'blog', to: '/blog', name: 'Blog' },
                    { id: 'projects', to: '/projects', name: 'Projects' },
                    { id: 'talks', to: '/talks', name: 'Talks' },
                  ]}
                  ulElementStyles={navLinksCss}
                  liElementStyles={liElementCss}
                  otherCssProps={{ textDecoration: 'none' }}
                >
                  {navSocials.map((value, _) => {
                    return (
                      <a href={value.link} key={value.id}>
                        <FontAwesomeIcon
                          icon={value.fontAwesonIcon}
                          style={{ ...fontAwesonIconCss }}
                        />
                      </a>
                    )
                  })}
                </NavLinks>
              }
            ></Route>
          </Routes>
        </Router>
      </Nav>
      <Introduction
        intro={summary}
        flexContainer={flexContainer}
        childContainerStyle={childContainerStyle}
        h1NameStyle={introh1NameStyle}
        pSytle={introPSytle}
      ></Introduction>
    </>
  )
}
