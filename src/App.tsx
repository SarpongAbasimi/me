import React from 'react'
import './App.css'
import { Home } from './pages/Home/Home'
import { Nav } from './components/Nav/Nav'
import { NavLinks } from './components/NavLinks/NavLinks'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { navSocials } from './utils/socialsLinks'
import {
  navLinksCss,
  navCss,
  liElementCss,
  fontAwesonIconCss,
} from './utils/stylesDefinitions'

export function App() {
  return (
    <>
      <Router>
        <Nav styles={navCss}>
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
        </Nav>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  )
}
